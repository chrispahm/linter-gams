'use babel'

import main from '../templates/main-component'

export default class GamsView {

  constructor() {
    if (!global.gamsView) global.gamsView = {}
    
    this.element = document.createElement('div')
    this.element.id = 'linter-gams'
    this.vm = main
    // debounce updating of Vue symbol if triggered by cursor click in editor
    this.vm.$watch('clickedSym', () => {
      this.vm.debouncedUpdateVue(this.vm.clickedSym)
    })

    // check if GAMS is currently updating and change the value in the console accordingly
    const that = this
    const handleConsole = {
      set(target, key, value) {
        target[key] = value
        that.vm.debouncedUpdateVue(that.vm.clickedSym)
      },
    }
    const handleRunning = {
      set(target, key, value) {
        target[key] = value
        that.vm.running = value
      },
    }

    global.gamsUpdating = new Proxy({}, handleConsole)
    global.gamsRunning = new Proxy({}, handleRunning)
  }


  getElement() {
    return this.element
  }

  getTitle() {
    return 'GAMS View'
  }
}
