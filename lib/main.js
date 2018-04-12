'use babel'
import { CompositeDisposable } from 'atom'
import $ from 'jquery'
import StructureView from './gams-view'
import * as gams from './linter.js'
import * as path from 'path'
import * as shell from 'shelljs'
import * as util from './util'
shell.config.execPath = shell.which('node')


export default {
  config: {
    'Gams Executable': {
      'description': 'Path to GAMS executable, will default to PATH or common install directories.',
      'type': 'string',
      'default': util.getGamsPath()
    },
    'Scratch directory': {
      'description': 'The (scratch) directory where linter-GAMS will read/write temp files. Ideally located on a fast internal disk.',
      'type': 'string',
      'default': path.resolve(__dirname + '/../scrdir')
    },
    'Create Tags': {
      'description': 'Create tags file (ctags compatible) from GAMS symbols in project root. This way you can jump to declarations quickly.',
      'type': 'boolean',
      'default': true
    }
  },

  structureView: null,

  activate() {
    this.subscriptions = new CompositeDisposable()
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'gams-view:toggle': () => this.switch(),
      'gams-view:show': () => this.switch('on'),
      'gams-view:hide': () => this.switch('off'),
    }))

    require('atom-package-deps').install('linter-gams')
  },

  deactivate() {
    this.subscriptions.dispose()
    this.structureView.destroy()
  },

  serialize() {},

  switch (stat) {
    let editors = atom.workspace.getTextEditors()
    if (editors.length < 1 ||
      (editors.length === 1 && !editors[0].getPath())) return util.alert('WARN', 'No file is opened!')

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
      if (rightDock.state.visible) {
        rightDock.toggle()
        this.structureView.vm.destroy()
      } else {
        rightDock.toggle()
      }
    } else if ('on' === stat) {
      rightDock.show()
    } else if ('off' === stat) {
      rightDock.hide()
    }
    if (rightDock.isVisible() && !this.structureView.vm.locked) this.structureView.vm.initialize()
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
      this.structureView.vm.destroy()
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
        })
      }
    }
  },

  notify(title, msg) {
    atom.notifications.addInfo(title, { detail: msg, dismissable: true })
  },

  alert(title, msg) {
    atom.confirm({
      message: title,
      detailedMessage: msg,
      buttons: {
        Close: function() {
          return
        }
      }
    })
  }
}
