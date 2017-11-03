import React from 'react'

import Button from '../Button'

/** Types */
export default function ButtonTypes () {
  return (
    <div>
      <Button>Default button</Button>
      <Button uiStyle='primary'>Primary button</Button>
      <Button uiStyle='secondary'>Secondary button</Button>
      <Button uiStyle='danger'>Danger button</Button>
      <Button uiStyle='link'>Link button</Button>
      <div className='docs-ex-title'>Disabled buttons</div>
      <Button disabled>Default button</Button>
      <Button disabled uiStyle='primary'>Primary button</Button>
      <Button disabled uiStyle='secondary'>Secondary button</Button>
      <Button disabled uiStyle='danger'>Danger button</Button>
      <Button disabled uiStyle='link'>Link button</Button>
    </div>
  )
}
