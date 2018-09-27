import MouseTracker from "./mouseTracker";
import React, { Component } from 'react'


export default class EventParent extends Component {

  componentDidMount () {
    // Detects clicks everywhere on the screen
    window.addEventListener('click', this.resetDropdown)
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.resetDropdown)
  }

  render () {
    return (
      <MouseTracker />
    )
  }
}