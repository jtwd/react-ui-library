import React from 'react'

import TextInput from '../TextInput'

/** Required Text Input */
export default function TextInputRequired() {
  return (
    <TextInput
      htmlId="lastName"
      label="Last name"
      name="lastName"
      onChange={() => {}}
      required
    />
  )
}
