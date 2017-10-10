import React from 'react'

import Checkbox from '../Checkbox'

export function toggleCheckedState (state) {
  return {
    checked: !state.checked
  }
}

/** Standard Checkbox */
export default class CheckboxStandard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange () {
    this.setState(toggleCheckedState(this.state))
  }

  render () {
    return (
      <Checkbox
        htmlId='chk-standard'
        label='Check the box'
        toggleChecked={this.handleChange}
        isChecked={this.state.checked}
      />
    )
  }
}
