import React from 'react'
import RadioButtonList from '../RadioButtonList'
// eslint-disable no-console
/** Standard RadioButtonList */
export default function RadioButtonListErrorTitle () {
  const list = [
    {label: 'RadioButton option 1', value: '1'},
    {label: 'This is RadioButton 2', value: '2'},
    {label: 'A third RadioButton', value: '3'}
  ]
  /* eslint-disable */
  return (
    <RadioButtonList
      list={list}
      title="Title for Radio Button list"
      required
      htmlId="rad-list2"
      handleChange={(val) => console.log('new value: ' + val)}
      error="Radio Button List is a required field"
    />
  )
}
