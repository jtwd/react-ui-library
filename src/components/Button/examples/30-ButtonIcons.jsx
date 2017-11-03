import React from 'react'

import Button from '../Button'

/** Icons */
export default function ButtonIconText () {
  return (
    <div>
      <div>
        <Button icon='close' uiSize='small'>Small button</Button>
        <Button icon='lock' uiStyle='primary'>Default button</Button>
        <Button icon='menu' uiStyle='secondary' uiSize='large'>Large button</Button>
      </div>
      <div>
        <Button icon='close' uiSize='small' />
        <Button icon='lock' uiSize='primary' />
        <Button icon='menu' uiSize='large' uiStyle='secondary' />
      </div>
    </div>
  )
}
