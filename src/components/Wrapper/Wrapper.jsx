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
`

function Wrapper(props) {
  const { text } = props
  return (
    <StyledDiv text={text}>
      {props.children}
    </StyledDiv>
  )
}

Wrapper.propTypes = {
  children: node,
  text: bool
}

Wrapper.defaultProps = {
  children: null,
  text: false
}

export default Wrapper
