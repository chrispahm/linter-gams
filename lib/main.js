'use babel'
import * as gams from './linter.js'
import * as fs from 'fs'

function getConfig (directory, gamsFile) {
	if (fs.existsSync(`${directory}/linter-gams.config.js`)) {
		const config = require (`${directory}/linter-gams.config.js`)
		config.directory = directory
		if (config.ggig) return parseGGIGparams(config)
		return config
	}
	else if (fs.existsSync(`${directory}/../linter-gams.config.js`)) {
		directory = directory.substring(0, directory.lastIndexOf('/'))
		const config = require (`${directory}/linter-gams.config.js`)
		config.directory = directory
		if (config.ggig) return parseGGIGparams(config)
		return config
	}
	else {
		return {'entry': gamsFile, 'directory': directory}
	}
}

function parseGGIGparams (config) {
	const ini = fs.readFileSync(`${config.directory}/../gui/${config.ini}`).toString('utf8')
	const curtask = ini.match(/(?:curtask=)(.*?)(?:\n)/)[1]
	const scratchdir = ini.match(/(?:scratchdir=)(.*?)(?:\n)/)[1]
	const workdir = config.directory
	const curDir = config.directory
	const ef = curtask + '.exp'
	const rf = curtask + '.ref'
	config.gamsPath = ini.match(/(?:gamsdir=)(.*?)(?:\n)/)[1]
	config.ggigParams = `--task=\\"${curtask}\\" -scrdir="${scratchdir}" -workdir="${workdir}" -curDir="${curDir}" -ef=\\"${ef}\\" -rf=\\"${rf}\\" --scen=incgen\\\\runInc --ggig=on`
	return config
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

			return new Promise(function(resolve) {
				gams.lint(getConfig(directory, editorPath))
					.then(() => {resolve([])})
					.catch((error) => {
						resolve(error)
					})
			})
		}
	}
}
