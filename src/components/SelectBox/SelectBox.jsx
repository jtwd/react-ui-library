import React from 'react'
import { string, oneOf, bool, func, node, arrayOf, object } from 'prop-types'

import Label from '../Label'
import { StyledSelectBox, Option } from './SelectBox.styles'
import { Field, ErrorMsg } from "../TextInput/TextInputStyles"

/** SelectBox field - Can be required, in error. Uses: Label, Icon. Options are passed in as an array of objects. Each option contains: id, label, value (optional). If value is not supplied, label is used as the value */
function SelectBox({ htmlId, size, name, label, required, defaultOptionLabel, onChange, options, defaultValue, error, children, ...props }) {
  if (options.length < 2) return null // there needs to be more than 1 option
  return (
    <Field size={size}>
      <Label htmlFor={htmlId} label={label} required={required} />
      <StyledSelectBox
        id={htmlId}
        name={name}
        onChange={onChange}
        error={error}
        value={defaultValue}
        {...props}
      >
        {defaultOptionLabel && <Option>{defaultOptionLabel}</Option>}
        {options && options.map((option) => {
          let optionVal = option.label
          if (option.value) optionVal = option.value
          return(
            <Option
              key={`${htmlId}-${option.id}`}
              value={optionVal}
            >{option.label}</Option>
          )
        })}
      </StyledSelectBox>
      {children}
      <ErrorMsg message={(error)} />
    </Field>
  )
}

SelectBox.propTypes = {
  /** ID for input to link with label */
  htmlId: string.isRequired,
  /** Name of input */
  name: string.isRequired,
  /** To go in label */
  label: string.isRequired,
  /** Size (default, xs, sm, md, lg) */
  size: oneOf(['default', 'xs', 'sm', 'md', 'lg', 'xl']),
  /** Required field */
  required: bool,
  /** Function to run when input is being typed in */
  onChange: func.isRequired,
  /** Value of select */
  // eslint-disable-next-line react/require-default-props
  defaultValue: string,
  /** Text to be shown in the first (default) option */
  defaultOptionLabel: string,
  /** Options for selectbox */
  options: arrayOf(object),
  /** Error message */
  error: string,
  /** TextInput contents */
  children: node
}

SelectBox.defaultProps = {
  size: 'default',
  required: false,
  defaultValue: '',
  defaultOptionLabel: 'Please select an option',
  error: null,
  options: [],
  children: null
}

export default SelectBox
