import React from 'react'

import Checkbox from '../Checkbox'

import { toggleCheckedState } from './10-CheckboxStandard'

/** Checked Checkbox */
export default class CheckboxChecked extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: true
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange () {
    this.setState(toggleCheckedState)
  }

  render () {
    return (
      <Checkbox
        htmlId='chk-checked'
        label='Uncheck the box'
        isChecked={this.state.checked}
        toggleChecked={this.handleChange}
      />
    )
  }
}
