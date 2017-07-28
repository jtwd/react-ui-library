import React, { Component } from 'react'
import styled from 'styled-components'
import { string, bool, func, number } from 'prop-types'
import { yellow } from '../_theme/colors'
import TextInput from '../TextInput'
import Icon from '../Icon'

const Toggle = styled.label`
  position: absolute;
  bottom: 0.1rem;
  right: 0.5rem;
  z-index: 10;
  
  &:hover,
  &:focus {
    color: ${yellow};
  }
`

class PasswordInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showPassword: false
    }
  }

  toggleShowPassword() {
    this.setState(prevState => {
      const newState = { showPassword: !prevState.showPassword }
      return newState
    })
  }

  render() {
    const { htmlId, value, label, error, onChange, placeholder, maxLength, required, showVisibilityToggle, ...props} = this.props
    const { showPassword } = this.state

    return (
      <TextInput
        htmlId={htmlId}
        label={label}
        placeholder={placeholder}
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        error={error}
        required={required}
        {...props}
      >
        {
          showVisibilityToggle &&
          <Toggle htmlFor={htmlId} title="Toggle password visibility"  className="togglePassword" onClick={() => { this.toggleShowPassword() }}>
            <Icon icon="eye" />
          </Toggle>
        }
      </TextInput>
    )
  }
}

PasswordInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used by convention.*/
  name: string.isRequired,

  /** Password value */
  // eslint-disable-next-line react/require-default-props
  value: string,

  /** Input label */
  label: string,

  /** Function called when password input value changes */
  onChange: func.isRequired,

  /** Max password length accepted */
  // eslint-disable-next-line react/require-default-props
  maxLength: number,

  /** Required field */
  required: bool,

  /** Placeholder displayed when no password is entered */
  placeholder: string,

  /** Set to true to show the toggle for displaying the currently entered password */
  showVisibilityToggle: bool,

  /** Validation error to display */
  error: string
}

PasswordInput.defaultProps = {
  label: '',
  placeholder: '',
  showVisibilityToggle: true,
  error: '',
  required: false
}

export default PasswordInput
