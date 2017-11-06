import React from 'react'

import Button from '../Button'

/** Sizes */
export default function ButtonSizes () {
  return (
    <div>
      <div>
        <Button uiStyle='primary' uiSize='small'>Small button</Button>
        <Button uiStyle='primary' uiSize='small' icon='lock' />
        <Button uiStyle='primary' uiSize='small' icon='lock'>Small button</Button>
      </div>
      <div>
        <Button uiStyle='secondary'>Default button</Button>
        <Button uiStyle='secondary' icon='close' />
        <Button uiStyle='secondary' icon='close'>Default button</Button>
      </div>
      <div>
        <Button uiSize='large'>Large button</Button>
        <Button uiSize='large' icon='eye' />
        <Button uiSize='large' icon='eye'>Large button</Button>
      </div>
      <div>
        <Button uiStyle='link' uiSize='small'>Small link button</Button><br />
        <Button uiStyle='link' icon='caretRight'>Icon link button</Button><br />
        <Button uiStyle='link' uiSize='large' icon='menu' title='Large icon link button' />
      </div>
    </div>
  )
}
