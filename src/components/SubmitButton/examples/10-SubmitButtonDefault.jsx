import React from 'react'

import SubmitButton from '../SubmitButton'

/** Submit button standard */
export default function PasswordInputStandard() {
  return (
    <div>
      <SubmitButton>Submit</SubmitButton>
      <SubmitButton submitting>Submit</SubmitButton>
      <SubmitButton icon="lock">Login</SubmitButton>
      <SubmitButton icon="lock" submitting>Loading</SubmitButton>
    </div>
  )
}
