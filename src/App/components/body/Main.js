import React, { Component } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`

const VizContainer = styled.div`
  flex: 3 1 auto;
  background-color: #B5E2FA;
  padding: 3vh;
`

const SettingsContainer = styled.div`
  flex: 1 1 auto;
  background-color: #EFEFEF;
  padding: 3vh;
`

class Main extends Component {
  render() {
    return (
      <MainContainer>
        <VizContainer>
        </VizContainer>
        <SettingsContainer>
        </SettingsContainer>
      </MainContainer>
    )
  }
}

export default Main
