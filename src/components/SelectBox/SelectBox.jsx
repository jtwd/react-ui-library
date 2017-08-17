import React from 'react'
import { string, oneOf, bool, func, node, arrayOf, object } from 'prop-types'

import Label from '../Label'
import Icon from '../Icon'
import { StyledSelectBox, Option } from './SelectBox.styles'
import { Field, Error } from '../TextInput/TextInput.styles'

/** SelectBox field - Can be required, in error. Uses: Label, Icon */
function SelectBox({ htmlId, size, name, label, required, onChange, options, value, error, children, ...props }) {
  console.log(options)
  return (
    <Field size={size}>
      <Label htmlFor={htmlId} label={label} required={required} />
      <StyledSelectBox
        id={htmlId}
        name={name}
        onChange={onChange}
        error={error}
        value={value}
        {...props}
      >
        {options && options.map((option) => <Option key={option.id} value={option.value ? options.value : option.label}>{option.label}</Option>)}
      </StyledSelectBox>
      {children}
      <Error active={(error)}>
        <Icon icon="exclamation" small />
        {error}
      </Error>
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
  size: oneOf(['default', 'xs', 'sm', 'md', 'lg']),
  /** Required field */
  required: bool,
  /** Function to run when input is being typed in */
  onChange: func.isRequired,
  /** Value of select */
  // eslint-disable-next-line react/require-default-props
  value: string,
  /** Options for selectbox */
  options: arrayOf(object).isRequired,
  /** Error message */
  error: string,
  /** TextInput contents */
  children: node
}

SelectBox.defaultProps = {
  type: 'text',
  size: 'default',
  required: false,
  placeholder: '',
  error: null,
  children: null
}

export default SelectBox
