import React, { Component } from 'react'
import { func, bool } from 'prop-types'

import isEmailAddress from '../../services/validation/isEmailAddress'
import { validationMessages } from '../../config/systemMessages'
import Form from '../Form'
import FormControls from '../FormControls'
import TextInput from '../TextInput'
import SubmitButton from '../SubmitButton'

/** Validates and has a submitted state. Uses: Form, FormControls, TextInput, SubmitButton */
class ForgottenPasswordForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fields: {
        email: ''
      },
      errors: {},
      submitted: false
    }
  }

  handleInputChange (evt) {
    const fields = this.state.fields
    fields[evt.target.name] = evt.target.value
    this.setState({fields})
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

  validate ({email}) {
    const errors = {}

    if (!email) {
      errors.email = validationMessages.email.required
    } else if (!isEmailAddress(email)) {
      errors.email = validationMessages.email.invalid
    }

    this.setState({errors})
    const formIsValid = Object.getOwnPropertyNames(errors).length === 0
    return formIsValid
  }

  render() {
    const { email, errors, submitted} = this.state
    const { focus } = this.props
    const Controls = (
        <FormControls>
          <SubmitButton submitting={submitted}>Reset password</SubmitButton>
        </FormControls>
      )
    return (
      <Form submitting={submitted} reqKey short title="Forgotten Password?" controls={Controls} onSubmit={(e) => this.handleFormSubmit(e)}>
        <TextInput
          htmlId="password-email"
          name="email"
          label="Email address"
          type="email"
          placeholder="user@domain.com"
          value={email}
          onChange={(e) => this.handleInputChange(e)}
          required
          error={errors.email}
          autoFocus={focus}
        />

      </Form>
    )
  }
}

ForgottenPasswordForm.propTypes = {
  /** Function to run when form submits */
  onSubmit: func.isRequired,
  /** AutoFocus on first input */
  focus: bool
}

ForgottenPasswordForm.defaultProps = {
  focus: false
}

export default ForgottenPasswordForm
