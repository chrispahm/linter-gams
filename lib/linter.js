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
const util = require('util')

const readFile = util.promisify(fs.readFile)
const unlink = util.promisify(fs.unlink)
const oneline = util.promisify(rl.oneline)
shell.config.execPath = shell.which('node')

export default {
  // Compile the GAMS code, read the listing file, return the file contents
  // and delete the file when finished reading
  async getParameters(config) {
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
    const entryFile = await findUp(entryFiles, {cwd: config.directory})
    if (entryFile && path.parse(entryFile).base !== '.gamslintc.js') {
      config.filePath = entryFile
      config.directory = path.dirname(entryFile) + path.sep
      const gamsFile = path.parse(entryFile).base

      if (gamsFile === 'exp_starter.gms') {
        parameters = `-scrdir="${config.scratchdir}" optdir=opt --scen=incgen/runInc`
      } else if (gamsFile === 'capmod.gms') {
        parameters = `-scrdir="${config.scratchdir}" --scen=fortran`
      } else if (gamsFile === 'com_.gms') {
        parameters = `-procDirPath="${config.scratchdir}" --scen=com_inc --task="Simulation" --scrdir="${config.scratchdir}" optdir=opt`
      }
      // add compile time parameters from settings view
      parameters += ` ${atom.config.get('linter-gams.Command Line Arguments - Compilation').join(' ')}`

    } else if (entryFile && path.parse(entryFile).base === '.gamslintc.js') {
      const configFile = require(entryFile)
      config.directory = path.dirname(entryFile)
      config.filePath = configFile['Multi-file entry point'] ? path.resolve(config.directory,configFile['Multi-file entry point']) : config.filePath
      parameters = configFile['Command Line Arguments - Compilation'] ? configFile['Command Line Arguments - Compilation'].join(' ') : parameters
    }
    return {parameters, dumpOpt}    
  },
  compile (config) {
    return new Promise(async resolve => {
      if(!config.gamsexe || config.gamsexe === 'Undefined') return utils.alert('noGAMS')
      const {parameters, dumpOpt} = await this.getParameters(config)
      // create a random string so that multiple linting processes don't delete each others files
      const randStr =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

      // cd to given gams working directory and execute the gams compilation
      shell.cd(config.directory)
      const execString = `${config.gamsexe} "${config.filePath}" lo=3 a=c o="${config.scratchdir}${path.sep}${randStr}.lst" fErr="${config.scratchdir}${path.sep}${randStr}.err" ${dumpOpt} rf="${config.scratchdir}${path.sep}${randStr}.ref" -scrdir="${config.scratchdir}" -workdir="${config.directory}" -curDir="${config.directory}" ${parameters}`
      console.log(execString);
      const gamsProcess = shell.exec(execString, {async: true})

      let consoleErrors = ''
      let stdErrors = false

      gamsProcess.stderr.on('data', (data) => {
        stdErrors = true
        consoleErrors += data
      })

      gamsProcess.stdout.on('data', (data) => {
        consoleErrors += data
      })
      gamsProcess.on('close', async () => {
        if (atom.config.get('linter-gams.Show compilation notifications')) {
          if (stdErrors) {
            utils.notify('Something happened.','There were system call errors during compilation.\nThese errors might not be too relevant for your model.\nYou can check the errors in the console in the bottom dock.')
            this.consolePanel.clear()
            this.consolePanel.log(consoleErrors)
          }
        }
        // remove temp files
        const data = await readFile(`${config.scratchdir}${path.sep}${randStr}.err`)
        await unlink(`${config.scratchdir}${path.sep}${randStr}.err`)
        await unlink(`${config.scratchdir}${path.sep}${randStr}.lst`)

        // create reference tree and ctags compatible sym file
        await createTree(`${config.scratchdir}${path.sep}${randStr}.ref`, config.projectPath)
        if (atom.config.get('linter-gams.Parse symbol values')) {
          global.gamsSolves = []
          values.parseDMP(`${config.scratchdir}${path.sep}${randStr}.dmp`, config)
        }
        return resolve(data.toString('utf8'))
      })
    })
  },
  async getRange(message, line, column) {
    const res = await oneline(message.location.file, line + 1)
    const left = Math.max.apply(null, [/\((?=[^(]*$)/,/\)(?=[^)]*$)/, /\,(?=[^,]*$)/, /\[(?=[^[]*$)/, /\](?=[^]]*$)/, /\;(?=[^;]*$)/, /\.(?=[^.]*$)/, /\s(?=[^\s]*$)/].map(x => res.slice(0, column).search(x))) + 1
    let right = res.slice(column).search(/\s|\(|\)|\,|\.|\[|\]|\;/)
    if (right < 0) {
      right = res.length - 1
    }

    message.location.position = [[line, left],[line, right + column]]
    return message
  },
  async getErrors(listing,maxErrors) {
    let errors = listing.split(/\r\n?|\n/).slice(1,maxErrors + 1)
    if (!maxErrors) errors = listing.split(/\r\n?|\n/).slice(1)
    
    return Promise.all(errors.filter(err => err.length).map((err,i) => this.parse(err,i)))
  },
  async parse(error,index) {
    error = error.split(/[ ]+/)
    const ruleId = Number(error[3])
    const line = Number(error[2]) - 1
    const column = Number(error[4]) - 1
    const errFile = path.normalize(error.slice(5).join(' '))
    // only mark first error as an error, second as a warning, and subsequent
    // errors as infos, so that these can be highlighted correctly by the
    // linter-ui
    let severity = 'error'
    if (index === 1) severity = 'warning'
    else if (index > 1) severity = 'info'
    if (ruleId === 257) severity = 'warning'
    
    const message = {
      'severity': severity,
      'location': {
        'file': errFile
      },
      'excerpt': errCodes[ruleId]
    }
    return await this.getRange(message, line, column)
  },
  async lint(config) {
    // set console panel
    this.consolePanel = config.console
    // signal that set/parameter values are being updated
    if (global.gamsUpdating) global.gamsUpdating.a = true
    // run the GAMS compiler
    const compErrors = await this.compile(config)
    // maximum errors to display
    const maxErrors = atom.config.get('linter-gams.Max Errors to Display')
    if (compErrors.split(/\n/).length <= 2) return []
    const errors = await this.getErrors(compErrors,maxErrors)
    return errors
  }
}
