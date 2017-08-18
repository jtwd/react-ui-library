import React from 'react'
import CheckboxList from '../CheckboxList'
// eslint-disable no-console
/** Standard CheckboxList */
export default function CheckboxListStandard () {
  const list = [
    {label: 'Checkbox option 1'},
    {label: 'This is checkbox 2'},
    {label: 'A third checkbox'}
  ]
  /* eslint-disable */
  return (
    <CheckboxList
      list={list}
      htmlId="chk-list1"
      onChange={(selected) => {console.log(selected)}}
    />
  )
}
