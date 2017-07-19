import React from 'react'
import IconButton from '../IconButton'

/** With text */
export default function IconButtonWithText() {
  return (
    <div>
      <IconButton small icon="lock">
        Login
      </IconButton>
      <IconButton primary icon="lock">
        Login
      </IconButton>
      <IconButton large secondary icon="lock">
        Login
      </IconButton>
    </div>
  )
}
