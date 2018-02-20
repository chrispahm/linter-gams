'use babel'
import * as readline from 'readline'
import * as fs from 'fs'
import * as path from 'path'


export default function createTags(refFile, rootDir) {
	const rl = readline.createInterface({
		input: fs.createReadStream(refFile),
		crlfDelay: Infinity
	})

	const tagsFile = fs.openSync(`${rootDir}${path.sep}.tags`, 'w')
	rl.on('line', (line) => {
		const segments = line.split(' ')
		if (segments[4] !== 'declared') return
		let filePath = segments[10].substr(rootDir.length)
		const symbol = `${segments[2]}\t${filePath}\t${segments[6]}\n`
		fs.write(tagsFile, symbol, (err) => {
			if (err) throw err
		})
	})

	rl.on('close', () => {
		fs.unlink(refFile, (err) => {
			if (err) throw err
		})
	})
}
