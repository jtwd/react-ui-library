import React from 'react'
import { string, bool } from 'prop-types'
import { Label as StyledLabel, RequiredSymbol } from './Label.styles'

function Label({ htmlFor, label, required }) {
  return (
    <StyledLabel htmlFor={htmlFor}>
      {label} {required && <RequiredSymbol title="Required field" />}
    </StyledLabel>
  )
}

Label.propTypes = {
  htmlFor: string.isRequired,
  label: string.isRequired,
  required: bool
}

Label.defaultProps = {
  required: false
}

export default Label
