import React from 'react'

import Form from '../Form'
import Button from '../../Button'
import HBox from '../../HBox'

function FormEg() {
  const Controls = <HBox pack="end"><Button secondary small type="submit">Submit</Button></HBox>
  return (
    <Form title="Example form" controls={Controls} onSubmit={() => console.log('submit')} />
  )
}

export default FormEg