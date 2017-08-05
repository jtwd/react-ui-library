import React from 'react'
import styled from 'styled-components'
import { string, oneOf } from 'prop-types'
import ReactLoading from 'react-loading'

import { white } from "../_theme/colors"

const StyledLoading = styled(ReactLoading)`
  opacity: .8;
`

const sizes = {
  default: '50px',
  small: '25px',
  large: '80px'
}

/** Uses React Loading, with the bars animation */
function Loading ({size, color, alt, ...props}) {
  return (
    <StyledLoading width={sizes[size]} color={color} type="bars" title={alt} delay={250} {...props} />
  )
}

Loading.propTypes = {
  color: string,
  size: oneOf(['default', 'small', 'large']),
  alt: string
}

Loading.defaultProps = {
  color: white,
  size: 'default',
  alt: 'Loading...'
}

export default Loading
