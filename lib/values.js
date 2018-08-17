'use babel'

const {execLine} = require('./utils/util.js')
const readline = require('readline')
const fs = require('fs')
const _ = require('lodash')

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
	createDMP(file,dir) {
		return new Promise((resolve,reject) => {
			utils.execLine(file,dir,' lo=0 a=c dumpopt=11')
				.then(res => {
          shell.cd(res.directory)
          let child = shell.exec(res.gamsParams,{async:true})
          child.stdout.on('end', () => {
            console.log('finished')
          })
				})
		})
	},
  parseDMP(file,config) {
    const rl = readline.createInterface({
      input: fs.createReadStream(file),
      crlfDelay: Infinity
    })
    
    const dumpFile = fs.createWriteStream(`${config.scratchdir}${path.sep}${path.basename(file,'.dmp')}.gms`, {flags: 'w'})
    const solves = [];
    const sets = _.filter(global.gamsView, o => { return o.type === 'SET' && o.name})
    const params = _.filter(global.gamsView, o => { return o.type === 'PARAM' && o.name})
    
    rl.on('line', (line) => {
      if (/solve (.*?) using/.test(line)) {
        dumpFile.write('option dispWidth=31;\nabort\n')
        sets.forEach((set) => {
          dumpFile.write(`$if defined ${set.name} ${set.name} \n`)
        })
        params.forEach((param) => {
          dumpFile.write(`$if defined ${param.name} ${param.name} \n`)
        })
        dumpFile.write('; \n$exit\n')
      }
      if (!/display.*?;/gi.test(line)) {
        dumpFile.write(line + '\n')
      }
    })
    
    rl.on('close', () => {
      dumpFile.end()
      console.log(sets)
      fs.unlink(file, (err) => {
        if (err) throw err
      })
      // this.injectSym(dumpFile,solves,'SP')
    })
  }
}
