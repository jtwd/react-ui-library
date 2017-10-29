import React from 'react'
import { node, bool } from 'prop-types'
import styled from 'styled-components'

import Wrapper from '../Wrapper'
import Panel from '../Panel'
import LoadingOverlay from '../LoadingOverlay'
import FormHeader from './FormHeader'

const StyledForm = styled.form`
  position: relative;
`

/** Encapulates form styles with the help of: Wrapper, Panel, FormHeader components */
function Form ({submitting, title, reqKey, controls, short, text, centered, children, ...props}) {
  const Header = <FormHeader title={title} reqKey={reqKey} />
  return (
    <Wrapper collapse short={short} text={text} centered={centered}>
      <StyledForm noValidate {...props}>
        <LoadingOverlay panel active={submitting} />
        <Panel header={Header} footer={controls}>
          {children}
        </Panel>
      </StyledForm>
    </Wrapper>
  )
}

Form.propTypes = {
  /** show loading animation */
  submitting: bool,
  /** Form title - goes in the Panel's header */
  title: node.isRequired,
  /** Show required field key */
  reqKey: bool,
  /** Form controls - goes in the Panel's footer */
  controls: node.isRequired,
  /** Contents of the form */
  children: node.isRequired,
  /** Relates to Wrapper prop */
  short: bool,
  /** Relates to Wrapper prop */
  text: bool,
  /** Relates to Wrapper prop */
  centered: bool
}

Form.defaultProps = {
  submitting: false,
  short: false,
  text: false,
  reqKey: false,
  centered: false
}

export default Form
