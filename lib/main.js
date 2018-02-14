'use babel'
import * as gams from './linter.js'
import * as fs from 'fs'

const path = require('path')
const os = require('os')

function getConfig (directory, gamsFile) {
	return new Promise((resolve) => {
		if (fs.existsSync(`${directory}/linter-gams.config.js`)) {
			const config = require (`${directory}/linter-gams.config.js`)
			config.directory = directory
			if (config.ggig) resolve(parseGGIGparams(config))
			return resolve(config)
		}
		else if (fs.existsSync(`${directory}/../linter-gams.config.js`)) {
			directory = path.normalize(directory + '/../')
			const config = require (`${directory}/linter-gams.config.js`)
			config.directory = directory
			if (config.ggig) resolve(parseGGIGparams(config))
			resolve(config)
		}
		else {
			resolve({'entry': gamsFile, 'directory': directory, 'scratchdir': __dirname})
		}
	})
}

function parseGGIGparams (config) {
	return new Promise ((resolve) => {
		fs.readFile(`${config.directory}/../gui/${config.ini}`, 'utf-8', (err, ini) => {
			const curtask = ini.match(/(?:curtask=)(.*?)(?:\r\n?|\n)/)[1]
			if (!config.scratchdir) {
				config.scratchdir = __dirname // config.directory
			}
			const workdir = config.directory
			const curDir = config.directory
			const ef = curtask + '.exp'
			const rf = curtask + '.ref'
			let escStart = '\\"'
			let escEnd = '\\"'
			if (os.platform() === 'win32') {
				escStart = '"'
				escEnd = '"'
			}
			if (!config.gamsPath) {
				config.gamsPath = ini.match(/(?:gamsdir=)(.*?)(?:\r\n?|\n)/)[1]
				if (os.platform() === 'win32') {
					// this is super hacky, got to come up with a better way
					config.gamsPath = path.join(config.gamsPath.replace('\\:', ':'), 'gams.exe')
				}
			}
			config.ggigParams = `--task=${escStart}${curtask}${escEnd} -scrdir="${config.scratchdir}" -workdir="${workdir}" -curDir="${curDir}" -ef=${escStart}${ef}${escEnd} -rf=${escStart}${rf}${escEnd} --scen=incgen\\\\runInc --ggig=on`
			resolve(config)
		})
	})
}

export function provideLinter() {
	return {
		name: 'linter-gams',
		scope: 'file',
		lintsOnChange: false,
		grammarScopes: ['source.gams', 'source.gms'],
		lint(textEditor) {
			const editorPath = textEditor.getPath()
			const directory = textEditor.getDirectoryPath()
			return getConfig(directory, editorPath).then(gams.lint)
		}
	}
}
