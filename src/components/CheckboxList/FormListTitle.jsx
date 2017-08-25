import React from 'react'
import {string, bool} from 'prop-types'

import Label from '../Label'

export default function FormListTitle({title, targetId, required}) {
  return (
    <Label htmlFor={targetId} required={required} label={title} />
  )
}

FormListTitle.propTypes = {
  title: string.isRequired,
  targetId: string.isRequired,
  required: bool
}

FormListTitle.defaultProps = {
  required: false
}