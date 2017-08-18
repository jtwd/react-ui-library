import React from 'react'
import CheckboxList from '../CheckboxList'

/** CheckboxList with title, required with error message */
export default function CheckboxListRequiredError () {
  const list = [
    {label: 'Checkbox option 1', value: '1'},
    {label: 'This is checkbox 2', value: '2'},
    {label: 'A third checkbox', value: '3'}
  ]
  /* eslint-disable */
  return (
    <CheckboxList
      title="Pick one of these options"
      required
      error="You must select at least one option below"
      list={list}
      htmlId="chk-list2"
      onChange={(selected) => {console.log(selected)}}
    />
  )
}