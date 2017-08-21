import React from 'react'

import FieldGroup from '../FieldGroup'
import TextInput from '../../TextInput'
import SelectBox from '../../SelectBox'

/** Date of birth field group */
export default function FieldGroupStandard() {
  const months = [
    { id: '1', label: 'January'},
    { id: '2', label: 'February'},
    { id: '3', label: 'March'},
    { id: '4', label: 'April'},
    { id: '5', label: 'May'},
    { id: '6', label: 'June'},
    { id: '7', label: 'July'},
    { id: '8', label: 'August'},
    { id: '9', label: 'September'},
    { id: '10', label: 'October'},
    { id: '11', label: 'November'},
    { id: '12', label: 'December'}
  ]
  return (
    <FieldGroup stretch>
      <TextInput
        htmlId="dob-day"
        name="dob-day"
        label="Day"
        onChange={() => {}}
        size="xs"
      />
      <SelectBox
        htmlId="dob-mon"
        name="dob-mon"
        label="Month"
        options={months}
        defaultOptionLabel=" "
        onChange={() => {}}
        size="sm"
      />
      <TextInput
        htmlId="dob-year"
        name="dob-year"
        label="Year"
        onChange={() => {}}
        size="xs"
      />
    </FieldGroup>
  )
}
