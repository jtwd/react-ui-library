import React from 'react'
import CheckboxList from '../CheckboxList'
// eslint-disable no-console
/** Standard CheckboxList */
export default function CheckboxListSizes () {
  const list = [
    {label: 'Checkbox option 1 with a longer label to check multiline styles'},
    {label: 'This is checkbox 2'},
    {label: 'A third checkbox'}
  ]
  /* eslint-disable */
  return (
    <div>
      <CheckboxList
        title="Md"
        list={list}
        htmlId="chk-list4"
        size="md"
        onChange={(selected) => {console.log(selected)}}
      />
      <CheckboxList
        title="Lg"
        list={list}
        htmlId="chk-list5"
        size="lg"
        onChange={(selected) => {console.log(selected)}}
      />
      <CheckboxList
        title="Xl"
        list={list}
        htmlId="chk-list6"
        size="xl"
        onChange={(selected) => {console.log(selected)}}
      />
    </div>
  )
}
