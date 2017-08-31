import React from 'react'
import { arrayOf, shape, string, bool, oneOf, func } from 'prop-types'

import { Field, ErrorMsg } from '../TextInput/TextInput.styles'
import Checkbox from '../Checkbox'
import FormListTitle from './FormListTitle'
import {fieldSizes} from "../_theme/forms"
import buildKey from '../_theme/utils/buildKey'

function CheckboxList({selectedValues, size, list, htmlId, title, required, error, toggleValue, handleChange}) {
  const valueSelector = (list[0] && list[0].value) ? 'value' : 'label'
  const titleProps = {
    targetId: htmlId,
    required,
    title
  }
  return (
    <Field size={size}>
      {title && <FormListTitle {...titleProps} />}
      <ErrorMsg message={error} />
      <div id={htmlId}>
        {list.map(item => {
          const chkId = buildKey(htmlId, item.label)
          const checkboxProps = {
            key: chkId,
            htmlId: chkId,
            label: item.label,
            checked: selectedValues.indexOf(item[valueSelector]) !== -1,
            value: item[valueSelector],
            onChange: toggleValue(item[valueSelector], handleChange)
          }
          return (
            <Checkbox {...checkboxProps} />
          )
        })}
      </div>
    </Field>
  )
}

CheckboxList.propTypes = {
  selectedValues: arrayOf(string).isRequired,
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
  toggleValue: func.isRequired,
  handleChange: func.isRequired
}

CheckboxList.defaultProps = {
  size: 'default',
  title: null,
  required: false,
  error: null
}

export default CheckboxList