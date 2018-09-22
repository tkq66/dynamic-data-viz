import React, { Component } from 'react'
import styled from 'styled-components'
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
      <WidgetContainer />
      </SettingsContainer>
    )
  }
}

export default Settings
