import React from 'react'
import { oneOf, arrayOf, shape, string, func, bool } from 'prop-types'

import RadioButton from '../RadioButton'
import { Field, ErrorMsg } from '../TextInput/TextInput.styles'
import FormListTitle from '../CheckboxList/FormListTitle'
import { fieldSizes } from "../_theme/forms";
import buildKey from '../_theme/utils/buildKey'
import withSelectedValue from '../_enhancers/withSelectedValue'

function RadioButtonList({size, htmlId, list, value, handleClick, handleChange, error, title, required}) {
  const titleProps = {
    targetId: htmlId,
    required,
    title
  }
  return (
    <Field id={htmlId} size={size}>
      {title && <FormListTitle {...titleProps} />}
      <ErrorMsg message={error} />
      {list.map(item => {
        const radId = buildKey(htmlId, item.label)
        const valueSelector = (item[0] && item[0].value) ? 'value' : 'label'
        const radioButtonProps = {
          key: radId,
          htmlId: radId,
          name: htmlId,
          label: item.label,
          value: item[valueSelector],
          isChecked: item[valueSelector] === value,
          onClick: handleClick(item[valueSelector], handleChange)
        }
        return (
          <RadioButton {...radioButtonProps} />
        )
      })}
    </Field>
  )
}

RadioButtonList.propTypes = {
  /** Field size - inherit from field */
  size: oneOf(Object.keys(fieldSizes)),
  /** Unique ID - used to make unique id's from each radio button */
  htmlId: string.isRequired,
  /** List of checkbox items - label, value */
  list: arrayOf(shape({
    label: string.isRequired,
    value: string
  })).isRequired,
  /** Current selected value */
  value: string,
  /** click handler from withSelectedValue enhancer */
  handleClick: func.isRequired,
  /** function to call when value changes */
  handleChange: func.isRequired,
  /** Error message */
  error: string,
  /** Title for RadioButton list - uses Label */
  title: string,
  /** Required field */
  required: bool
}

RadioButtonList.defaultProps = {
  size: 'default',
  value: null,
  error: null,
  title: null,
  required: false
}

export default withSelectedValue(RadioButtonList)
