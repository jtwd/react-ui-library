import React from 'react'
import styled from 'styled-components'
import { string, oneOf } from 'prop-types'
import ReactLoading from 'react-loading'

import { light } from "../_theme/palette"

const StyledLoading = styled(ReactLoading)`
  opacity: .8;
`

const sizes = {
  default: '50px',
  small: '25px',
  large: '80px'
}

/** Uses 'React Loading', with the bars animation */
function Loading ({size, color, alt, ...props}) {
  return (
    <StyledLoading width={sizes[size]} color={color} type="bars" title={alt} delay={250} {...props} />
  )
}

Loading.propTypes = {
  /** Color of the animation */
  color: string,
  /** Size - (default, small, large) */
  size: oneOf(['default', 'small', 'large']),
  /** Alt - text to be shown in the title (Loading...) */
  alt: string
}

Loading.defaultProps = {
  color: light(),
  size: 'default',
  alt: 'Loading...'
}

export default Loading
