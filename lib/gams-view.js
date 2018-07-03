'use babel'

import { CompositeDisposable } from 'atom'
import Vue from 'vue'
import $ from 'jquery'
import fs from 'fs'
import path from 'path'
import { filter } from 'fuzzaldrin'
import SimpleUndo from'simple-undo'
import ListingParser from './lstParser.js'
import utils from './utils/util.js'

let cursorHistory = {}

let history = new SimpleUndo({
  maxLength: 10,
  provider: objectSerializer
})

function objectSerializer(done) {
  done(JSON.stringify(cursorHistory))
}

function objectUnserializer(serialized) {
  cursorHistory = JSON.parse(serialized)
}

export default class StructureView {

  constructor() {
    if (!global.gamsView) global.gamsView = {}

    const htmlString = fs.readFileSync(path.join(__dirname, '..', 'templates', 'gams-view.html'), {
      encoding: 'utf-8'
    })
    this.element = $(htmlString).get(0)
    this.viewType = 'structureView'
    this.vm = new Vue({
      el: this.element,
      data: {
        name: null,
        type: null,
        description: null,
        domain: null,
        declared: null,
        defined: null,
        assigned: null,
        assignedShown: false,
        implAsn: null,
        implAsnShown: false,
        ref: null,
        file: null,
        refShown: false,
        control: null,
        controlShown: false,
        cursorListener: null,
        noTagHint: null,
        lastFile: null,
        viewShow: false,
        run: false,
        locked: false,
        grammarScope: null,
        lstTree: null,
        lstTreeFile: {},
        viewLoading: false
      },

      methods: {
        moveCursor(dir) {
          if(dir === 'back') {
            history.undo(objectUnserializer)
          } else {
            history.redo(objectUnserializer)
          }
          // update cursor position and or vue symbol
          this.jumpToPosition(cursorHistory.position.file, cursorHistory.position.line + 1, cursorHistory.position.column + 1, true)
          this.updateVue(cursorHistory.name)
        },

        jumpToPosition(file,line,column, noSave) {
          // save current and new cursor position in history
          // and also current vue symbol
          if (!noSave) {
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
          atom.workspace.open(file).then(() => {
            return utils.moveToPosition([line - 1,column -1], beginningOfLine)
          })
        },

        toggleLock() {
          if (this.locked) {
            this.locked = false
            this.initialize()
          } else {
            this.locked = true
            this.destroy()
          }
        },

        jumpToggle(elem) {
          if (elem.entries) {
            // console.log(this.lstTree, elem)
            elem.open = !elem.open
          } else {
            this.jumpToPosition(elem.file, elem.line, elem.column)
          }
        },

        
        initialize() {
          this.cursorListener = new CompositeDisposable()

          this.cursorListener.add(atom.workspace.onDidChangeActiveTextEditor(editor => {
            if(editor) {
              this.grammarScope = editor.getGrammar().scopeName
              this.file = editor.getPath()

              // listing files
              if (this.grammarScope == 'source.gams-lst') this.parseListing(this.file)
            }
          }))

          this.cursorListener.add(atom.workspace.observeActiveTextEditor(editor => {
            if (!editor) return
            const editorSubscriptions = new CompositeDisposable()
            this.file = editor.getPath()
            this.grammarScope = editor.getGrammar().scopeName

            // listing files
            if (this.grammarScope == 'source.gams-lst') this.parseListing(this.file)

            this.cursorPosition = {
              file: editor.getPath(),
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
              if (!editor.getGrammar().scopeName === 'source.gams-lst') return
              this.parseListing(this.file, true)
            }))

            editorSubscriptions.add(editor.onDidDestroy(() => {
              if (editor.getGrammar().scopeName == 'source.gams-lst' && this.lstTreeFile[editor.getPath()]) this.lstTreeFile[editor.getPath()] = null
              editorSubscriptions.dispose()
              this.cursorListener.remove(editorSubscriptions)
            }))

            this.cursorListener.add(editorSubscriptions)
          }))

        },

        updateValues(activeEditor, clickedSym) {
          if (this.grammarScope == 'source.gams-lst') return
          else if (activeEditor) {
            utils.getSymbolAtCursor(activeEditor, this.updateVue)
          } else {
            // save state
            cursorHistory.position = this.cursorPosition
            cursorHistory.name = this.name
            history.save()
            cursorHistory.name = clickedSym
            history.save()

            this.updateVue(clickedSym)
          }
        },
        
        runModel() {
          if (atom.packages.loadedPackages['gams-helpers']) {
            atom.packages.loadedPackages['gams-helpers'].mainModule.run()
          }
        },

        parseListing(file, forceUpdate) {
          if (!this.lstTree || !this.lstTreeFile[file] || forceUpdate) {
            ListingParser(file, (ast) => {
              this.lstTreeFile[file] = ast
              this.lstTree = JSON.parse(JSON.stringify(ast))
            })
          } else {
            this.lstTree = this.lstTreeFile[file]
          }
        },

        updateLst() {
          const symFound = document.getElementById('lstSearch').getModel().getText()
          if (this.lstTree) {
            this.lstTree = JSON.parse(JSON.stringify(this.lstTreeFile[this.file]))
            if (symFound === '') return
            // first remove elements that do not have any child entries
            this.lstTree = this.lstTree.filter(entry => entry.entries && entry.entries.length > 0)
            // fuzzy find search pattern
            this.lstTree = this.lstTree.map(entry => {
              entry.entries = filter(entry.entries, symFound, {
                key: 'name'
              })
              if (entry.entries.length < 20) {
                entry.open = true
              }
              return entry
            })
            // remove empty containers so only matches are shown
            this.lstTree = this.lstTree.filter(entry => entry.entries.length > 0)
          }
        },

        updateVue(symFound) {

          if(!symFound) {
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
            this.implAsn = symbol['impl-asn'] || null
            this.ref = symbol.ref || null
            this.control = symbol.control || null
          }
        },

        destroy() {
          if (this.cursorListener) {
            this.cursorListener.dispose()
          }
        }
      }
    })
  }




  serialize() {}


  getElement() {
    return this.element
  }

  getTitle() {
    return 'GAMS View'
  }
}
