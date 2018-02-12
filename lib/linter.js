const fs = require('fs')
const errCodes = require('./gamsErrCodes.js')
const glob = require('glob')
const os = require('os')
const shell = require('shelljs')
shell.config.execPath = shell.which('node')

// add getter to array prototype in order to get latest array element
// to fetch latest GAMS installation
if (!Array.prototype.hasOwnProperty('last')) {
	Object.defineProperty(Array.prototype, 'last', {
		get: function() {
			return this[this.length - 1]
		}
	})
}

// Find GAMS directory in standard OS-specific directories
// first, check if GAMS directory is in PATH (OS idependant)
let gamsExec = shell.which('gams')
// if not found, check in standard directories
if(!gamsExec) {
	// in case of windows
	if (os.platform() === 'win32') {
		if (glob.sync('C:/GAMS/*/*/')) {
			gamsExec = glob.sync('C:/GAMS/*/*/').last + 'gams.exe'
		}
		else if (glob.sync('N:/soft/GAMS*/')) {
			gamsExec = glob.sync('N:/soft/GAMS*/').last + 'gams.exe'
		}
	}
	// and mac
	else if (os.platform() === 'darwin') {
		if (glob.sync('/Applications/GAMS*/sysdir/'))
			gamsExec = glob.sync('/Applications/GAMS*/sysdir/').last + 'gams'
	}
}

// Compile the GAMS code, read the listing file, return the file contents
// and delete the file when finished reading
function compile (config, callback) {
	const gamsFile = config.entry
	// if GAMS path is specified in config file, use that one, else throw an error
	if (config.gamsPath) {
		gamsExec = config.gamsPath
	}
	else if (!gamsExec) {
		throw new Error(`Could not find GAMS in PATH variable or standard directories.
			Please specify in linter-gams.config.js file or add to PATH variable.`)
	}

	// add GGIG specific params to GAMS call if aplicable
	let ggigParams = ''
	if (config.ggig) {
		ggigParams = config.ggigParams
	}
	shell.cd(config.directory)
	shell.exec(`${gamsExec} ${gamsFile} lo=0 action=c errMsg=2 o=${config.directory}/gamsLinter.lst fErr=${config.directory}/gamsLinter.err ${ggigParams}`, function(code, stdout, stderr) {
		if (stderr) {
			throw new Error(stderr)
		}
		fs.readFile(`${config.directory}/gamsLinter.err`, (err, data) => {
			if (err) throw err
			fs.unlink(`${config.directory}/gamsLinter.err`, (err) => {
				if (err) throw err
			})
			fs.unlink(`${config.directory}/gamsLinter.lst`, (err) => {
				if (err) throw err
			})
			return callback(data.toString('utf8'))
		})
	})
}

function parse(listing, gamsFile) {
	const error = listing.split(/\n/)[1].split(/[ ]+/)
	const ruleId = Number(error[3])
	const line = Number(error[2]) - 1
	const column = Number(error[4]) - 1
	gamsFile = error[5]

	const message = {
		// get the GAMS error code, which is placed between the first ****, a following
		// $ and a blank line
		'severity': 'error',
		'location': {
			'file': gamsFile,
			'position': [[line, column - 2], [line, column + 1]]
		},
		'excerpt': errCodes[ruleId]
	}
	return [message]
}

const lint = (config) => {
	return new Promise((resolve, reject) => {
		compile(config, (listing) => {
			if (listing.split(/\n/).length <= 2) return resolve()
			return reject(parse(listing, config.entry))
		})
	})
}

// Run the linting process
// 1. compile the code and return the listing file
// 2. search for errors (indicated by '****') in the listing file
// 3. if an entry is found, an object representing the metrics of the error is
//    returned to stdout
module.exports = {'lint': lint}
