'use babel'

const {execLine} = require('./utils.js')
const readline = require('readline')
const fs = require('fs')

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
export {
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
    
    const dumpFile = fs.openSync(`${config.scratchdir}${path.sep}${path.basename(file,'.dmp')}.gms`, 'w')
    let lineno = 0
    const solves = [];
    
    rl.on('line', (line) => {
      lineno++
      if (/solve (.*?) using/.test(line)) {
        solves.push({
          model: /solve (.*?) using/g).exec(line)[1],
          line: lineno
        })
      }
      if (/display.*?;/.test(line)) {
        fs.write(dumpFile, line)
      }
    })
    
    rl.on('close', () => {
      this.injectSym(dumpFile,'SP')
    })
  },
  
}
