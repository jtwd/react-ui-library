import React from 'react'
import { node, bool } from 'prop-types'
import styled, { css } from 'styled-components'
import { md } from '../../theme/spacers'
import { textMaxWidth } from '../../theme/units'

const StyledDiv = styled.div`
  padding: ${md};
  
  ${props => props.text && css`
    max-width: ${textMaxWidth};
  `}
  
  ${props => props.centered && css`
    margin-left: auto;
    margin-right: auto;
  `}
`

function Wrapper(props) {
  const { text, centered } = props
  return (
    <StyledDiv text={text} centered={centered}>
      {props.children}
    </StyledDiv>
  )
}

Wrapper.propTypes = {
  /** Sized appropriately for text */
  text: bool,
  /** Centered wrapper */
  centered: bool,
  /** Contents of wrapper */
  children: node
}

Wrapper.defaultProps = {
  text: false,
  centered: false,
  children: null
}

export default Wrapper
