'use babel'

import Vue from 'vue/dist/vue.js'
import { CompositeDisposable, watchPath } from 'atom'
import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import SimpleUndo from'simple-undo'
import { filter } from 'fuzzaldrin'
import lst from '../lib/lstParser.js'
import utils from '../lib/utils/util.js'

let cursorHistory = {}

const history = new SimpleUndo({
  maxLength: 10,
  provider: objectSerializer
})

function objectSerializer(done) {
  done(JSON.stringify(cursorHistory))
}

function objectUnserializer(serialized) {
  cursorHistory = JSON.parse(serialized)
}

const htmlString = fs.readFileSync(path.join(__dirname, 'gams-view.html'),'utf8')

module.exports = new Vue({
  data: {
    name: undefined,
    type: undefined,
    description: undefined,
    domain: undefined,
    declared: undefined,
    defined: undefined,
    assigned: undefined,
    assignedShown: false,
    implAsn: undefined,
    implAsnShown: false,
    searchString: '',
    ref: undefined,
    file: undefined,
    refShown: false,
    control: undefined,
    controlShown: false,
    cursorListener: undefined,
    noTagHint: 'Open a GAMS file, and click on a symbol to see it\'s definition',
    lastFile: undefined,
    viewShow: false,
    running: false,
    locked: false,
    grammarScope: 'source.gams',
    lstTree: undefined,
    lstTreeFile: {},
    lstSearchEntry: '',
    viewLoading: false,
    consolePanel: undefined,
    clickedSym: '',
    selectedSolve: 0
  },

  created: function () {
    this.debouncedUpdateVue = _.debounce(this.updateVue, 250, { leading: true})
    this.debouncedParseLst = _.debounce(this.parseListing, 20, { leading: true})
    this.initialize()
  },

  methods: {
    moveCursor(dir) {
      if(dir === 'back') {
        history.undo(objectUnserializer)
      } else {
        history.redo(objectUnserializer)
      }
      // update cursor position and or vue symbol
      if (cursorHistory && cursorHistory.position) {
        this.jumpToPosition(cursorHistory.position.file, cursorHistory.position.line + 1, cursorHistory.position.column + 1, true)
        this.debouncedUpdateVue(cursorHistory.name)
      }
    },

    jumpToPosition(file,line,column,noSave,noActiv) {
      let activate = true
      if (noActiv) activate = false
      // save current and new cursor position in history
      // and also current vue symbol
      if (!noSave) {
        if (!cursorHistory) cursorHistory = {}
        cursorHistory.position = this.cursorPosition
        cursorHistory.name = this.name
        history.save()
        cursorHistory.position = {
          file: file,
          line: line,
          column: column
        }
        history.save()
      }

      let beginningOfLine = false
      if(!column) {
        column = 1
        beginningOfLine = true
      }
      atom.workspace.open(file, {activatePane: activate}).then(() => {
        return utils.moveToPosition([line - 1,column -1], beginningOfLine)
      })
    },

    toggleLock() {
      if (this.locked) {
        this.locked = false
        this.initialize(this.consolePanel)
      } else {
        this.locked = true
        this.destroy()
      }
    },

    jumpToggle(elem) {
      if (elem.entries) {
        elem.open = !elem.open
      } else {
        this.jumpToPosition(elem.file, elem.line, elem.column)
      }
    },


    initialize(consolePanel) {
      this.consolePanel = consolePanel
      // initialize cursor listeners (GAMS files) in order to update sidebar
      // according to clicked on symbol
      this.cursorListener = new CompositeDisposable()

      this.cursorListener.add(atom.workspace.observeActiveTextEditor(editor => {
        if (!editor) return
        const editorSubscriptions = new CompositeDisposable()
        this.file = editor.getPath()
        this.grammarScope = editor.getGrammar().scopeName

        //
        if (this.grammarScope == 'source.gams') {
          this.noTagHint = false
        }
        // listing files
        if (this.grammarScope == 'source.gams-lst') this.debouncedParseLst(this.file)

        this.cursorPosition = {
          file: this.file,
          line: editor.getLastCursor().getBufferPosition().row,
          column: editor.getLastCursor().getBufferPosition().column
        }
        this.updateValues(editor)

        editorSubscriptions.add(editor.onDidChangeCursorPosition((e) => {
          if (e.textChanged) {
            return
          }
          this.cursorPosition = {
            file: editor.getPath(),
            line: editor.getLastCursor().getBufferPosition().row,
            column: editor.getLastCursor().getBufferPosition().column
          }
          this.updateValues(editor)
        }))

        editorSubscriptions.add(editor.onDidStopChanging(() => {
          if (editor.getGrammar().scopeName === 'source.gams-lst') return this.debouncedParseLst(this.file, true)
        }))

        editorSubscriptions.add(editor.onDidDestroy(() => {
          editorSubscriptions.dispose()
          this.cursorListener.remove(editorSubscriptions)
        }))

        this.cursorListener.add(editorSubscriptions)
      }))

      // add file watcher for listing files, so listing sidebar is always up-to-date
      this.fileWatchers = atom.project.getPaths().forEach(project => {
        watchPath(project,{}, events => {
          for (const event of events) {
            if (path.extname(event.path) === '.lst' && this.viewShow) {
              this.debouncedParseLst(event.path, true)
            }  
          }
        })
      })

      // focus search bar on open
      this.focusSearch()
    },

    updateValues(activeEditor, clickedSym) {
      if (this.grammarScope == 'source.gams-lst') return
      else if (activeEditor) {
        utils.getSymbolAtCursor(activeEditor, (symbol) => {
          this.clickedSym = symbol
        })
      } else {
        // save state
        if (!cursorHistory) cursorHistory = {}
        cursorHistory.position = this.cursorPosition
        cursorHistory.name = this.name
        history.save()
        cursorHistory.name = clickedSym
        history.save()

        this.debouncedUpdateVue(clickedSym)
      }
    },

    startStopModel() {
      if (atom.packages.loadedPackages['gams-helpers']) {
        if (global.gamsRunning.a) {
          atom.packages.loadedPackages['gams-helpers'].mainModule.stop()
        } else {
          atom.packages.loadedPackages['gams-helpers'].mainModule.run()
        }
      }
    },

    parseListing(file, forceUpdate) {
      if (!this.lstTree || !this.lstTreeFile[file] || forceUpdate) {
        lst.ListingParser(file, (ast) => {
          try {
            this.lstTreeFile[file] = ast
            this.lstTree = JSON.parse(JSON.stringify(ast))
            // jump to position of abort statement automatically if setting is set to true
            const abort = this.lstTree.find(entry => entry.type === 'Abort')
            const defaultParam = atom.config.get('linter-gams.Default parameter to jump to after solve')

            // check if search bar has an entry, in that case update the listing accordingly
            if (this.lstSearchEntry !== '') this.updateLst()

            // check if listing is already open, don't open again
            // const openFile = atom.workspace.getActiveTextEditor().getPath()
            // if (file === openFile) return

            if(abort && atom.config.get('linter-gams.Jump to Abort')) {
              this.jumpToPosition(file,abort.line[0],0,true,true)
            } else if (defaultParam) {
              const defaultParamLine = lst.getAbortLine(defaultParam,null,ast)
              if (defaultParamLine) this.jumpToPosition(file,defaultParamLine,0,true,true)
            }
          } catch (e) {
            console.log(e)
          }
        })
      } else {
        this.lstTree = this.lstTreeFile[file]
        if (this.lstSearchEntry !== '') this.updateLst()
      }
    },

    updateLst() {
      const lstSearch = document.getElementById('lstSearch')
      if (!lstSearch) return

      this.lstSearchEntry = lstSearch.getModel().getText()
      if (this.lstSearchEntry === '') return
      if (this.lstTree) {
        try {
          this.lstTree = JSON.parse(JSON.stringify(this.lstTreeFile[this.file]))
        } catch (e) {
          console.log(e)
        }
        // first remove elements that do not have any child entries
        this.lstTree = this.lstTree.filter(entry => entry.entries && entry.entries.length > 0)
        // fuzzy find search pattern
        this.lstTree = this.lstTree.map(entry => {
          entry.entries = filter(entry.entries, this.lstSearchEntry, {
            key: 'name'
          })
          if (entry.entries.length < atom.config.get('linter-gams.Auto unfold listing entries treshold')) {
            entry.open = true
          }
          return entry
        })
        // remove empty containers so only matches are shown
        this.lstTree = this.lstTree.filter(entry => entry.entries.length > 0)
      }
    },

    focusSearch() {
      // make sure sidebar is open
      let element
      if(this.grammarScope === 'source.gams-lst') {
        element = document.getElementById('lstSearch')
      } else {
        element = document.getElementById('gamsSearch')
      }
      if(element) element.focus()
    },

    getSymbol() {
      this.clickedSym = document.getElementById('gamsSearch').getModel().getText()
    },

    updateVue(symFound) {
      if(!symFound && document.getElementById('gamsSearch')) {
        symFound = document.getElementById('gamsSearch').getModel().getText()
      }
      if(symFound === '') return
      const symbol = filter(global.gamsView, symFound, {'key': 'name', 'maxResults': 1})[0]

      if(symbol) {
        this.name = symbol.name || null
        this.type = symbol.type || null
        this.description = symbol.description || null
        this.domain = symbol.domain || null
        this.declared = symbol.declared || null
        this.defined = symbol.defined || null
        this.assigned = symbol.assigned || null
        if (this.assigned && this.assigned.length > 10) this.assignedShown = false
        this.implAsn = symbol['impl-asn'] || null
        if (this.implAsn && this.implAsn.length > 10) this.implAsnShown = false
        this.ref = symbol.ref || null
        if (this.ref && this.ref.length > 10) this.refShown = false
        this.control = symbol.control || null
        if (this.control && this.control.length > 10) this.controlShown = false

        if(atom.config.get('linter-gams.Parse symbol values') && atom.workspace.getBottomDock().isVisible() && !this.running) {
          this.updateConsole(symbol)
        }
      }
    },

    updateConsole(symbol) {
      this.consolePanel.clear()
      this.consolePanel.stickTop()
      if (global.gamsUpdating && global.gamsUpdating.a) {
        this.consolePanel.log('Values are being updated...')
      } else if (!symbol.data) {
        this.consolePanel.log(`No data available for ${symbol.name}. Check for compilation, program flow and execuction errors.`)
      } else {
        // create elements
        const container = document.createElement('div')
        const dropDown = document.createElement('select')
        let p

        dropDown.style = 'float: right;'
        dropDown.onchange = () => {
          this.selectedSolve = dropDown.value
          this.debouncedUpdateVue(this.clickedSym)
        }
        // check if data is available for this solve
        if (symbol.data[this.selectedSolve]) {
          p = document.createTextNode(symbol.data[this.selectedSolve].data)
        } else {
          p = document.createTextNode(`No data available for solve from line ${this.selectedSolve}`)
        }

        // fill drop down menu
        global.gamsSolves.forEach((solve, index) => {
          const option = document.createElement('option')
          option.value = index
          if (option.value === this.selectedSolve) {
            option.selected = 'selected'
          }
          option.innerHTML = `${index + 1}. solve statement, model ${solve.model}`
          dropDown.appendChild(option)
        })

        // append elements to container
        container.appendChild(dropDown)
        container.appendChild(p)

        // append to console
        this.consolePanel.log(container)
      }
    },

    destroy() {
      if (this.cursorListener) {
        this.cursorListener.dispose()
      }
      if (this.fileWatchers) {
        this.fileWatchers.forEach(watcher => {
          watcher.dispose()
        })
      }
    }
  },
  template: htmlString
})
