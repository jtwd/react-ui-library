import React from 'react'
import RadioButtonList from '../RadioButtonList'
// eslint-disable no-console
/** Standard RadioButtonList */
export default function RadioButtonListStandard () {
  const list = [
    {label: 'RadioButton option 1'},
    {label: 'This is RadioButton 2'},
    {label: 'A third RadioButton'}
  ]
  /* eslint-disable */
  return (
    <RadioButtonList
      list={list}
      htmlId="rad-list1"
      onChange={(selected) => {console.log(selected)}}
    />
  )
}
