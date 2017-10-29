import React from 'react'
import { string, bool } from 'prop-types'
import styled from 'styled-components'

import Required from '../FormRequired'
import theme from './Label.theme'
import { themeProps } from '../_theme/utils'

const th = themeProps(theme)

const StyledLabel = styled.label`
  padding: ${th.padding};
  display: block;
`

/** Field label - can be required */
function Label({ htmlFor, label, required }) {
  return (
    <StyledLabel htmlFor={htmlFor}>
      {label} {required && <Required />}
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
