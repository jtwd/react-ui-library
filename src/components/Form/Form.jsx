import React, { Component } from 'react'
import { node, func, arrayOf, shape, string, bool } from 'prop-types'

import Wrapper from '../Wrapper'
import Panel from '../Panel'
import TextInput from '../TextInput'
import PasswordInput from '../PasswordInput'

function decorateFields (fieldsArray) {
  const fields = {}
  fieldsArray.map(field => {
    fields[field.name] = field
    fields[field.name].value = ''
    return false
  })
  return fields
}

class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fields: decorateFields(props.fields),
      errors: {},
      submitted: false
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit()
  }

  handleInputChange (evt) {
    const fields = this.state.fields;
    fields[evt.target.name].value = evt.target.value;
    this.setState({fields});
  }

  renderField (fieldKey) {
    const { fields } = this.state
    const field = fields[fieldKey]

    if (field.type === 'password') {
      return (
        <PasswordInput
          key={field.htmlId}
          name={field.name}
          htmlId={field.htmlId}
          type={field.type}
          label={field.label}
          required={field.required}
          value={this.state.fields[field.name].value}
          onChange={(e) => {this.handleInputChange (e)}}
        />
      )
    }
    return (
      <TextInput
        key={field.htmlId}
        name={field.name}
        htmlId={field.htmlId}
        type={field.type}
        label={field.label}
        required={field.required}
        value={this.state.fields[field.name].value}
        onChange={(e) => {this.handleInputChange (e)}}
      />
    )
  }

  render () {
    const { title, controls, ...props } = this.props
    const { fields } = this.state
    const keys = Object.keys(fields)
    return (
      <Wrapper collapse short type="form" {...props} onSubmit={(e) => this.handleSubmit(e)}>
        <Panel header={title} footer={controls}>
          {keys.map(key => this.renderField(key))}
        </Panel>
      </Wrapper>
    )
  }
}

Form.propTypes = {
  title: node.isRequired,
  controls: node.isRequired,
  onSubmit: func.isRequired,
  fields: arrayOf(shape({
    name: string.isRequired,
    htmlId: string.isRequired,
    label: string.isRequired,
    required: bool,
    type: string
  })).isRequired
}

export default Form