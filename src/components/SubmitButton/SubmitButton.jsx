import React from 'react'
import {bool, node, string} from 'prop-types'
import styled from 'styled-components'

import Button from '../Button'
import Loading from '../Loading'
import {darkBlue} from "../_theme/colors"

const StyledButton = styled(Button)`
  display: flex;
  ${props => props.submitting && `
    cursor: wait;
  `}
`

const StyledLoading = styled(Loading)`
  position: relative;
  left: -8px;
  top: -1px;
  opacity: 1;
`

/** Button with Submitting state - show a loading animation. Uses: Button, Loading */
function SubmitButton ({submitting, icon, children, ...props}) {
  let buttonIcon = icon
  const buttonLoading = submitting ? <StyledLoading size="small" height={25} color={darkBlue} /> : null
  if (submitting && icon) buttonIcon =  null
  return (
    <StyledButton type="submit" disabled={submitting} submitting={submitting} primary icon={buttonIcon} {...props}>
      {buttonLoading}
      {children}
    </StyledButton>
  )
}

SubmitButton.propTypes = {
  /** Submitting state (shows loading animation) */
  submitting: bool,
  /** Icon (initial) for button - if replaced with loading */
  icon: string,
  /** Contents of button */
  children: node.isRequired
}

SubmitButton.defaultProps = {
  icon: null,
  submitting: false
}

export default SubmitButton