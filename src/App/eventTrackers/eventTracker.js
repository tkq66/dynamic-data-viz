import handlers from './handlers.js'

export default class EventTracker {
  constructor(element) {
    this.element = element
    if (element === null) {
      console.log("Cannot find element to track events.")
      return
    }
    for (let eventName in handlers) {
      element.addEventListener(eventName, handlers[eventName])
    }
  }
}
