import React from 'react'

import Message from '../../Message'
import ForgottenPasswordForm from '../ForgottenPasswordForm'

const ConfirmMessage = (
  <Message type="success" header="Password reset sent">
    We have sent password reset instructions to your email address, if we found it in our records
  </Message>
)

const ErrorMessage = (
  <Message type="error" header="Something went wrong">
    We could not complete your request at this time. Maybe try again?
  </Message>
)

function ForgottenPasswordMessage() {
  return (
    <div>
      <div className="docs-ex-title">Success message</div>
      <ForgottenPasswordForm successMessage={ConfirmMessage} focus onSubmit={() => {}} />
      <div className="docs-ex-title">Error message</div>
      <ForgottenPasswordForm errorMessage={ErrorMessage} focus onSubmit={() => {}} />
    </div>
  )
}

export default ForgottenPasswordMessage