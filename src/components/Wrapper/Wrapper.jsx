import React from 'react'
import { node, bool } from 'prop-types'
import styled from 'styled-components'
import { md } from '../../theme/spacers'
import { textMaxWidth, shortMaxWidth } from '../../theme/units'

const StyledDiv = styled.div`
  padding: ${md};
  
  ${props => props.text && `
    max-width: ${textMaxWidth};
  `}
  
  ${props => props.short && `
    max-width: ${shortMaxWidth};
  `}
  
  ${props => props.centered && `
    margin-left: auto;
    margin-right: auto;
  `}
`

function Wrapper(props) {
  const { text, centered, short } = props
  return (
    <StyledDiv text={text} centered={centered} short={short}>
      {props.children}
    </StyledDiv>
  )
}

Wrapper.propTypes = {
  /** Sized appropriately for text */
  text: bool,
  /** Short Sized  */
  short: bool,
  /** Centered wrapper */
  centered: bool,
  /** Contents of wrapper */
  children: node
}

Wrapper.defaultProps = {
  text: false,
  short: false,
  centered: false,
  children: null
}

export default Wrapper
