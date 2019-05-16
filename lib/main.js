'use babel'

import { CompositeDisposable } from 'atom'
import $ from 'jquery'
import GamsView from './gams-view'
import * as gams from './linter.js'
import * as path from 'path'
import * as shell from 'shelljs'
import * as util from './utils/util.js'
shell.config.execPath = shell.which('node')


export default {
  config: {
    'Gams Executable': {
      'description': 'Path to GAMS executable, will default to PATH or common install directories.',
      'type': 'string',
      'default': util.getGamsPath(),
      'order': 1
    },
    'Scratch directory': {
      'description': 'The (scratch) directory where linter-GAMS will read/write temp files. Ideally located on a fast internal disk.',
      'type': 'string',
      'default': path.resolve(__dirname, '..', 'scrdir'),
      'order': 2
    },
    'Show compilation notifications': {
      'description': 'Notify when GAMS encountered system issues (e.g. missing .opt files) during compilation.',
      'type': 'boolean',
      'default': true,
      'order': 3
    },
    'Jump to Abort': {
      'description': 'In the listing file, automatically jump to the abort parameter if present. Gams View needs to be open.',
      'type': 'boolean',
      'default': true,
      'order': 4
    },
    'Auto unfold listing entries treshold': {
      'description': 'Automatically unfold listing entries (e.g. Displays) if their amount does not exceed the following value.',
      'type': 'integer',
      'default': 10,
      'order': 5
    },
    'Only auto unfold display statements': {
      'description': 'If true, only displays will be unfolded, else all entries that fall below the treshold above will be unfolded.',
      'type': 'boolean',
      'default': true,
      'order': 6
    },
    'Default parameter to jump to after solve': {
      'description': 'If found, the listing will be auto-scrolled to the following display paramter. Gams View needs to be open.',
      'type': 'string',
      'default': 'p_sumRes',
      'order': 7
    },
    'Multi-file entry point': {
      'description': 'You may specify the GAMS entry file for multi file models. Remember that for GGIG models these will be set by default.',
      'type': 'array',
      'default': ['exp_starter.gms', 'capmod.gms', 'com_.gms'],
      'items': {
        'type': 'string'
      },
      'order': 8
    },
    'Command Line Arguments - Compilation': {
      'description': 'Additional command line arguments to pass to GAMS during compilation.',
      'type': 'array',
      'default': [],
      'order': 9
    },
    'Command Line Arguments - Execution': {
      'description': 'Additional command line arguments to pass to GAMS during execution.',
      'type': 'array',
      'default': [],
      'order': 10
    },
    'Parse symbol values': {
      'description': 'BETA - Show symbol values for each solve in a console panel in the bottom dock. Recommended only for high end computers with >= 8gb RAM',
      'type': 'boolean',
      'default': false,
      'order': 11
    },
    'Console limrow': {
      'description': 'BETA - LIMROW setting if parse symbol values is turned on',
      'type': 'integer',
      'default': 3,
      'order': 12
    },
    'Console limcol': {
      'description': 'BETA - LIMCOL setting if parse symbol values is turned on',
      'type': 'integer',
      'default': 3,
      'order': 13
    },
    'Console dispWidth': {
      'description': 'BETA - dispWidth setting if parse symbol values is turned on',
      'type': 'integer',
      'default': 15,
      'order': 14
    }
  },

  gamsView: null,
  consolePanel: null,

  activate() {
    this.subscriptions = new CompositeDisposable()
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'gams-view:toggle': () => this.switch(),
      'gams-view:show': () => this.switch('on'),
      'gams-view:hide': () => this.switch('off'),
    }))

    require('atom-package-deps').install('linter-gams')
  },

  consumeConsolePanel(consolePanel) {
    this.consolePanel = consolePanel
  },

  deactivate() {
    this.subscriptions.dispose()
    this.gamsView.destroy()
  },

  serialize() {},

  switch (stat) {
    let editors = atom.workspace.getTextEditors()
    if (editors.length < 1 ||
      (editors.length === 1 && !editors[0].getPath())) return util.alert('WARN', 'No file is opened!')

    if (!this.gamsView) this.gamsView = new GamsView()

    const rightDock = atom.workspace.getRightDock()
    try {
      // Whatever do these first for performance
      rightDock.getPanes()[0].addItem(this.gamsView)
      rightDock.getPanes()[0].activateItem(this.gamsView)
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
        this.gamsView.vm.destroy()
      } else {
        rightDock.toggle()
      }
    } else if ('on' === stat) {
      rightDock.show()
    } else if ('off' === stat) {
      rightDock.hide()
    }
    if (rightDock.isVisible() && !this.gamsView.vm.locked) {
      this.gamsView.vm.$mount('#linter-gams')
      this.gamsView.vm.initialize(this.consolePanel)
    }
  },

  handleOneInstanceError() {
    let activePane = null
    const rightDock = atom.workspace.getRightDock()
    atom.workspace.getPanes().forEach(pane => {
      pane.getItems().forEach(item => {
        if (item === this.gamsView) activePane = pane
      })
    })
    if (activePane) {
      activePane.destroyItem(this.gamsView, true)
      this.gamsView.vm.destroy()
    }

    rightDock.getPanes()[0].addItem(this.gamsView)
    rightDock.getPanes()[0].activateItem(this.gamsView)
  },

  provideLinter() {
    const that = this
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
          'console': that.consolePanel
        })
      }
    }
  }

}
