import React from 'react'

import TextInput from '../SelectBox'

/** Text input sizes */
export default function TextInputSizes() {
  return (
    <div>
      <TextInput
        htmlId="xs-input"
        label="xs"
        name="xs"
        size="xs"
        onChange={() => {}}
      />
      <TextInput
        htmlId="sm-input"
        label="sm"
        name="sm"
        size="sm"
        onChange={() => {}}
      />
      <TextInput
        htmlId="md-input"
        label="md"
        name="md"
        size="md"
        onChange={() => {}}
      />
      <TextInput
        htmlId="lg"
        label="lg"
        name="lg"
        size="lg"
        onChange={() => {}}
      />
      <TextInput
        htmlId="xl"
        label="xl"
        name="xl"
        size="xl"
        onChange={() => {}}
      />
    </div>
  )
}
