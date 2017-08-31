import React from 'react'
import RadioButtonList from '../RadioButtonList'
// eslint-disable no-console
/** Standard RadioButtonList */
export default function RadioButtonListStandard () {
  const list = [
    {label: 'RadioButton option 1 with a longer label to check multiline styles'},
    {label: 'This is RadioButton 2'},
    {label: 'A third RadioButton'}
  ]
  /* eslint-disable */
  return (
    <div>
      <RadioButtonList
        title="Md"
        list={list}
        size="md"
        htmlId="rad-list6"
        handleChange={(val) => console.log('new value: ' + val)}
      />
      <RadioButtonList
        title="Lg"
        list={list}
        size="lg"
        htmlId="rad-list7"
        handleChange={(val) => console.log('new value: ' + val)}
      />
      <RadioButtonList
        title="Xl"
        list={list}
        size="xl"
        htmlId="rad-list8"
        handleChange={(val) => console.log('new value: ' + val)}
      />
    </div>
  )
}
