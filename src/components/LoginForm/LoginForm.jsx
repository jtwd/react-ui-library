import React, { Component } from 'react'
import { node, func } from 'prop-types'

import isEmailAddress from '../../services/validation/isEmailAddress'
import { validationMessages } from '../../config/systemMessages'
import Form from '../Form'
import TextInput from '../TextInput'
import PasswordInput from '../PasswordInput'
import Button from '../Button'
import FormControls from '../FormControls'

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fields: {
        email: '',
        password: ''
      },
      errors: {},
      submitted: false
    }
  }

  handleInputChange (evt) {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({fields});
  }

  handleFormSubmit (evt) {
    const {fields} = this.state
    const formIsValid = this.validate(fields)

    evt.preventDefault()

    if(formIsValid) {
      this.props.onSubmit(fields)
      this.setState({submitted: true})
    }
  }

  validate ({email, password}) {
    const errors = {}

    if (!email) {
      errors.email = validationMessages.email.required
    } else if (!isEmailAddress(email)) {
      errors.email = validationMessages.email.invalid
    }
    if (!password) errors.password = validationMessages.password.required

    this.setState({errors})
    const formIsValid = Object.getOwnPropertyNames(errors).length === 0
    return formIsValid
  }

  render () {
    const { errors } = this.state
    const { email, password } = this.state.fields
    const { title } = this.props

    const Controls = (
      <FormControls>
        <Button primary small icon="lock" type="submit">Login</Button>
      </FormControls>
    )

    return (
      <Form short collapse title={title} controls={Controls} onSubmit={(e) => this.handleFormSubmit(e)}>
        <TextInput
          htmlId="login-email"
          name="email"
          label="Email address"
          type="email"
          placeholder="user@domain.com"
          value={email}
          onChange={(e) => this.handleInputChange(e)}
          required
          error={errors.email}
        />

        <PasswordInput
          htmlId="login-password"
          name="password"
          label="Password"
          value={password}
          onChange={(e) => this.handleInputChange(e)}
          maxLength={50}
          required
          error={errors.password} />

      </Form>
    )
  }
}

LoginForm.propTypes = {
  /** Form title - goes in the panel header */
  title: node,
  /** Function to call when validation is passed */
  onSubmit: func.isRequired
}

LoginForm.defaultProps = {
  title: 'Login'
}

export default LoginForm
