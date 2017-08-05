import React from 'react'
import { node, bool } from 'prop-types'
import styled from 'styled-components'

const StyledContainer = styled.div`
  flex: ${props => (props.fixed) ? 'none' : 1};
`

/** Flexbox layout helper for alignment */
function AlignerItem({ children, fixed, ...props}) {
  return (
    <StyledContainer fixed={fixed} {...props}>{children}</StyledContainer>
  )
}

AlignerItem.propTypes = {
  children: node.isRequired,
  fixed: bool
}

AlignerItem.defaultProps = {
  fixed: false
}

export default AlignerItem
