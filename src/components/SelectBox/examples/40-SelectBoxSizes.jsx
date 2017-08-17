import React from 'react'

import SelectBox from '../SelectBox'

/** SelectBox sizes */
export default function TextInputSizes() {
  const options = [
    { id: 1, label: 'One' },
    { id: 2, label: 'Two' },
    { id: 3, label: 'Three' }
  ]

  return (
    <div>
      <SelectBox
        htmlId="xs"
        label="XS"
        name="xs"
        size="xs"
        options={options}
        defaultOptionLabel=" "
        onChange={() => {}}
      />
      <SelectBox
        htmlId="sm"
        label="SM"
        name="sm"
        size="sm"
        defaultOptionLabel=" "
        options={options}
        onChange={() => {}}
      />
      <SelectBox
        htmlId="md"
        label="MD"
        name="md"
        size="md"
        options={options}
        onChange={() => {}}
      />
      <SelectBox
        htmlId="lg"
        label="Lg"
        name="lg"
        size="lg"
        options={options}
        onChange={() => {}}
      />
      <SelectBox
        htmlId="xl"
        label="XL"
        name="xl"
        size="xl"
        options={options}
        onChange={() => {}}
      />
    </div>
  )
}
