import React from 'react'
import { string, oneOf, bool, func, node } from 'prop-types'
import Label from '../Label/index'
import { Field, Input, Error } from './TextInput.styles'

function TextInput({ htmlId, name, label, type, required, onChange, placeholder, value, error, children, ...props }) {
  return (
    <Field>
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
      {error &&
        <Error>
          {error}
        </Error>}
    </Field>
  )
}

TextInput.propTypes = {
  htmlId: string.isRequired,
  name: string.isRequired,
  label: string.isRequired,
  type: oneOf(['text', 'email', 'number', 'password', 'tel']),
  required: bool,
  onChange: func.isRequired,
  placeholder: string,
  value: string,
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
