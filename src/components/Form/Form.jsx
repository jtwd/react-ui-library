import React from 'react'
import { node, bool } from 'prop-types'
import styled from 'styled-components'

import Wrapper from '../Wrapper'
import Panel from '../Panel'

const StyledForm = styled.form`
  position: relative;
`

function Form ({title, controls, short, text, centered, children, ...props}) {
  return (
    <Wrapper collapse short={short} text={text} centered={centered}>
      <StyledForm {...props}>
        <Panel header={title} footer={controls}>
          {children}
        </Panel>
      </StyledForm>
    </Wrapper>
  )
}

Form.propTypes = {
  title: node.isRequired,
  controls: node.isRequired,
  children: node.isRequired,
  short: bool,
  text: bool,
  centered: bool
}

Form.defaultProps = {
  short: false,
  text: false,
  centered: false
}

export default Form