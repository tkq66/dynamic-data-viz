import React, { Component } from 'react'
import styled from 'styled-components'
import TopNav from './components/nav/TopNav'
import Main from './components/body/Main'

const AppContainer = styled.div`
  height: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
`

class App extends Component {
  render() {
    return (
      <AppContainer className="App">
        <TopNav />
        <Main />
      </AppContainer>
    )
  }
}

export default App
