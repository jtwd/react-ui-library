import React from 'react'
import { string, oneOf, bool, func, node } from 'prop-types'

import Label from '../Label'
import { Field, Input, ErrorMsg } from "./TextInput.styles"
import { fieldSizes } from "../_theme/forms"

/** TextInput field - Can be required, in error. Uses: Label, Icon, Message */
function TextInput({ htmlId, size, name, label, type, required, onChange, placeholder, value, error, children, ...props }) {
  return (
    <Field size={size}>
      <Label htmlFor={htmlId} label={label} required={required} />
      <Input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        {...props}
      />
      {children}
      <ErrorMsg message={(error)} />
    </Field>
  )
}

TextInput.propTypes = {
  /** ID for input to link with label */
  htmlId: string.isRequired,
  /** Name of input */
  name: string.isRequired,
  /** To go in label */
  label: string.isRequired,
  /** Input type (text, email, number, password, tel) */
  type: oneOf(['text', 'email', 'number', 'password', 'tel']),
  /** Size (default, xs, sm, md, lg) */
  size: oneOf(Object.keys(fieldSizes)),
  /** Required field */
  required: bool,
  /** Function to run when input is being typed in */
  onChange: func.isRequired,
  /** Placeholder text */
  placeholder: string,
  /** Value of input */
  // eslint-disable-next-line react/require-default-props
  value: string,
  /** Error message */
  error: string,
  /** TextInput contents */
  children: node
}

TextInput.defaultProps = {
  type: 'text',
  size: 'default',
  required: false,
  placeholder: '',
  error: null,
  children: null
}

export default TextInput

