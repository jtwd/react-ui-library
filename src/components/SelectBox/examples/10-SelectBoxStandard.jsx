import React from 'react'

import SelectBox from '../SelectBox'

/** Standard Text Input */
export default function SelectBoxStandard() {
  const options = [
    {
      id: 1,
      label: 'Option number 1'
    },
    {
      id: 2,
      label: 'Secondary option'
    },
    {
      id: 3,
      label: 'Option three'
    }
  ]
  return (
    <SelectBox
      htmlId="standard"
      label="SelectBox"
      name="standard"
      options={options}
      onChange={() => {}}
    />
  )
}
