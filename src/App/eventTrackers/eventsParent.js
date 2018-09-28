import MouseTracker from "./mouseTracker";
import React, { Component } from 'react'


export default class EventParent extends Component {

  componentDidMount () {
    // Detects clicks everywhere on the screen
    window.addEventListener('click', e => {
      console.log("hey")
    })
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
