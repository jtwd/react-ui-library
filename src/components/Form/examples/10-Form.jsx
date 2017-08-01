import React from 'react'

import Form from '../Form'
import Button from '../../Button'
import HBox from '../../HBox'

function FormEg() {
  const Controls = <HBox pack="end"><Button secondary small type="submit">Submit</Button></HBox>
  const fields = [
    {
      htmlId: 'example-email',
      name: 'email',
      type: 'email',
      label: 'Email address',
      required: true
    }
  ]
  return (
    <Form title="Example form" fields={fields} controls={Controls} onSubmit={() => {}} />
  )
}

export default FormEg