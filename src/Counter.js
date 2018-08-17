import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button'
import { compose, withState, withHandlers, setDisplayName } from 'recompose'

const withCounter = compose(
  withState('value', 'setValue', 0),
  withHandlers({
    inc: ({setValue}) => e => setValue(n => n + 1),
    dec: ({setValue}) => e => setValue(n => n - 1)
  })
)

const ClickCounter = withCounter(({value, inc, dec}) => 
  <Fragment>
    <p>{value}</p>
    <Button color='primary' onClick={dec}>Dec</Button>
    <Button color='primary' onClick={inc}>Inc</Button>
  </Fragment>
)

export default setDisplayName('ClickCounter')(ClickCounter)