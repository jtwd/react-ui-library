import React from 'react'

import Form from '../Form'
import SubmitButton from '../../SubmitButton'
import TextInput from '../../TextInput'

function FormSimple() {
  const Controls = <SubmitButton>Submit</SubmitButton>
  return (
    <Form title="Simple Form" controls={Controls} short centered>
      <TextInput
        htmlId="simple1"
        label="Email address"
        name="simple1"
        type="email"
        placeholder="user@domain.com"
        onChange={() => {}}
        required
      />
    </Form>
  )
}

export default FormSimple