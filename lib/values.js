'use babel'

const readline = require('readline')
const fs = require('fs')
const _ = require('lodash')
const shell = require('shelljs')
const path = require('path')
const utils = require('./utils/util')

export default {

  parseDMP(file,config) {
    const stream = fs.createReadStream(file)
    const rl = readline.createInterface({
      input: stream,
      crlfDelay: Infinity
    })

    let lineno = 0

    const dumpFile = fs.createWriteStream(`${config.scratchdir}${path.sep}${path.basename(file,'.dmp')}.gms`, {flags: 'w'})
    const symbols = _.filter(global.gamsView, o => { return o.type === 'SET' || o.type === 'PARAM' && o.name})
    const solves = []

    rl.on('line', (line) => {
      if (/solve (.*?) using/.test(line)) {
        const model = line.split('solve')[1].split(/\s+/)[1]
        console.log(model)
        dumpFile.write('option dispWidth=15;\ndisplay\n')
        lineno += 2
        const display = lineno + 1
        symbols.forEach((symbol) => {
          dumpFile.write(`$if defined ${symbol.name} ${symbol.name} \n`)
          lineno++
        })

        dumpFile.write(';\n')
        dumpFile.write(`${model}.limrow=3;${model}.limcol=3;${model}.solprint=1;option limrow=3;option limcol=3;\n`)
        dumpFile.write(line + '\n')
        lineno += 3
        solves.push({
          model: model,
          line: lineno,
          display: display
        })
      } else if (!/display.*?;/gi.test(line)) {
        lineno++
        dumpFile.write(line + '\n')
      }
    })

    rl.on('close', () => {
      dumpFile.end()
      fs.unlink(file, (err) => {
        if (err) throw err
      })
      return this.execDMP(dumpFile,config,solves)
    })
  },

  execDMP(dumpFile,config,solves) {
    const gamsParams = config.gamsexe + ' "' + dumpFile.path + '" suppress=1 PS=0 -scrdir="' + config.scratchdir + '" '
    shell.cd(config.scratchdir)
    shell.exec(gamsParams,(code,stdout,stderr) => {
      if (stderr) {
        utils.notify('GAMS Error', stderr + 'Due to this error the symbol data was not updated.')
      }
      //fs.unlink(dumpFile.path, (err) => {
      //  if (err) throw err
      //})
      return this.getData(`${config.scratchdir}${path.sep}${path.basename(dumpFile.path,'.gms')}.lst`,config,solves)
    })
  },

  getData(lst,config,solves) {
    const rl = readline.createInterface({
      input: fs.createReadStream(lst),
      crlfDelay: Infinity
    })
    let curSym,curData,curSection,curSolve

    function save(type,solve,symbol,data) {
      const entry = _.find(global.gamsView,{name: symbol})
      if (entry && entry.data) {
        if (entry.data[0].data === data) {
          entry.data.push({
            solve: solve,
            data: entry.data[0].data
          })
        } else {
          entry.data.push({
            solve: solve,
            data: data
          })
        }
      } else if (entry) {
        entry.data = [{
          solve: solve,
          data: data
        }]
      }
    }

    rl.on('line', (line) => {
      // Save current section of the listing file and the associated solve
      if (line.includes('E x e c u t i o n')) {
        curSection = 'Displays'
      } else if (line.includes('Equation Listing')) {
        curSection = 'Equations'
        curSolve = line.split(/[\s]+/)[8]
      } else if (line.includes('Column Listing')) {
        curSection = 'Variables'
        curSolve = line.split(/[\s]+/)[8]
      }
      // save data according to sections
      // Displays, Equations, Variables
      else if (/^(----)\s*/.test(line)) {
        if (curSym) save(curSection,curSolve,curSym,curData)
        if (curSection === 'Displays') {
          const dispLine = Number(line.split(/[\s]+/)[1])
          const type = line.split(/[\s]+/)[2]
          const symbol = line.split(/[\s]+/)[3]
          curSym = symbol
          curSolve = _.find(solves,{'display': dispLine}).line
          curData = `---- ${type} ${symbol}\n`
        } else {
          const symbol = line.split(/[\s]+/)[1]
          curSym = symbol
          curData = `${line}\n`
        }
      }
      // anything else
      else if (/^(\*\*\*\*)\s*\d/.test(line) || /^(GAMS)/.test(line)) {
        save(curSection,curSolve,curSym,curData)
      } else {
        curData += line + '\n'
      }
    })

    rl.on('close', () => {
      if (global.gamsUpdating) global.gamsUpdating.a = false
      //fs.unlink(lst, (err) => {
      //  if (err) throw err
      //})
    })
  }


}
