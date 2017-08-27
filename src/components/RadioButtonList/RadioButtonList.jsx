import React, { Component } from 'react'
import { arrayOf, shape, string, bool, oneOf, func } from 'prop-types'

import RadioButton from '../RadioButton'
import FormListTitle from '../CheckboxList/FormListTitle'
import { Field, ErrorMsg } from '../TextInput/TextInput.styles'
import { fieldSizes } from '../_theme/forms'
import getSelectedValues from '../_theme/utils/getSelectedValues'
import buildKey from '../_theme/utils/buildKey'

class RadioButtonList extends Component {
  constructor (props) {
    super(props)
    // are we using 'value' or 'label' as return RadioButton values?
    this.valueSelector = props.list[0].value ? 'value' : 'label'
    const selectedValues = getSelectedValues(props.list, 'checked', this.valueSelector)
    const selectedValue = (selectedValues.length < 1) ? null : selectedValues[0]
    this.state = {
      selectedValue
    }
    this.selectRadioButton = this.selectRadioButton.bind(this)
  }

  selectRadioButton (val) {
    console.log('select')
    if (val !== this.state.selectedValue) {
      this.props.onChange(val)
      this.setState({selectedValue: val})
    }
  }

  renderRadioButton () {
    const { list, htmlId } = this.props
    const { selectedValue } = this.state
    if(!list || list.lenth < 1 || !htmlId) return null

    return list.map(item => {
      const value = item[this.valueSelector]
      const RadioButtonId = buildKey(htmlId, item.label)
      const isChecked = (value === selectedValue)
      return (
        <RadioButton
          key={RadioButtonId}
          htmlId={RadioButtonId}
          label={item.label}
          onChange={this.selectRadioButton}
          isChecked={isChecked}
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
          {this.renderRadioButton()}
        </div>
      </Field>
    )
  }
}

RadioButtonList.propTypes = {
  /** List of RadioButton items - label, value, checked */
  list: arrayOf(shape({
    label: string.isRequired,
    value: string,
    checked: bool
  })).isRequired,
  /** Unique ID - used to make unique id's for each RadioButton */
  htmlId: string.isRequired,
  /** Sizes - inherits from Field component */
  size: oneOf(Object.keys(fieldSizes)),
  /** Title of RadioButton list - is added as a Label at the top of the RadioButtonList */
  title: string,
  /** Required field */
  required: bool,
  /** Error message */
  error: string,
  /** Function to call when any RadioButton changes */
  onChange: func.isRequired
}

RadioButtonList.defaultProps = {
  size: 'default',
  title: null,
  required: false,
  error: null
}

export default RadioButtonList