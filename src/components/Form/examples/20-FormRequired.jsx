import React from 'react'

import Form from '../Form'
import SubmitButton from '../../SubmitButton'
import TextInput from '../../TextInput'

function FormRequired() {
  const Controls = <SubmitButton>Submit</SubmitButton>
  return (
    <Form reqKey title="Required Form" controls={Controls} text centered>
      <TextInput
        htmlId="required1"
        label="Email address"
        name="required1"
        type="email"
        placeholder="user@domain.com"
        onChange={() => {}}
        required
      />
    </Form>
  )
}

export default FormRequired