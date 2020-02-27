'use babel'

export default {
  search(string, data) {
    const searchPattern = new RegExp(string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
    const highlighted = data.split(searchPattern)
      
    return {
      text: highlighted.reduce((acc, val, i) => {
        if (i < highlighted.length -1) {
          return acc += val + `<span id="gams-panel-${i}" class="gamsSearchHighlight">${string}</span>`
        } else {
          return acc += val
        }
      }, ''),
      occurances: highlighted.length - 1
    }
  },
  highlight(id) {
    const element = document.getElementById(id)
    if (!element) return
    // remove active class of previous element
    const prevElem = document.querySelectorAll('.gamsSearchActive')
    if (prevElem.length) prevElem[0].classList.remove('gamsSearchActive')
    // add active class
    element.classList.add('gamsSearchActive')
    // scroll into view
    const topPos = element.offsetTop
    document.querySelector('#atom-console > div').scrollTop = topPos - 70
  }
}