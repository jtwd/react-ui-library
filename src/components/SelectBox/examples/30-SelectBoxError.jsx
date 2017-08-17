import React from 'react'

import SelectBox from '../SelectBox'

/** SelectBox with error */
export default function SelectBoxError() {
  const options = [
    { id: 1, label: 'Option number 1' },
    { id: 2, label: 'Secondary option' },
    { id: 3, label: 'Option three' }
  ]

  return (
    <SelectBox
      htmlId="error"
      label="SelectBox error"
      name="error"
      options={options}
      error="This is a required field"
      required
      onChange={() => {}}
    />
  )
}
