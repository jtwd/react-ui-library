import React from 'react'

import SelectBox from '../SelectBox'

/** Required SelectBox */
export default function SelectBoxRequired() {
  const options = [
    { id: 1, label: 'Option number 1', value: '4324324' },
    { id: 2, label: 'Secondary option', value: '4324344' },
    { id: 3, label: 'Option three', value: '4324366' }
  ]

  return (
    <SelectBox
      htmlId="required"
      label="Required SelectBox"
      name="required"
      required
      options={options}
      onChange={() => {}}
    />
  )
}
