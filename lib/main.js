'use babel'
import * as gams from './linter.js'
import * as glob from 'glob'
import * as shell from 'shelljs'
shell.config.execPath = shell.which('node')

const os = require('os')

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
function getGamsPath() {
	let gamsExec = shell.which('gams')
	// if not found, check in standard directories
	if(!gamsExec) {
		// in case of windows
		if (os.platform() === 'win32') {
			if (glob.sync('C:/GAMS/*/*/')) {
				gamsExec = glob.sync('C:/GAMS/*/*/').last + 'gams.exe'
				return gamsExec
			}
			else if (glob.sync('N:/soft/GAMS*/')) {
				gamsExec = glob.sync('N:/soft/GAMS*/').last + 'gams.exe'
				return gamsExec
			}
		}
		// and mac
		else if (os.platform() === 'darwin') {
			if (glob.sync('/Applications/GAMS*/sysdir/')) {
				gamsExec = glob.sync('/Applications/GAMS*/sysdir/').last + 'gams'
				return gamsExec
			}
		}
	}
}


export default {
	config: {
		'Gams Executable': {
			'description': 'Path to GAMS executable, will default to PATH or common install directories.',
			'type': 'string',
			'default': getGamsPath()
		},
		'Scratch directory': {
			'description': 'The (scratch) directory where linter-GAMS will read/write temp files. Ideally located on a fast internal disk.',
			'type': 'string',
			'default': __dirname
		},
		'Create Tags': {
			'description': 'Create tags file (ctags compatible) from GAMS symbols in project root. This way you can jump to declarations quickly.',
			'type': 'boolean',
			'default': true
		}
	},
	provideLinter() {
		return {
			name: 'linter-gams',
			scope: 'project',
			lintsOnChange: false,
			grammarScopes: ['source.gams', 'source.gms'],
			lint(textEditor) {
				const filePath = textEditor.getPath()
				const directory = textEditor.getDirectoryPath()
				const projectPath = atom.project.getPaths()[0]

				return gams.lint({
					'filePath': filePath,
					'directory': directory,
					'projectPath': projectPath,
					'gamsexe': atom.config.get('linter-gams.Gams Executable'),
					'scratchdir': atom.config.get('linter-gams.Scratch directory'),
					'createTags': atom.config.get('linter-gams.Create Tags')
				})
			}
		}
	}
}
