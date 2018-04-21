'use babel'

import { CompositeDisposable } from 'atom'
import Vue from 'vue'
import $ from 'jquery'
import fs from 'fs'
import path from 'path'
import _ from 'lodash'
import ListingParser from './lstParser.js'
import utils from './util.js'


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
				refShown: false,
				control: null,
				controlShown: false,
				cursorListener: [],
				noTagHint: null,
				lastFile: null,
				viewShow: false,
				run: false,
				locked: false,
				grammarScope: null,
				lstTree: null,
				viewLoading: false
			},
			methods: {
				jumpToPosition(file,line,column) {
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
						this[elem.type] = !this[elem.type]
					} else {
						this.jumpToPosition(elem.file, elem.line, elem.column)
					}
				},
				moveCursor(e, dir) {
					if(dir === 'back') {
						atom.commands.dispatch(e, 'cursor-history:prev')
					} else {
						atom.commands.dispatch(e, 'cursor-history:next')
					}
				},
				initialize() {
					this.cursorListener = new CompositeDisposable()

					this.cursorListener.add(atom.workspace.onDidChangeActiveTextEditor(editor => {
						this.grammarScope = editor.getCursorScope().scopes[0]
						if (this.grammarScope == 'source.gams-lst' && !this.lstTree) this.parseListing(editor.getPath())
					}))

					this.cursorListener.add(atom.workspace.observeTextEditors(editor => {
						const editorSubscriptions = new CompositeDisposable()
						this.grammarScope = atom.workspace.getActivePane().activeItem.getCursorScope().scopes[0]
						if (this.grammarScope == 'source.gams-lst' && !this.lstTree) this.parseListing(editor.getPath())
						this.updateValues(editor)

						editorSubscriptions.add(editor.onDidChangeCursorPosition(() => {
							this.updateValues(editor)
						}))

						editorSubscriptions.add(editor.onDidDestroy(() => {
							if (editor.getRootScopeDescriptor().scopes[0] == 'source.gams-lst') this.lstTree = null
							editorSubscriptions.dispose()
							this.cursorListener.remove(editorSubscriptions)
						}))

						this.cursorListener.add(editorSubscriptions)
					}))
				},

				updateValues(activeEditor, clickedSym) {
					if (activeEditor) {
						utils.getSymbolAtCursor(activeEditor, this.updateVue)
					} else {
						this.updateVue(clickedSym)
					}
				},
				parseListing(file) {
					ListingParser(file, (ast) => {
						this.lstTree = ast
						console.log(this.lstTree)
					})
				},
				updateVue(symFound) {
					const symbol = _.find(global.gamsView, {'nameLo': symFound.toLowerCase()})
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
				searchItem() {
					let input = document.getElementById('gamsViewSearch')
					return this.updateVue(input.getModel().getText())
				},
				destroy() {
					this.cursorListener.dispose()
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
