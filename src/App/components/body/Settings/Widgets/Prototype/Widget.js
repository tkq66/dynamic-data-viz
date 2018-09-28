import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'


const Widget = props => (
  <Card>
    <CardContent>
      <Typography variant="headline">{props.title}</Typography>
      {props.body}
    </CardContent>
  </Card>
)

export default Widget
