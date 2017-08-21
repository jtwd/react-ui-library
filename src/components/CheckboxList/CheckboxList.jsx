import React, { Component } from 'react'
import { arrayOf, shape, string, bool, oneOf, func } from 'prop-types'

import Checkbox from '../Checkbox'
import { Field, ErrorMsg } from '../TextInput/TextInput.styles'
import Label from '../Label'
import { fieldSizes } from '../_theme/forms'

function buildKey(group, id) {
  return `${group}_${id.replace(' ', '').toLowerCase()}`
}

function getSelectedValues(list) {
  const selected = []
  for (let i = 0, x = list.length; i < x; i+=1) {
    if (list[i].checked) {
      if (list[i].value) {
        selected.push(list[i].value)
      } else {
        selected.push(list[i].label)
      }
    }
  }
  return selected
}

class CheckboxList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedValues: getSelectedValues(props.list)
    }
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
  }

  toggleCheckbox (val) {
    const selectedValues = this.state.selectedValues
    const index = selectedValues.indexOf(val)
    if (index > -1) {
      selectedValues.splice(index, 1)
    } else {
      selectedValues.push(val)
    }
    this.props.onChange(selectedValues)
    this.setState({selectedValues})
  }

  renderCheckboxes () {
    const { list, htmlId } = this.props
    if(!list || list.lenth < 1 || !htmlId) return null

    return list.map(item => {
      const checkboxId = buildKey(htmlId, item.label)
      let value = item.label
      if (item.value) value = item.value

      return (
        <Checkbox
          key={checkboxId}
          htmlId={checkboxId}
          label={item.label}
          handleCheckboxChange={this.toggleCheckbox}
          checked={item.checked}
          value={value}
        />
      )
    })
  }
  render () {
    const { size, htmlId, title, required, error } = this.props
    let ListTitle = null
    if (title) {
      ListTitle = <Label htmlFor={htmlId} label={title} required={required} />
    }

    return (
      <Field size={size}>
        {ListTitle}
        <ErrorMsg message={(error)} />
        <div id={htmlId}>
          {this.renderCheckboxes()}
        </div>
      </Field>
    )
  }
}

CheckboxList.propTypes = {
  /** List of checkbox items - label, value, checked */
  list: arrayOf(shape({
    label: string.isRequired,
    value: string,
    checked: bool
  })).isRequired,
  /** Unique ID - used to make unique id's for each checkbox */
  htmlId: string.isRequired,
  /** Sizes - inherits from Field component */
  size: oneOf(Object.keys(fieldSizes)),
  /** Title of checkbox list - is added as a Label at the top of the CheckboxList */
  title: string,
  /** Required field */
  required: bool,
  /** Error message */
  error: string,
  /** Function to call when any checkbox changes */
  onChange: func.isRequired
}

CheckboxList.defaultProps = {
  size: 'default',
  title: null,
  required: false,
  error: null
}

export default CheckboxList