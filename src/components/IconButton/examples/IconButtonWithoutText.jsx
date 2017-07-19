import React from 'react'
import IconButton from '../IconButton'

/** Without text */
export default function IconButtonWithText() {
  return (
    <div>
      <IconButton secondary small icon="close" />
      <IconButton primary icon="close" />
      <IconButton large icon="close" />
    </div>
  )
}
