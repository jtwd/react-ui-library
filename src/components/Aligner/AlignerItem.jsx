import React from 'react'
import { node, number } from 'prop-types'
import styled from 'styled-components'

const StyledContainer = styled.div`
  flex: ${props => (props.flex > 0) ? props.flex : 'none'};
`

/** Flexbox layout helper for alignment */
function AlignerItem({ children, flex, ...props}) {
  return (
    <StyledContainer flex={flex} {...props}>{children}</StyledContainer>
  )
}

AlignerItem.propTypes = {
  children: node.isRequired,
  flex: number
}

AlignerItem.defaultProps = {
  flex: 'none'
}

export default AlignerItem
