import React from 'react'
import { node, oneOf } from 'prop-types'
import styled from 'styled-components'

import { alignToFlex, packToFlex } from "../_theme/mixins/flexbox"

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  
  ${props => props.align && `
    align-items: ${alignToFlex[props.align]};
  `}
  
  ${props => props.pack && `
    justify-content: ${packToFlex[props.pack]};
  `}
`

/** Flexbox layout helper for vertical alignment */
function VBox({ children, align, pack, ...props}) {
  return (
    <StyledDiv align={align} pack={pack} {...props}>{children}</StyledDiv>
  )
}

VBox.propTypes = {
  /** stretch, top, bottom, center */
  align: oneOf(['stretch', 'top', 'bottom', 'center']),
  /** start, center, ends, between, around */
  pack: oneOf(['start', 'center', 'end', 'between', 'around', null]),
  children: node.isRequired
}

VBox.defaultProps = {
  align: 'stretch',
  pack: null
}

export default VBox
