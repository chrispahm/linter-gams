'use babel'

import Vue from 'vue'
import $ from 'jquery'
import fs from 'fs'
import path from 'path'
import _ from 'lodash'
import Util from './util'

export default class StructureView {

	constructor() {
		// TODO: remove jQuery dependency
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
				assigned: true,
				implAsn: null,
				ref: null,
				control: false,
				updateSym: true,
				tags: null,
				noTagHint: null,
				noSelectionHint: null
			}
		})
	}

	initialize() {
		global.gamsView.viewLoading = true
		this.render()
		if (global.gamsView.updateSym) {
			this.listenOnCursorPositionChange()
		}
	}

	renderTree(nodes) {
		let html = this.treeGenerator(nodes)
		$('div.structure-view>div>ol').html(html)
	}

	listenOnCursorPositionChange() {
		const self = this,
			activeEditor = atom.workspace.getActiveTextEditor()
		if (activeEditor) {
			global.gamsView.cursorListener = activeEditor.onDidChangeCursorPosition(e => {
				let nRow = e.newScreenPosition.row
				if (nRow !== e.oldScreenPosition.row) {
					let tag = _.find(global.gamsView.tags, item => {
						// search for tag in global tag object
					})
					// Same node would not change view
					if (tag && tag.id !== self.treeNodeId) {
						// replace data values of Vue instance with selected Tag values
					}
				}
			})
		}
	}

	serialize() {}

	destroy() {
		this.element.remove()
		if (global.gamsView.cursorListener) {
			global.gamsView.cursorListener.dispose()
			global.gamsView.cursorListener = null
		}
		if (global.gamsView.textEditorListener) {
			global.gamsView.textEditorListener.dispose()
			global.gamsView.textEditorListener = null
		}
		_.forEach(global.gamsView.editorSaveListener, item => {
			item.dispose()
		})
		global.gamsView.editorSaveListener = {}
		// global.gamsView.$destroy();
	}

	getElement() {
		return this.element
	}

	getTitle() {
		return 'GAMS View'
	}
}
