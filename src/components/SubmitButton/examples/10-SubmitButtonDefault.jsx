import React from 'react'

import SubmitButton from '../SubmitButton'
import HBox from '../../HBox'

/** Submit button standard */
export default function PasswordInputStandard() {
  return (
    <HBox>
      <SubmitButton>Submit</SubmitButton>
      <SubmitButton submitting>Submit</SubmitButton>
      <SubmitButton icon="lock">Login</SubmitButton>
      <SubmitButton icon="lock" submitting>Loading</SubmitButton>
    </HBox>
  )
}
