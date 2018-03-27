'use babel'

let wordAtCursor = (text, cursorIndex, wordSeparator, noStripBefore) => {
	const beforeCursor = text.slice(0, cursorIndex)
	const afterCursor = text.slice(cursorIndex)
	const beforeCursorWordBegins = noStripBefore ? 0 : beforeCursor.lastIndexOf(wordSeparator) + 1
	let afterCursorWordEnds = afterCursor.indexOf(wordSeparator)
	if (afterCursorWordEnds === -1) {
		afterCursorWordEnds = afterCursor.length
	}
	return beforeCursor.slice(beforeCursorWordBegins) + afterCursor.slice(0, afterCursorWordEnds)
}

export default {
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
					return callback(wordAtCursor(symbol, cursorWithinSymbol, ':', true))
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
	}
}
