import React from 'react'
import { string, bool } from 'prop-types'

import { Label as StyledLabel, RequiredSymbol } from './Label.styles'

/** Field label - can be required */
function Label({ htmlFor, label, required }) {
  return (
    <StyledLabel htmlFor={htmlFor}>
      {label} {required && <RequiredSymbol title="Required field" />}
    </StyledLabel>
  )
}

Label.propTypes = {
  /** To link to an input */
  htmlFor: string.isRequired,
  /** Label contents */
  label: string.isRequired,
  /** Required field */
  required: bool
}

Label.defaultProps = {
  required: false
}

export default Label
