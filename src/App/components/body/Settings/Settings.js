import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'App/store/mappers'
import styled from 'styled-components'
import WidgetParent from './Widgets/Parent/WidgetParent'
import FileUpload from './Widgets/FileUpload'
import SelectReferenceField from './Widgets/SelectReferenceField'
import SelectActiveFields from './Widgets/SelectActiveFields'
import SelectMainMode from './Widgets/SelectMainMode'
// import EmotionDetector from '../../facial_features/emotionsDetector'

const SettingsContainer = styled.div`
  height: 100%
  width: 100%
  background-color: #dedede
`

class Settings extends Component {

  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  };

  render() {
    return (
      <SettingsContainer>
        <WidgetParent>
          <FileUpload />
          <SelectReferenceField />
          <SelectActiveFields />
          <SelectMainMode />
          {/* <EmotionDetector /> */}
        </WidgetParent>
      </SettingsContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
