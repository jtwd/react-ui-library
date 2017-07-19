import React from 'react'
import { node } from 'prop-types'
import styled from 'styled-components'
import { md } from '../../theme/spacers'

const StyledDiv = styled.div`padding: ${md};`

function Wrapper(props) {
  return (
    <StyledDiv>
      {props.children}
    </StyledDiv>
  )
}

Wrapper.propTypes = {
  children: node
}

Wrapper.defaultProps = {
  children: null
}

export default Wrapper
