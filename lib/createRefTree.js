'use babel'

const readline = require('readline')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')

export default function createTags(refFile, rootDir) {
  const rl = readline.createInterface({
    input: fs.createReadStream(refFile),
    crlfDelay: Infinity
  })

  // the ctags compatible .tags file
  // const tagsFile = fs.openSync(`${rootDir}${path.sep}.tags`, 'w')
  // the variable where we will store our reference tree
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
        // make case-insensitive comparison possible (as GAMS is case-insensitive)
        let nameLo
        if (typeof segments[2] === 'string') {
          nameLo = segments[2].toLowerCase()
        }

        Object.assign(symbol, {
          'name': segments[2],
          'nameLo': nameLo,
          [segments[4]]: {
            'line': Number(segments[6]),
            'column': Number(segments[7]),
            'file': segments[10],
            'base': base
          }
        })

        // save symbol to ctags file
        /*
        if (segments[4] === 'declared' && segments[10]) {
          const symbolLine = `${segments[2]}\t${segments[10].substr(rootDir.length)}\t${Number(segments[6])}\n`
          fs.write(tagsFile, symbolLine, (err) => {
            if (err) throw err
          })
        }
        */

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
    // store ref tree in global variable
    global.gamsView = _.values(json)
    fs.unlink(refFile, (err) => {
      if (err) throw err
    })
  })
}
