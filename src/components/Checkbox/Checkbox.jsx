import React from 'react'
import { string, func, bool } from 'prop-types'
import { compose, withProps } from 'recompose'

import { IconWrapper, StyledInput, StyledLabel } from "./Checkbox.styles"
import Icon from '../Icon'
import withFocus from '../_enhancers/withFocus'
import withChecked from '../_enhancers/withChecked'

function Checkbox({label,htmlId, isChecked, toggleChecked, hasFocus, toggleFocus, iconName, value}) {
  return (
    <StyledLabel htmlFor={htmlId} checked={isChecked} focus={hasFocus}>
      <StyledInput
        type="checkbox"
        id={htmlId}
        value={value}
        checked={isChecked}
        onChange={toggleChecked}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
      />
      <IconWrapper>
        <Icon icon={iconName} />
      </IconWrapper>
      {label}
    </StyledLabel>
  )
}

Checkbox.propTypes = {
  /** Text to be displayed in label and value (if no value prop is supplied) */
  label: string.isRequired,
  /** to be called with checkbox changes */
  toggleChecked: func.isRequired,
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

Checkbox.defaultProps = {
  isChecked: false
}

const enhance = compose(
  withFocus,
  withChecked,
  withProps(({ isChecked, value, label }) => {
    // if value is not provided, use label
    let newValue = label
    if (value) newValue = value
    return {
      iconName: isChecked ? 'checkboxOn' : 'checkboxOff',
      value: newValue
    }
  })
)

export default enhance(Checkbox)

/*
export default compose(
  withFocus,
  withChecked,
  withProps(({ isChecked, value, label }) => {
    // if value is not provided, use label
    let newValue = label
    if (value) newValue = value
    return {
      iconName: isChecked ? 'checkboxOn' : 'checkboxOff',
      value: newValue
    }
  })
)(Checkbox)
*/