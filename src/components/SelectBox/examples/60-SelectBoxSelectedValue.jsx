import React, { Component } from 'react'

import SelectBox from '../SelectBox'

/** SelectBox with selected value */
class SelectBoxSelectedValue extends Component {
  constructor (props) {
    super(props)
    this.state = {
      options: [
        { id: 1, label: 'Option number 1', value: '4324324' },
        { id: 2, label: 'Secondary option', value: '4324344' },
        { id: 3, label: 'Option three', value: '4324366' }
      ],
      selectedValue: '4324344'
    }
  }
  handleChange(evt) {
    this.setState({selectedValue: evt.target.value})
  }
  render () {
    return (
      <SelectBox
        htmlId="selected"
        label="Selected value"
        name="selected"
        value={this.state.selectedValue}
        options={this.state.options}
        onChange={(e) => {this.handleChange(e)}}
      />
    )
  }
}

export default SelectBoxSelectedValue
