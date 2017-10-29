import React from 'react'

import Icon from '../Icon'

/** Sizes */
export default function IconSizes() {
  return (
    <div>
      <Icon icon="eye" uiSize='small' />
      &nbsp;
      <Icon icon="lock" />
      &nbsp;
      <Icon icon="menu" uiSize='large' />
    </div>
  )
}