import React, {Component} from 'react'
import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from 'App/store/mappers'
import {overviewIXModeRef} from 'App/reducers/visSettings'
import SelectMode from './Prototype/SelectMode'

class SelectModeOverview extends Component {
  selectMode(e) {
    this.props.action.setModeOverview(e.target.value)
  }

  render() {
    return (<SelectMode title="Overview Interaction Mode"
                    currentMode={this.props.state.overviewIXMode.value}
                    onModeChange={this.selectMode.bind(this)}
                    modeReference={overviewIXModeRef}/>)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectModeOverview)
