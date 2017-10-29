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
function Loading ({size, color, alt, type, ...props}) {
  return (
    <StyledLoading width={sizes[size]} color={color} type={type} title={alt} delay={250} {...props} />
  )
}

Loading.propTypes = {
  /** Color of the animation */
  color: string,
  /** Size - (default, small, large) */
  size: oneOf(['default', 'small', 'large']),
  /** Alt - text to be shown in the title (Loading...) */
  alt: string,
  /** Type of loading animation */
  type: oneOf(['balls', 'bars', 'bubbles', 'cubes', 'cylon', 'spin', 'spinningBubbles', 'spokes'])
}

Loading.defaultProps = {
  color: light(),
  size: 'default',
  alt: 'Loading...',
  type: 'bars'
}

export default Loading
