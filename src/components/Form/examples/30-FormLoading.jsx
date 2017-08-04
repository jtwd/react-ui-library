import React from 'react'

import Form from '../Form'
import SubmitButton from '../../SubmitButton'
import TextInput from '../../TextInput'

function FormLoading() {
  const Controls = <SubmitButton submitting>Submit</SubmitButton>
  return (
    <Form submitting reqKey title="Loading Form" controls={Controls} text centered>
      <TextInput
        htmlId="loading1"
        label="Email address"
        name="loading1"
        type="email"
        placeholder="user@domain.com"
        onChange={() => {}}
        required
      />
    </Form>
  )
}

export default FormLoading