import React from 'react'

import FormControls from '../FormControls'
import Button from '../../Button'

/** Align - ('right', 'left', 'center', 'ends', 'spaced') */
export default function FormControlsAlign() {
  return (
    <div>
      <div className="docs-ex-title">Right</div>
      <FormControls>
        <Button danger small>No</Button>
        <Button primary small>Yes</Button>
      </FormControls>

      <div className="docs-ex-title">Left</div>
      <FormControls align="left">
        <Button danger small>No</Button>
        <Button primary small>Yes</Button>
      </FormControls>

      <div className="docs-ex-title">Center</div>
      <FormControls align="center">
        <Button danger small>No</Button>
        <Button primary small>Yes</Button>
      </FormControls>

      <div className="docs-ex-title">Ends</div>
      <FormControls align="ends">
        <Button danger small>No</Button>
        <Button primary small>Yes</Button>
      </FormControls>

      <div className="docs-ex-title">Spaced</div>
      <FormControls align="spaced">
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
        <Button>E</Button>
        <Button>F</Button>
        <Button>G</Button>
      </FormControls>
    </div>
  )
}
