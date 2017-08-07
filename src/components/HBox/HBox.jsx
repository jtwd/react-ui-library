import React from 'react'
import { node, oneOf } from 'prop-types'
import styled from 'styled-components'

import { alignToFlex, packToFlex } from "../_theme/mixins/flexbox"

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  
  ${props => props.align && `
    align-items: ${alignToFlex[props.align]};
  `}
  
  ${props => props.pack && `
    justify-content: ${packToFlex[props.pack]};
  `}
`

/** Flexbox layout helper for horizontal alignment */
function HBox({ children, align, pack, ...props}) {
  return (
    <StyledDiv align={align} pack={pack} {...props}>{children}</StyledDiv>
  )
}

HBox.propTypes = {
  /** stretch, top, bottom, center */
  align: oneOf(['stretch', 'top', 'bottom', 'center']),
  /** null, start, center, end, between, around */
  pack: oneOf(['start', 'center', 'end', 'between', 'around', null]),
  /** Contents of the component */
  children: node.isRequired
}

HBox.defaultProps = {
  align: 'stretch',
  pack: null
}

export default HBox
