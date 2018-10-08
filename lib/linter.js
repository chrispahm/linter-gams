'use babel'

const fs = require('fs')
const errCodes = require('./utils/gamsErrCodes.js')
const createTree = require('./createRefTree.js')
const values = require('./values.js')
const utils = require('./utils/util.js')
const findUp = require('find-up')
const shell = require('shelljs')
const rl = require('readline-specific')
const path = require('path')
shell.config.execPath = shell.which('node')

export default {
  // Compile the GAMS code, read the listing file, return the file contents
  // and delete the file when finished reading
  compile (config, callback) {
    if(!config.gamsexe || config.gamsexe === 'Undefined') return utils.alert('noGAMS')

    // check if exp_starter.gms exists (or other GGIG project entry file), else just check input file
    let parameters = ''

    let entryFiles = ['.gamslintc.js']
    if (atom.config.get('linter-gams.Multi-file entry point')) {
      entryFiles = entryFiles.concat(atom.config.get('linter-gams.Multi-file entry point'))
    }

    // create dumpFile only if according setting is switched on
    let dumpOpt = ''
    if (atom.config.get('linter-gams.Parse symbol values')) {
      dumpOpt = 'dumpopt=11'
    }
    findUp(entryFiles, {cwd: config.directory}).then((entryFile) => {
      if (entryFile && path.parse(entryFile).base !== '.gamslintc.js') {
        config.filePath = entryFile
        config.directory = path.dirname(entryFile) + path.sep
        const gamsFile = path.parse(entryFile).base

        if (gamsFile === 'exp_starter.gms') {
          parameters = `-scrdir="${config.scratchdir}" --scen=incgen/runInc`
        } else if (gamsFile === 'capmod.gms') {
          parameters = `-scrdir="${config.scratchdir}" --scen=fortran`
        } else if (gamsFile === 'com_.gms') {
          parameters = `-procdirpath="${config.scratchdir}" --scen=com_inc`
        }
      } else if (entryFile && path.parse(entryFile).base === '.gamslintc.js') {
        const configFile = require(entryFile)
        config.directory = path.dirname(entryFile)
        config.filePath = configFile['Multi-file entry point'] ? path.resolve(config.directory,configFile['Multi-file entry point']) : config.filePath
        parameters = configFile['Command Line Arguments - Compilation'] ? configFile['Command Line Arguments - Compilation'].join(' ') : parameters
      }

      // create a random string so that multiple linting processes don't delete each others files
      const randStr =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

      // cd to given gams working directory and execute the gams compilation
      shell.cd(config.directory)
      shell.exec(`${config.gamsexe} "${config.filePath}" lo=0 a=c fileStem=${randStr} o=${config.scratchdir}${path.sep}${randStr}.lst  fErr="${config.scratchdir}${path.sep}${randStr}.err" ${dumpOpt} rf=${config.scratchdir}${path.sep}${randStr}.ref -scrdir="${config.scratchdir}" -workdir="${config.directory}" -curDir="${config.directory}" ${parameters}`, (code, stdout, stderr) => {
        if (stderr) {
          utils.notify('GAMS Error', stderr + 'Resaving the file usually solves this error.')
        }
        // remove temp files
        fs.readFile(`${config.scratchdir}${path.sep}${randStr}.err`, (err, data) => {
          if (err) throw err
          fs.unlink(`${config.scratchdir}${path.sep}${randStr}.err`, (err) => {
            if (err) throw err
          })
          fs.unlink(`${config.scratchdir}${path.sep}${randStr}.lst`, (err) => {
            if (err) throw err
          })

          // create reference tree and ctags compatible sym file
          createTree(`${config.scratchdir}${path.sep}${randStr}.ref`, config.projectPath)
            .then(() => {
              if (atom.config.get('linter-gams.Parse symbol values')) {
                global.gamsSolves = []
                values.parseDMP(`${config.scratchdir}${path.sep}${randStr}.dmp`, config)
              }
            })
          return callback(data.toString('utf8'))
        })
      })
    })
  },

  getRange (message, line, column, callback) {
    rl.oneline(message.location.file, line + 1, function(err, res) {
      if (err) throw new Error(err)

      const left = Math.max.apply(null, [/\((?=[^(]*$)/,/\)(?=[^)]*$)/, /\,(?=[^,]*$)/, /\[(?=[^[]*$)/, /\](?=[^]]*$)/, /\;(?=[^;]*$)/, /\.(?=[^.]*$)/, /\s(?=[^\s]*$)/].map(x => res.slice(0, column).search(x))) + 1
      let right = res.slice(column).search(/\s|\(|\)|\,|\.|\[|\]|\;/)
      if (right < 0) {
        right = res.length - 1
      }

      message.location.position = [[line, left],[line, right + column]]
      return callback([message])
    })
  },

  parse(listing, callback) {
    const error = listing.split(/\r\n?|\n/)[1].split(/[ ]+/)
    const ruleId = Number(error[3])
    const line = Number(error[2]) - 1
    const column = Number(error[4]) - 1
    const errFile = path.normalize(error.slice(5).join(' '))

    const message = {
      'severity': 'error',
      'location': {
        'file': errFile
      },
      'excerpt': errCodes[ruleId]
    }
    return this.getRange(message, line, column, callback)
  },

  lint(config) {
    // signal that set/parameter values are being updated
    if (global.gamsUpdating) global.gamsUpdating.a = true
    // run the GAMS compiler
    return new Promise((resolve) => {
      return this.compile(config, (listing) => {
        if (listing.split(/\n/).length <= 2) { return resolve([]) }
        return this.parse(listing, (message) => resolve(message))
      })
    })
  }

}
