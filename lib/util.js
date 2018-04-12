'use babel'

const os = require('os')
const glob = require('glob')
const shell = require('shelljs')
import _ from 'lodash'

export default {
  wordAtCursor(text, cursorIndex, wordSeparator, noStripBefore) {
    const beforeCursor = text.slice(0, cursorIndex)
    const afterCursor = text.slice(cursorIndex)
    const beforeCursorWordBegins = noStripBefore ? 0 : beforeCursor.lastIndexOf(wordSeparator) + 1
    let afterCursorWordEnds = afterCursor.indexOf(wordSeparator)
    if (afterCursorWordEnds === -1) {
      afterCursorWordEnds = afterCursor.length
    }
    return beforeCursor.slice(beforeCursorWordBegins) + afterCursor.slice(0, afterCursorWordEnds)
  },

  getSymbolAtCursor(editor, callback) {
    let nonWordCharacters
    const cursor = editor.getLastCursor()
    const cursorPosition = cursor.getBufferPosition()
    const scope = cursor.getScopeDescriptor()
    const rubyScopes = scope.getScopesArray().filter(s => /^source\.ruby($|\.)/.test(s))

    const wordRegExp = rubyScopes.length ?
      (nonWordCharacters = atom.config.get('editor.nonWordCharacters', {scope}),
      // Allow special handling for fully-qualified ruby constants
        nonWordCharacters = nonWordCharacters.replace(/:/g, ''),
        new RegExp(`[^\\s${_.escapeRegExp(nonWordCharacters)}]+([!?]|\\s*=>?)?|[<=>]+`, 'g'))
      :
      cursor.wordRegExp()

    editor.scanInBufferRange(wordRegExp, cursor.getCurrentLineBufferRange(), ({range, match}) => {
      if (range.containsPoint(cursorPosition)) {
        let symbol = match[0]
        if (rubyScopes.length && symbol.indexOf(':') > -1) {
          const cursorWithinSymbol = cursorPosition.column - range.start.column
          // Add fully-qualified ruby constant up until the cursor position
          return callback(this.wordAtCursor(symbol, cursorWithinSymbol, ':', true))
          // Additionally, also look up the bare word under cursor
          //					addSymbol(wordAtCursor(symbol, cursorWithinSymbol, ':'))
        } else {
          return callback(symbol)
        }
      }
    })
  },

  moveToPosition(position, beginningOfLine) {
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      editor.setCursorBufferPosition(position, {autoscroll: false})
      if (beginningOfLine) {
        editor.moveToFirstCharacterOfLine()
      }
      editor.scrollToCursorPosition({center: true})
    }
  },

  noGamsInst() {
    atom.confirm({
      message: 'No GAMS installation found.',
      detail: 'Linter-GAMS needs a working GAMS installation to function. Please specify the instllation path in the settings',
      buttons: ['Open settings', 'Close']
    }, response => {
      if (response === 0) {
        return atom.workspace.open('atom://config/packages/linter-gams')
      } else {
        return
      }
    })
  },

  getGamsPath() {
    let gamsExec = shell.which('gams')
    // if not found, check in standard directories
    if(!gamsExec) {
      // in case of windows
      if (os.platform() === 'win32') {
        if (glob.sync('C:\\GAMS\\*\\*\\').length > 0) {
          gamsExec = glob.sync('C:/GAMS/*/*/')[glob.sync('C:/GAMS/*/*/').length - 1] + 'gams.exe'
          return gamsExec
        } else if (glob.sync('N:\\soft\\GAMS*\\').length > 0) {
          gamsExec = glob.sync('N:\\soft\\GAMS*\\')[glob.sync('N:\\soft\\GAMS*\\').length - 1] + 'gams.exe'
          return gamsExec
        } else {
          this.noGamsInst()
        }
      }
      // and mac
      else if (os.platform() === 'darwin') {
        if (glob.sync('/Applications/GAMS*/sysdir/').length > 0) {
          gamsExec = glob.sync('/Applications/GAMS*/sysdir/')[glob.sync('/Applications/GAMS*/sysdir/').length - 1] + 'gams'
          return gamsExec
        } else {
          this.noGamsInst()
        }
      } else {
        this.noGamsInst()
      }
    }
  }
}
