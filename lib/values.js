'use babel'

const readline = require('readline')
const fs = require('fs')
const _ = require('lodash')
const shell = require('shelljs')
const path = require('path')
const utils = require('./utils/util')

/*
0. gams helpers spawns server as external process
1. receive call from linter with gams file / project on save
2. on file changes or init, run the following
 2.1. create .dmp and .ref file
 2.2. parse .dmp and .ref file, delete 'display ...' and detect 'solve.*?using' lines in .dmp
 2.3. inject 'abort ...' with all sets and parameters from parsed ref
 2.4. parse listing and store sets and params in database
3. when a symbol is clicked upon, server answers with details
*/
export default {
  parseDMP(file,config) {
    const rl = readline.createInterface({
      input: fs.createReadStream(file),
      crlfDelay: Infinity
    })

    const dumpFile = fs.createWriteStream(`${config.scratchdir}${path.sep}${path.basename(file,'.dmp')}.gms`, {flags: 'w'})
    const symbols = _.filter(global.gamsView, o => { return o.type === 'SET' || o.type === 'PARAM' && o.name})

    rl.on('line', (line) => {
      if (/solve (.*?) using/.test(line)) {
        dumpFile.write('option dispWidth=15;\nabort\n')
        symbols.forEach((symbol) => {
          dumpFile.write(`$if defined ${symbol.name} ${symbol.name} \n`)
        })

        dumpFile.write('; \n$exit\n')
      }
      if (!/display.*?;/gi.test(line)) { //&& !/abort.*?;/gi.test(line)
        dumpFile.write(line + '\n')
      }
    })

    rl.on('close', () => {
      dumpFile.end()
      fs.unlink(file, (err) => {
        if (err) throw err
      })
      return this.execDMP(dumpFile,config)
    })
  },
  execDMP(dumpFile,config) {
    const gamsParams = config.gamsexe + ' "' + dumpFile.path + '" suppress=1 PS=0 -scrdir="' + config.scratchdir + '" '
    shell.cd(config.scratchdir)
    shell.exec(gamsParams,(code,stdout,stderr) => {
      if (stderr) {
        utils.notify('GAMS Error', stderr + 'Due to this error the symbol data was not updated.')
      }
      fs.unlink(dumpFile.path, (err) => {
        if (err) throw err
      })
      return this.getData(`${config.scratchdir}${path.sep}${path.basename(dumpFile.path,'.gms')}.lst`,config)
    })
  },
  getData(lst) {
    const rl = readline.createInterface({
      input: fs.createReadStream(lst),
      crlfDelay: Infinity
    })

    let curSym
    let curData

    function save(symbol,data) {
      const entry = _.find(global.gamsView,{name: symbol})
      if (entry) entry.data = data
    }
    rl.on('line', (line) => {
      if (/^(----)\s*\d/.test(line)) {
        const symbol = line.split(/[\s]+/)[3]
        if (curSym) save(curSym,curData)
        curSym = symbol
        curData = line + '\n'
      } else if (/^(\*\*\*\*)\s*\d/.test(line)) {
        save(curSym,curData)
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
