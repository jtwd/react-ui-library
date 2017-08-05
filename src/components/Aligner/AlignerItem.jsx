import React from 'react'
import { node, number, oneOf } from 'prop-types'
import styled from 'styled-components'

import { alignToFlex } from "../_theme/mixins/flexbox"

const StyledContainer = styled.div`
  flex: ${props => (props.flex > 0) ? props.flex : 'none'};
  ${props => props.alignSelf && `
    align-self: ${alignToFlex[props.alignSelf]};
  `}
`

/** Flexbox layout helper for alignment */
function AlignerItem({ children, flex, alignSelf, ...props}) {
  return (
    <StyledContainer flex={flex} alignSelf={alignSelf} {...props}>{children}</StyledContainer>
  )
}

AlignerItem.propTypes = {
  children: node.isRequired,
  flex: number,
  alignSelf: oneOf(['top', 'center', 'bottom'])
}

AlignerItem.defaultProps = {
  flex: 'none',
  alignSelf: null
}

export default AlignerItem
