import React, {Component} from 'react'
import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from 'App/store/mappers'
import {mainIXModeRef} from 'App/reducers/visSettings'
import SelectMode from './Prototype/SelectMode'

class SelectModeMain extends Component {
  selectMode(e) {
    this.props.action.setModeMain(e.target.value)
  }

  render() {
    return (<SelectMode title="Main Interaction Mode"
                    currentMode={this.props.state.mainIXMode.value}
                    onModeChange={this.selectMode.bind(this)}
                    modeReference={mainIXModeRef}/>)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectModeMain)
