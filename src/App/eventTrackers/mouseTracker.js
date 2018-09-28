import React, { Component } from 'react'

export default class MouseTracker extends Component {

  _handleClick (e) {
    // This doesn't stop the click event in the parent firing like I
    // thought it would
    e.stopPropagation()
    // Do something
    console.log("CAPTURED")
  }

  render () {
    return (
      <div onClick={this._handleClick}></div>
    )
  }
}
