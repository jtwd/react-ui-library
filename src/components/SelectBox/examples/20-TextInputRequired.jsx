import React from 'react'

import TextInput from '../SelectBox'

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
