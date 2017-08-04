import React from 'react'
import { node, bool } from 'prop-types'
import styled from 'styled-components'

import Wrapper from '../Wrapper'
import Panel from '../Panel'
import FormControls from '../FormControls'
import { RequiredSymbol } from '../Label/Label.styles'
import { fsSm } from '../_theme/fontSizes'
import { lightRed } from '../_theme/colors'
import { primaryNormal } from "../_theme/units"

const StyledForm = styled.form`
  position: relative;
`

const ReqKey = styled.div`
  font-size: ${fsSm};
  color: ${lightRed};
  font-weight: ${primaryNormal};
`

function getFormHeader (title, reqKey) {
  if (!reqKey) {
    return title
  }
  return (
    <FormControls align='ends'>
      {title}
      <ReqKey>
        <RequiredSymbol />
        Required
      </ReqKey>
    </FormControls>
  )
}

/** Encapulates form styles with the help of Panel and Wrapper components */
function Form ({title, reqKey, controls, short, text, centered, children, ...props}) {
  const Header = getFormHeader(title, reqKey)
  return (
    <Wrapper collapse short={short} text={text} centered={centered}>
      <StyledForm noValidate {...props}>
        <Panel header={Header} footer={controls}>
          {children}
        </Panel>
      </StyledForm>
    </Wrapper>
  )
}

Form.propTypes = {
  /** Form title - goes in the Panel's header */
  title: node.isRequired,
  /** Show required field key */
  reqKey: bool,
  /** Form controls - goes in the Panel's footer */
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
  reqKey: false,
  centered: false
}

export default Form