import React, { Component } from 'react'
import styled from 'styled-components'
import WidgetContainer from './Widgets/Container/Container'
import FileUpload from './Widgets/FileUpload'
import Zoom from './Widgets/Zoom'
import Filter from './Widgets/Filter'
import Compare from './Widgets/Compare'

const SettingsContainer = styled.div`
  height: 100%
  width: 100%
  background-color: #dedede
`


class Settings extends Component {
  render() {
    return (
      <SettingsContainer>
        <WidgetContainer>
          <FileUpload />
          <Zoom />
          <Filter />
          <Compare />
        </WidgetContainer>
      </SettingsContainer>
    )
  }
}

export default Settings
