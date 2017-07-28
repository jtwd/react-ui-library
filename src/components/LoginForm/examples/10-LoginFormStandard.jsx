import React from 'react'
import LoginForm from '../LoginForm'

function loginSubmit ({email, password}) {
  // eslint-disable-next-line no-console
  console.log('Login!', email, password)
}

export default function LoginFormStandard() {
  return <LoginForm onSubmit={loginSubmit} />
}
