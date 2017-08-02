import React from 'react'
import { node, bool } from 'prop-types'
import styled from 'styled-components'

import Wrapper from '../Wrapper'
import Panel from '../Panel'

const StyledForm = styled.form`
  position: relative;
`

/** Encapulates form styles with the help of Panel and Wrapper components */
function Form ({title, controls, short, text, centered, children, ...props}) {
  return (
    <Wrapper collapse short={short} text={text} centered={centered}>
      <StyledForm noValidate {...props}>
        <Panel header={title} footer={controls}>
          {children}
        </Panel>
      </StyledForm>
    </Wrapper>
  )
}

Form.propTypes = {
  /** Form title - goes in the Panel's header */
  title: node.isRequired,
  /** Form controls - goes the Panel's footer */
  controls: node.isRequired,
  children: node.isRequired,
  /** Relates to Wrapper prop */
  short: bool,
  /** Relates to Wrapper prop */
  text: bool,
  /** Relates to Wrapper prop */
  centered: bool
}

Form.defaultProps = {
  short: false,
  text: false,
  centered: false
}

export default Form