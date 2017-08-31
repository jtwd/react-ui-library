import React from 'react'
import { string, func, bool } from 'prop-types'
import { compose, withProps } from 'recompose'

import { IconWrapper, StyledInput, StyledLabel } from "../Checkbox/Checkbox.styles"
import Icon from '../Icon'
import withFocus from '../_enhancers/withFocus'

function RadioButton({label,htmlId, hasFocus, isChecked, toggleFocus, iconName, value, ...props}) {
  return (
    <StyledLabel htmlFor={htmlId} checked={isChecked} focus={hasFocus}>
      <StyledInput
        type="radio"
        id={htmlId}
        value={value}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        {...props}
      />
      <IconWrapper>
        <Icon icon={iconName} />
      </IconWrapper>
      {label}
    </StyledLabel>
  )
}

RadioButton.propTypes = {
  /** Text to be displayed in label and value (if no value prop is supplied) */
  label: string.isRequired,
  /** Unique id */
  htmlId: string.isRequired,
  /** Value prop (label is used if this is not supplied) */
  value: string.isRequired,
  /** Checked value */
  isChecked: bool,
  /** Focus value */
  hasFocus: bool.isRequired,
  /** Function to toggle focus */
  toggleFocus: func.isRequired,
  /** Name of icon to display */
  iconName: string.isRequired
}

RadioButton.defaultProps = {
  isChecked: false
}

export default compose(
  withFocus,
  withProps(({ isChecked, value, label }) => {
    // if value is not provided, use label
    let newValue = label
    if (value) newValue = value
    return {
      iconName: isChecked ? 'radioOn' : 'radioOff',
      value: newValue
    }
  })
)(RadioButton)
