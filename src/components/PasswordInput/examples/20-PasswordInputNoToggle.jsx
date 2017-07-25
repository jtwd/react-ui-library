import React from 'react'
import PasswordInput from '../PasswordInput'

/** Password input without toggle */
export default function PasswordInputNoToggle() {
  return (
    <PasswordInput
      htmlId="password2"
      label="Password"
      name="password2"
      showVisibilityToggle={false}
      onChange={() => {}}
    />
  )
}
