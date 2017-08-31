import React, { Component } from 'react'
import { arrayOf, shape, string, oneOf, func, bool } from 'prop-types'

import RadioButton from '../RadioButton'
import { Field, ErrorMsg } from '../TextInput/TextInput.styles'
import FormListTitle from '../CheckboxList/FormListTitle'
import { fieldSizes } from "../_theme/forms"
import buildKey from '../_theme/utils/buildKey'

function getSelectedValue(props) {
  if (!props.value) return null
  return props.value
}

class RadioButtonList extends Component {
  constructor (props) {
    super(props)
    this.state = { selectedValue: getSelectedValue(props) }
    this.valueSelector = props.list[0].value ? 'value' : 'label'
    this.updateSelectedValue = this.updateSelectedValue.bind(this)
  }

  updateSelectedValue(val) {
    if (val !== this.state.selectedValue) {
      this.setState({selectedValue: val})
      this.props.onChange(val)
    }
  }

  render () {
    const { size, list, htmlId, title, required, error } = this.props
    const titleProps = {
      targetId: htmlId,
      required,
      title
    }
    return (
      <Field id={htmlId} size={size}>
        {title && <FormListTitle {...titleProps} />}
        <ErrorMsg message={(error)} />
        {list.map(item => {
          const radId = buildKey(htmlId, item.label)
          const radioButtonProps = {
            key: radId,
            htmlId: radId,
            name: htmlId,
            label: item.label,
            value: item[this.valueSelector],
            isChecked: item[this.valueSelector] === this.state.selectedValue
          }
          return (
            <RadioButton {...radioButtonProps} onClick={() => this.updateSelectedValue(item[this.valueSelector])} />
          )
        })}
      </Field>
    )
  }
}

RadioButtonList.propTypes = {
  /** List of checkbox items - label, value */
  list: arrayOf(shape({
    label: string.isRequired,
    value: string
  })).isRequired,
  /** Current selected value */
  value: string,
  /** Field size - inherit from field */
  size: oneOf(Object.keys(fieldSizes)),
  /** Unique ID - used to make unique id's from each radio button */
  htmlId: string.isRequired,
  /** Function to be when selected value changes */
  onChange: func.isRequired,
  /** Title of RadioButtonList - is added as a label at the top of the RadioButtonList */
  title: string,
  /** Required field */
  required: bool,
  /** Error message */
  error: string
}

RadioButtonList.defaultProps = {
  value: null,
  size: 'default',
  title: null,
  required: false,
  error: null
}

export default RadioButtonList
