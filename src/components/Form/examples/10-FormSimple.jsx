import React from 'react'

import Form from '../Form'
import Button from '../../Button'
import TextInput from '../../TextInput'

function FormSimple() {
  const Controls = <Button secondary small>Submit</Button>
  return (
    <Form title="Simple Form" controls={Controls} short centered>
      <TextInput
        htmlId="simple1"
        label="Email address"
        type="email"
        placeholder="user@domain.com"
        onChange={() => {}}
        required
      />
    </Form>
  )
}

export default FormSimple