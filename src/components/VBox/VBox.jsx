import React from 'react'
import { node, oneOf } from 'prop-types'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  
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

/** Flexbox layout helper for vertical alignment */
function VBox({ children, align, pack, ...props}) {
  return (
    <StyledDiv align={align} pack={pack} {...props}>{children}</StyledDiv>
  )
}

VBox.propTypes = {
  /** stretch, top, bottom, center */
  align: oneOf(['stretch', 'top', 'bottom', 'center']),
  /** start, center, ends, space-between, space-around */
  pack: oneOf(['start', 'center', 'end', 'space-between', 'space-around', null]),
  children: node.isRequired
}

VBox.defaultProps = {
  align: 'stretch',
  pack: null
}

export default VBox
