import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'

const CardList = styled(Card)`
  margin-top: 2vh
  margin-left: 2vh
  margin-right: 2vh
  margin-bottom: ${props => props.last ? "2vh" : "0vh"}
`

const Widget = props => (
  <CardList first={props.last ? 1 : 0}>
    <CardContent>
      <Typography variant="h5">{props.title}</Typography>
      {props.body}
    </CardContent>
  </CardList>
)

export default Widget
