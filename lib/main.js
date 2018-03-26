'use babel'
import { CompositeDisposable } from 'atom'
import $ from 'jquery'
import StructureView from './gams-view'
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
// TODO: Add button + searchbar to top of sidebar (like in structure view)
//       Style the symbol tree

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

	structureView: null,

	activate(state) {
		this.subscriptions = new CompositeDisposable()
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'gams-view:toggle': () => this.switch(),
			'gams-view:show': () => this.switch('on'),
			'gams-view:hide': () => this.switch('off'),
		}))
	},

	deactivate() {
		this.subscriptions.dispose()
		this.structureView.destroy()
	},

	serialize() {},

	switch (stat) {
		let editors = atom.workspace.getTextEditors()
		if (editors.length < 1 ||
      (editors.length === 1 && !editors[0].getPath())) return console.log('alert')//Util.alert('WARN', 'No file is opened!');

		if (!this.structureView) this.structureView = new StructureView()

		const rightDock = atom.workspace.getRightDock()
		try {
			// Whatever do these first for performance
			rightDock.getPanes()[0].addItem(this.structureView)
			rightDock.getPanes()[0].activateItem(this.structureView)
		} catch (e) {
			if (e.message.includes('can only contain one instance of item')) {
				this.handleOneInstanceError()
			}
		}

		// Sometimes dock title is hidden for somehow,
		// so force recalculate here to redraw
		$('ul.list-inline.tab-bar.inset-panel').height()
		if (!stat) {
			rightDock.toggle()
			this.structureView.vm.viewShow = !this.structureView.vm.viewShow
		} else if ('on' === stat) {
			rightDock.show()
			this.structureView.vm.viewShow = true
		} else if ('off' === stat) {
			rightDock.hide()
			this.structureView.vm.viewShow = false
		}
		if (rightDock.isVisible()) this.structureView.initialize()
	},

	handleOneInstanceError() {
		let activePane = null
		const rightDock = atom.workspace.getRightDock()
		atom.workspace.getPanes().forEach(pane => {
			pane.getItems().forEach(item => {
				if (item === this.structureView) activePane = pane
			})
		})
		if (activePane) {
			activePane.destroyItem(this.structureView, true)
			this.structureView.destroy()
		}

		rightDock.getPanes()[0].addItem(this.structureView)
		rightDock.getPanes()[0].activateItem(this.structureView)
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
