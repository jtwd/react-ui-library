import React from 'react'

import Button from '../Button'

/** Sizes */
export default function ButtonSizes() {
  return (
    <div>
      <div>
        <Button primary small>Small button</Button>
        <Button primary small icon="lock" />
        <Button primary small icon="lock">Small button</Button>
      </div>
      <div>
        <Button secondary>Default button</Button>
        <Button secondary icon="close" />
        <Button secondary icon="close">Default button</Button>
      </div>
      <div>
        <Button large>Large button</Button>
        <Button large icon="eye" />
        <Button large icon="eye">Large button</Button>
      </div>
    </div>
  )
}
