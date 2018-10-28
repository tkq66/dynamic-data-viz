import React, { Component } from 'react'
import styled from 'styled-components'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TopNav from './components/nav/TopNav'
import Main from './components/body/Main'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  }
})

const AppContainer = styled.div`
  height: 100%
  text-align: center

  display: flex
  flex-direction: column
`

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppContainer className="App" >
          <TopNav />
          <Main />
          {/* </EventsParent> */}
        </AppContainer>
      </MuiThemeProvider>
    )
  }
}

export default App
