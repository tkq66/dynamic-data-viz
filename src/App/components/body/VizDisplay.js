import React, { Component } from 'react';
import styled from 'styled-components';

const VizDisplayContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: red;
`

class VizDisplay extends Component {
  render() {
    return (
      <VizDisplayContainer>
      </VizDisplayContainer>
    )
  }
}

export default VizDisplay
