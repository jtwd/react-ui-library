import React from 'react'
import TextInput from '../TextInput'

export default function TextInputError() {
  return (
    <TextInput
      htmlId="email"
      label="Email address"
      name="email"
      onChange={() => {}}
      required
      error="This is a required field"
    />
  )
}
