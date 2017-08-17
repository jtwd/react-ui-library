import React from 'react'

import SelectBox from '../SelectBox'

/** SelectBox No Default Value */
export default function SelectBoxNoDefault() {
  const options = [
    { id: 1, label: 'Option number 1' },
    { id: 2, label: 'Secondary option' },
    { id: 3, label: 'Option three' }
  ]

  return (
    <SelectBox
      htmlId="no-default"
      label="No default value"
      name="no-default"
      options={options}
      defaultOptionLabel={null}
      onChange={() => {}}
    />
  )
}
