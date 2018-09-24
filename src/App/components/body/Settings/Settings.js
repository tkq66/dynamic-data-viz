import React, { Component } from 'react'
import {EventEmitter} from 'fbemitter'
import styled from 'styled-components'
import FileUpload from './Widgets/FileUpload'

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
      </SettingsContainer>
    )
  }
}

export default Settings
