'use babel'

const os = require('os')
const glob = require('glob')
const path = require('path')
const findUp = require('find-up')
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

  getGamsPath() {
    let gamsExec = shell.which('gams')
    if(gamsExec) {
      if (os.platform() === 'win32') {
        gamsExec = gamsExec.replace(/\\/g, '/')
      }
      return gamsExec
    }
    // if not found, check in standard directories
    else {
      // in case of windows
      if (os.platform() === 'win32') {
        if (glob.sync('C:/GAMS/*/*/').length > 0) {
          gamsExec = glob.sync('C:/GAMS/*/*/')[glob.sync('C:/GAMS/*/*/').length - 1] + 'gams.exe'
          return gamsExec
        }
        else if (glob.sync('N:/soft/GAMS*/').length > 0) {
          gamsExec = glob.sync('N:/soft/GAMS*/')[glob.sync('N:/soft/GAMS*/').length - 1] + 'gams.exe'
          return gamsExec
        } else {
          this.alert('noGAMS')
          return ''
        }
      }
      // and mac
      else if (os.platform() === 'darwin') {
        if (glob.sync('/Applications/GAMS*/sysdir/').length > 0) {
          gamsExec = glob.sync('/Applications/GAMS*/sysdir/')[glob.sync('/Applications/GAMS*/sysdir/').length - 1] + 'gams'
          return gamsExec
        } else {
          this.alert('noGAMS')
          return ''
        }
      } else {
        this.alert('noGAMS')
        return ''
      }
    }
  },

  notify(title, msg) {
    atom.notifications.addInfo(title, { detail: msg, dismissable: true })
  },

  alert(message) {
    let details
    if (message === 'noGAMS') {
      details = {
        title: 'No GAMS installation found.',
        msg: 'Linter-GAMS needs a working GAMS installation to function. Please specify the installation path in the settings',
        buttons: [{
          text: 'Open settings',
          onDidClick() {
            return atom.workspace.open('atom://config/packages/linter-gams')
          }
        }, {
          text: 'Close',
          onDidClick() {
            return
          }
        }]
      }
    } else {
      return
    }

    atom.notifications.addError(details.title, {
      description: details.msg,
      buttons: details.buttons
    })
  },
  execLine(filePath,directory,extraParams) {
    return new Promise((resolve) => {
      let gamsExe = atom.config.get('linter-gams.Gams Executable')
      let scratchdir = atom.config.get('linter-gams.Scratch directory') + path.sep
      let ggigParams = ''

      if (!gamsExe || gamsExe === 'Undefined') return

      findUp(['exp_starter.gms', 'capmod.gms'], directory).then((expStarter) => {
        if (expStarter) {
          filePath = expStarter
          directory = path.dirname(expStarter) + path.sep
          const gamsFile = path.parse(expStarter).base

          if (gamsFile === 'exp_starter.gms') {
            ggigParams = `--scen=incgen${path.sep}runInc`
          } else if (gamsFile === 'capmod.gms') {
            ggigParams = '--scen=fortran'
          } else if (gamsFile === 'com_.gms') {
            ggigParams = '--scen=com_inc'
          }
        }

        let listingPath = path.parse(filePath)
        listingPath.ext = '.lst'
        listingPath.base = ''
        listingPath = path.format(listingPath)

        const gamsParams = gamsExe + ' "' + filePath + '" -scrdir="' + scratchdir + '" ' + ggigParams + extraParams
        resolve({
          gamsParams: gamsParams,
          listingPath: listingPath,
          directory: directory
        })
      })
    })
  }
}
