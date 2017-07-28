import React from 'react'
import { node, bool } from 'prop-types'
import styled from 'styled-components'
import { md } from '../_theme/spacers'
import { textMaxWidth, shortMaxWidth } from '../_theme/units'

const StyledDiv = styled.div`
  ${props => !props.collapse && `
    padding: ${md};`
  }
  
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

function Wrapper({ text, centered, short, collapse, children }) {
  return (
    <StyledDiv text={text} centered={centered} short={short} collapse={collapse}>
      {children}
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
  /** Collapsed wrapper (no padding) */
  collapse: bool,
  /** Contents of wrapper */
  children: node
}

Wrapper.defaultProps = {
  text: false,
  short: false,
  centered: false,
  collapse: false,
  children: null
}

export default Wrapper
