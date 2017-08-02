import React from 'react'

import FormControls from '../FormControls'
import Button from '../../Button'

/** Simple form control (no props) */
export default function FormControlsSimple() {
  return (
    <FormControls>
      <Button primary small>Submit</Button>
    </FormControls>
  )
}
