import React from 'react'
import CheckboxList from '../CheckboxList'

export default function CheckboxListStandard () {
  const list = [
    {label: 'Checkbox option 1'},
    {label: 'This is checkbox 2'},
    {label: 'A third checkbox', checked: true}
  ]
  return (
    <CheckboxList list={list} required title="A list of checkboxes" htmlId="chk-list1" size="md" error="You need to select at least 2 options" />
  )
}