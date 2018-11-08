export default class Simulation {

  constructor(emitter, eventName) {
    this.emitter = emitter
    this.eventName = eventName
    this.observeEvents.bind(this)
  }

  // This method checks if there are a few observations made.
  observeEvents() {
    this.emitter.emit(this.eventName)
    setTimeout(() => {
      this.observeEvents()
    }, 1000)
  }
}
