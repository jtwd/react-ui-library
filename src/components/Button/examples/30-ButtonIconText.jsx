import React from 'react'
import Button from '../Button'

/** Icons */
export default function ButtonIconText() {
  return (
    <div>
      <div>
        <Button icon="close" small>Small icon</Button>
        <Button icon="lock" primary>Large icon</Button>
        <Button icon="menu" secondary large>Large button</Button>
      </div>
      <div>
        <Button icon="close" small />
        <Button icon="lock" primary />
        <Button icon="menu" large secondary />
      </div>
    </div>
  )
}
