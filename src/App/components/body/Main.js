import React, { Component } from 'react'
import VizDisplayContainer from './VizDisplay/VizDisplayContainer'
import SettingsContainer from './Settings/SettingsContainer'
import styled from 'styled-components'

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`

const VizFrame = styled.div`
  flex: 3 0 1px;
  background-color: #B5E2FA;
  padding: 3vh;
`

const SettingsFrame = styled.div`
  flex: 1 0 auto;
  flex-shrink: 0;
  background-color: #EFEFEF;
  padding: 3vh;
`

class Main extends Component {
  render() {
    return (
      <MainContainer>
        <VizFrame>
          <VizDisplayContainer />
        </VizFrame>
        <SettingsFrame>
          <SettingsContainer />
        </SettingsFrame>
      </MainContainer>
    )
  }
}

export default Main
