import React, { Component } from 'react'
import styled from 'styled-components'
import VizDisplay from './VizDisplay/VizDisplay'
import Settings from './Settings/Settings'
import VisualisationPredictor from 'App/model/visualisationPredictor'


const MainContainer = styled.div`
  height: 100%
  display: flex
  flex-direction: row
`

const VizFrame = styled.div`
  flex: 3 0 1px
  background-color: #B5E2FA
  padding: 3vh
`

const SettingsFrame = styled.div`
  flex: 1 0 auto
  background-color: #EFEFEF
  padding: 3vh
`

class Main extends Component {
  render() {
    return (
        <MainContainer>
          <VisualisationPredictor />
          <VizFrame>
            <VizDisplay />
          </VizFrame>
          <SettingsFrame>
            <Settings />
          </SettingsFrame>
        </MainContainer>
    )
  }
}

export default Main
