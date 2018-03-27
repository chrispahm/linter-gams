'use babel'
const readline = require('readline')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')

export default function createTags(refFile) {
	// const rootDir = __dirname
	const rl = readline.createInterface({
		input: fs.createReadStream(refFile),
		crlfDelay: Infinity
	})

	let json = {}
	rl.on('line', (line) => {
		const segments = line.split(' ')

		if (!isNaN(segments[1])) {
			if (segments[4] === 'declared' || segments[4] === 'defined') {
				let symbol = json[Number(segments[1])] = json[Number(segments[1])] || {}

				let base
				if (typeof segments[10] === 'string') {
					base = path.parse(segments[10]).name
				}

				Object.assign(symbol, {
					'name': segments[2],
					[segments[4]]: {
						'line': Number(segments[6]),
						'column': Number(segments[7]),
						'file': segments[10],
						'base': base
					}
				})
			} else {
				json[segments[1]] = json[segments[1]] || {}
				let action = json[segments[1]][segments[4]] = json[segments[1]][segments[4]] || []

				let base
				if (typeof segments[10] === 'string') {
					base = path.parse(segments[10]).name
				}

				action.push({
					'line': Number(segments[6]),
					'column': Number(segments[7]),
					'file': segments[10],
					'base': base
				})
			}
		} else if (segments[0] === '0') {
			return
		} else {
			let symbol = json[segments[0]] = json[segments[0]] || {}

			Object.assign(symbol, {
				'symId': segments[2],
				'type': segments[3],
				get domain() {
					const domainCount = Number(segments[4])
					if (domainCount === 0) return
					const range = segments.slice(6,6 + domainCount)
					if (range[0] === '0') return
					return range.map((entry) => {
						return json[entry]
					})
				},
				get description() {
					const domainCount = Number(segments[4])
					if (domainCount === 0) return
					return segments.slice(6 + domainCount).join(' ')
				}
			})

			if (Number(segments[2]) === 2 && symbol.domain && symbol.domain.length === 1) {
				Object.assign(symbol, {
					'subset': true,
					'superset': symbol.domain[0]
				})
			}
		}
	})

	rl.on('close', () => {
		global.gamsView = _.values(json)
		fs.unlink(refFile, (err) => {
			// do nothing if (err) 
		})
	})
}
