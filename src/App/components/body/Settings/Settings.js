import React, { Component } from 'react'
import {EventEmitter} from 'fbemitter'
import styled from 'styled-components'
import FileUpload from './Widgets/FileUpload'
import WidgetContainer from 'App/components/vizWidgets/WidgetContainer'

const SettingsContainer = styled.div`
  height: 100%
  width: 100%
  background-color: #dedede
`


class Settings extends Component {
  render() {
    return (
      <SettingsContainer>
        <FileUpload />
        <WidgetContainer />
      </SettingsContainer>
    )
  }
}

export default Settings
