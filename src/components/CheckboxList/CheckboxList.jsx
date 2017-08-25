import React, { Component } from 'react'
import { arrayOf, shape, string, bool, oneOf, func } from 'prop-types'

import Checkbox from '../Checkbox'
import FormListTitle from './FormListTitle'
import { Field, ErrorMsg } from '../TextInput/TextInput.styles'
import { fieldSizes } from '../_theme/forms'
import getSelectedValues from '../_theme/utils/getSelectedValues'
import buildKey from '../_theme/utils/buildKey'

class CheckboxList extends Component {
  constructor (props) {
    super(props)
    // are we using 'value' or 'label' as return checkbox values?
    this.valueSelector = props.list[0].value ? 'value' : 'label'
    this.state = {
      selectedValues: getSelectedValues(props.list, 'checked', this.valueSelector)
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
      const value = item[this.valueSelector]
      const checkboxId = buildKey(htmlId, item.label)
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

    return (
      <Field size={size}>
        {title && <FormListTitle targetId={htmlId} required={required} title={title} />}
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