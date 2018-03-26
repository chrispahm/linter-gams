'use babel'

import Vue from 'vue'
import $ from 'jquery'
import fs from 'fs'
import path from 'path'
import _ from 'lodash'
import utils from './util.js'

function addAssign(object) {
	if (typeof object.assign != 'function') {
		// Must be writable: true, enumerable: false, configurable: true
		object.defineProperty(object, 'assign', {
			value: function assign(target, varArgs) { // .length of function is 2
				'use strict'
				if (target == null) { // TypeError if undefined or null
					throw new TypeError('Cannot convert undefined or null to object')
				}

				var to = object(target)

				for (var index = 1; index < arguments.length; index++) {
					var nextSource = arguments[index]

					if (nextSource != null) { // Skip over if undefined or null
						for (var nextKey in nextSource) {
							// Avoid bugs when hasOwnProperty is shadowed
							if (object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
								to[nextKey] = nextSource[nextKey]
							}
						}
					}
				}
				return to
			},
			writable: true,
			configurable: true
		})
	}
}


export default class StructureView {

	constructor() {
		if (!global.gamsView) global.gamsView = {}

		const htmlString = fs.readFileSync(path.join(__dirname, '..', 'templates', 'gams-view.html'), {
			encoding: 'utf-8'
		})
		this.element = $(htmlString).get(0)
		this.viewType = 'structureView'
		global.gamsView = new Vue({
			el: this.element,
			data: {
				name: null,
				description: null,
				domain: null,
				declared: null,
				defined: null,
				assigned: null,
				implAsn: null,
				ref: null,
				control: null,
				cursorListener: null,
				noTagHint: null,
				lastFile: null,
				viewShow: false,
				projectDir: '',
				tags: null,
				viewLoading: false
			}
		})
		this.vm = global.gamsView
	}


	initialize() {
		this.vm.viewLoading = true
		this.listenOnCursorPositionChange()
	}

	listenOnCursorPositionChange() {
		const self = this,
			activeEditor = atom.workspace.getActiveTextEditor()
		if (activeEditor) {
			this.vm.cursorListener = activeEditor.onDidChangeCursorPosition(e => {
				utils.getSymbolAtCursor(activeEditor, wordAtCursor => {
					const symbol = _.find(this.vm.tags, {'name': wordAtCursor})
					if(symbol) {
						console.log(symbol)
						this.vm.projectDir = atom.project.getPaths()[0]
						this.vm.name = symbol.name || null
						this.vm.description = symbol.description || null
						this.vm.domain = symbol.domain || null
						this.vm.declared = symbol.declared || null
						this.vm.defined = symbol.defined || null
						this.vm.assigned = symbol.assigned || null
						this.vm.implAsn = symbol['impl-asn'] || null
						this.vm.ref = symbol.ref || null
						this.vm.control = symbol.control || null
					}
				})
			})
		}
	}

	serialize() {}

	destroy() {
		this.element.remove()
		if (this.vm.cursorListener) {
			this.vm.cursorListener.dispose()
			this.vm.cursorListener = null
		}
		if (this.vm.textEditorListener) {
			this.vm.textEditorListener.dispose()
			this.vm.textEditorListener = null
		}
		_.forEach(this.vm.editorSaveListener, item => {
			item.dispose()
		})
		this.vm.editorSaveListener = {}
		// this.vm.$destroy();
	}

	getElement() {
		return this.element
	}

	getTitle() {
		return 'GAMS View'
	}
}
