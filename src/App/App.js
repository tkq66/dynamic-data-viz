import React, { Component } from 'react';
import TopNav from './components/nav/TopNav'
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100%;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <AppContainer className="App">
        <TopNav />
        <p>fdsafsd</p>
      </AppContainer>
    );
  }
}

export default App;
