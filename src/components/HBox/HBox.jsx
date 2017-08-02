import React from 'react'
import { node, oneOf } from 'prop-types'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  
  ${props => props.align === 'top' && `
    align-items: flex-start;
  `}
  ${props => props.align === 'bottom' && `
    align-items: flex-end;
  `}
  
  ${props => props.pack === 'start' && `
    justify-content: flex-start;
  `}
  ${props => props.pack === 'center' && `
    justify-content: center;
  `}
  ${props => props.pack === 'end' && `
    justify-content: flex-end;
  `}
  ${props => props.pack === 'space-between' && `
    justify-content: space-between;
  `}
  ${props => props.pack === 'space-around' && `
    justify-content: space-around;
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
  /** null, start, center, end, space-between, space-around */
  pack: oneOf(['start', 'center', 'end', 'space-between', 'space-around', null]),
  children: node.isRequired
}

HBox.defaultProps = {
  align: 'stretch',
  pack: null
}

export default HBox
