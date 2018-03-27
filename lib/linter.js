'use babel'
const fs = require('fs')
const errCodes = require('./gamsErrCodes.js')
const createTags = require('./createTags.js')
const createTree = require('./createRefTree.js')
const findUp = require('find-up')
const shell = require('shelljs')
const os = require('os')
const rl = require('readline-specific')
const path = require('path')
shell.config.execPath = shell.which('node')

// Compile the GAMS code, read the listing file, return the file contents
// and delete the file when finished reading
function compile (config, callback) {
	// check if exp_starter.gms exists (GGIG project), else just check input file
	let ggigParams = ''
	findUp(['exp_starter.gms', 'capmod.gms'], config.directory).then((expStarter) => {
		if (expStarter) {
			config.filePath = expStarter
			config.directory = path.dirname(expStarter) + path.sep
			const gamsFile = path.parse(expStarter).base
			if (gamsFile === 'exp_starter.gms') {
				ggigParams = '--scen=incgen\\\\runInc'
			} else {
				ggigParams = '--scen=fortran'
			}
		}

		// as we don't want to create a lst output file, we need to determine the platform
		// specific code to not create the file
		let nullOutput = 'nul'
		if (os.platform() === 'darwin') {
			nullOutput = '/dev/null'
		}

		// create a random string so that multiple linting processes don't delete each others files
		const randStr =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

		// add ref file GAMS param to exec if set in config file
		let tagsParam = ''
		if (config.createTags) {
			tagsParam = `rf=${config.scratchdir}${path.sep}${randStr}.ref`
		}

		// cd to given gams working directory and execute the gams compilation
		shell.cd(config.directory)
		shell.exec(`${config.gamsexe} ${config.filePath} lo=0 action=c o=${nullOutput} ${tagsParam} fErr=${config.scratchdir}${path.sep}${randStr}.err -scrdir="${config.scratchdir}" -workdir="${config.directory}" -curDir="${config.directory}" ${ggigParams}`, function(code, stdout, stderr) {
			if (stderr) {
				throw new Error(stderr)
			}
			// remove temp files
			fs.readFile(`${config.scratchdir}${path.sep}${randStr}.err`, (err, data) => {
				if (err) throw err
				fs.unlink(`${config.scratchdir}${path.sep}${randStr}.err`, (err) => {
					if (err) throw err
				})
				if (config.createTags) createTags(`${config.scratchdir}${path.sep}${randStr}.ref`, config.projectPath)
				createTree(`${config.scratchdir}${path.sep}${randStr}.ref`)
				return callback(data.toString('utf8'))
			})
		})
	})
}

function getRange (message, line, column, callback) {
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
}

function parse(listing, callback) {
	const error = listing.split(/\r\n?|\n/)[1].split(/[ ]+/)
	const ruleId = Number(error[3])
	const line = Number(error[2]) - 1
	const column = Number(error[4]) - 1
	const errFile = path.normalize(error[5])

	const message = {
		'severity': 'error',
		'location': {
			'file': errFile
		},
		'excerpt': errCodes[ruleId]
	}
	return getRange(message, line, column, callback)
}

const lint = (config) => {
	return new Promise((resolve) => {
		return compile(config, (listing) => {
			if (listing.split(/\n/).length <= 2) { return resolve([]) }
			return parse(listing, (message) => resolve(message))
		})
	})
}

module.exports = {'lint': lint}
