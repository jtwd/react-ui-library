import React from 'react'

import SelectBox from '../SelectBox'

/** SelectBox with selected value */
export default function SelectBoxSelectedValue() {
  const options = [
    { id: 1, label: 'Option number 1', value: '4324324' },
    { id: 2, label: 'Secondary option', value: '4324344' },
    { id: 3, label: 'Option three', value: '4324366' }
  ]

  return (
    <SelectBox
      htmlId="selected"
      label="Selected value"
      name="selected"
      value={`4324344`}
      options={options}
      onChange={() => {}}
    />
  )
}
