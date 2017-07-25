import React from 'react'
import { string, oneOf, bool, func, node } from 'prop-types'
import Label from '../Label/index'
import { Field, Input, Error } from './TextInput.styles'

function TextInput({ htmlId, name, label, type, required, onChange, placeholder, value, error, children, ...props }) {
  return (
    <Field>
      <Label htmlFor={htmlId} label={label} required={required} />
      <Input id={htmlId} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} error={error} {...props} />
      {children}
      {error &&
        <Error>
          {error}
        </Error>}
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
  /** Required field */
  required: bool,
  onChange: func.isRequired,
  placeholder: string,
  value: string,
  /** Error message */
  error: string,
  children: node
}

TextInput.defaultProps = {
  type: 'text',
  required: false,
  placeholder: '',
  value: '',
  error: null,
  children: null
}

export default TextInput
