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
        dumpFile.write('option dispWidth=15;\ndisplay\n')
        lineno += 2
        const display = lineno + 1
        symbols.forEach((symbol) => {
          dumpFile.write(`$if defined ${symbol.name} ${symbol.name} \n`)
          lineno++
        })

        dumpFile.write(';\n')
        dumpFile.write(`${model}.limrow=${atom.config.get('linter-gams.Console limrow')};
          ${model}.limcol=${atom.config.get('linter-gams.Console limcol')};
          ${model}.solprint=1;
          ${model}.resLim=0;
          option limrow=${atom.config.get('linter-gams.Console limrow')};
          option limcol=${atom.config.get('linter-gams.Console limcol')};
          `)
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
    const gamsParams = config.gamsexe + ' "' + dumpFile.path + '" suppress=1 PS=0 lo=3 resLim=0 -scrdir="' + config.scratchdir + '" '
    shell.cd(config.scratchdir)
    shell.exec(gamsParams,(code,stdout,stderr) => {
      fs.unlink(dumpFile.path, (err) => {
        if (err) throw err
      })
      if (stderr && code !== 0) {
        if (global.gamsUpdating) global.gamsUpdating.a = false
        return utils.notify('GAMS Error', stderr + 'Due to this error the symbol data was not updated.')
      } else {
        return this.getData(`${config.scratchdir}${path.sep}${path.basename(dumpFile.path,'.gms')}.lst`,config,solves)
      }
    })
  },

  getData(lst,config,solves) {
    const stream = fs.createReadStream(lst)
    const rl = readline.createInterface({
      input: stream,
      crlfDelay: Infinity
    })
    let curSym,curData,curSection,curSolve

    function save(type,solve,symbol,data) {
      // save solve
      if (_.find(solves,{'line': Number(solve)})) {
        const statement = {
          model: _.find(solves,{'line': Number(solve)}).model,
          line: Number(solve)
        }
        if (!_.find(global.gamsSolves,{'line': Number(solve)})) {
          global.gamsSolves.push(statement)
        }
      }
      // save entry
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
          const symbol = line.split(/[\s]+/)[3]
          const pieces = line.split(/[\s]+/)
          pieces.splice(0,2)
          const data = pieces.join(' ')
          const solve = _.find(solves,{'display': dispLine})
          if (!solve) return
          curSym = symbol
          curSolve = solve.line
          curData = `---- ${data}`
        } else {
          const symbol = line.split(/[\s]+/)[1]
          curSym = symbol
          curData = `${line}\n`
        }
      }
      // sometimes set and parameters are displayed right below each other,
      // therefore the above if statement won't catch these statements
      else if (line.includes('PARAMETER') || line.includes('SET')) {
        if (curSym) save(curSection,curSolve,curSym,curData)
        if (curSection === 'Displays') {
          const symbol = line.split(/[\s]+/)[2]
          const pieces = line.split(/[\s]+/)
          pieces.splice(0,1)
          const data = pieces.join(' ')
          curSym = symbol
          curData = `---- ${data}`
        }
      }
      // abort if compilation errors
      else if (line.includes('Error Messages')) {
        console.log('Compilation error')
        rl.close()
        stream.destroy()
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
      fs.unlink(lst, (err) => {
        if (err) throw err
      })
    })
  }


}
