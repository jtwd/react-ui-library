import React from 'react'
import CheckboxList from '../CheckboxList'

/** CheckboxList with pre-selected items */
export default function CheckboxListPreSelected () {
  const list = [
    {label: 'Checkbox option 1', checked: true},
    {label: 'This is checkbox 2'},
    {label: 'A third checkbox', checked: true}
  ]
  /* eslint-disable */
  return (
    <CheckboxList
      list={list}
      htmlId="chk-list3"
      onChange={(selected) => {console.log(selected)}}
    />
  )
}
