import React from 'react'
import Widget from './Prototype/Widget'
import StandardMenu from './Utils/StandardMenu'
import SimpleListMenu from './Utils/SimpleMenuList'
import Button from '@material-ui/core/Button'

const fromOptions = [
  "1 day",
  "2 day",
  "3 day"
]

const toOptions = [
  "2 day",
  "3 day",
  "4 day"
]

const Compare = () => (
  <Widget title="Compare" body={
    <div className='ripple'>
      <StandardMenu>
        <SimpleListMenu options={fromOptions} text="Start"/>
        <Button>And</Button>
        <SimpleListMenu options={toOptions} text="End"/>
      </StandardMenu>
    </div>
  } />
)

export default Compare
