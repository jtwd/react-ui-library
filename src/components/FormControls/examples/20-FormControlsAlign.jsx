import React from 'react'

import FormControls from '../FormControls'
import Button from '../../Button'

/** Align - ('right', 'left', 'center', 'ends', 'spaced') */
export default function FormControlsAlign() {
  return (
    <div>
      <div className="docs-ex-title">Right</div>
      <FormControls>
        <Button danger>No</Button>
        <Button primary>Yes</Button>
      </FormControls>

      <div className="docs-ex-title">Left</div>
      <FormControls align="left">
        <Button danger>No</Button>
        <Button primary>Yes</Button>
      </FormControls>

      <div className="docs-ex-title">Center</div>
      <FormControls align="center">
        <Button danger>No</Button>
        <Button primary>Yes</Button>
      </FormControls>

      <div className="docs-ex-title">Ends</div>
      <FormControls align="ends">
        <Button danger>No</Button>
        <Button primary>Yes</Button>
      </FormControls>

      <div className="docs-ex-title">Spaced</div>
      <FormControls align="spaced">
        <Button small secondary>A</Button>
        <Button small secondary>B</Button>
        <Button small secondary>C</Button>
        <Button small secondary>D</Button>
        <Button small secondary>E</Button>
        <Button small secondary>F</Button>
        <Button small secondary>G</Button>
      </FormControls>
    </div>
  )
}
