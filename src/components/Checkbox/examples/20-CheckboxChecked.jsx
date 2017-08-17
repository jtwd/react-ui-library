import React from 'react'

import Checkbox from '../Checkbox'

/** Checked Checkbox */
export default function CheckboxChecked() {
  return (
    <Checkbox
      htmlId="chk-checked"
      label="Uncheck the box"
      checked
      handleCheckboxChange={() => {}}
    />
  )
}
