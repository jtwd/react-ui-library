import React, { Component } from 'react'
import { func } from 'prop-types'

import isEmailAddress from '../../services/validation/isEmailAddress'
import { validationMessages } from '../../config/systemMessages'
import Form from '../Form'
import FormControls from '../FormControls'
import TextInput from '../TextInput'
import Button from '../Button'

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
    const { email, errors} = this.state
    const Controls = (
        <FormControls>
          <Button small secondary submit>Reset password</Button>
        </FormControls>
      )
    return (
      <Form short title="Forgotten Password?" controls={Controls} onSubmit={(e) => this.handleFormSubmit(e)}>
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
        />

      </Form>
    )
  }
}

ForgottenPasswordForm.propTypes = {
  onSubmit: func.isRequired
}

export default ForgottenPasswordForm
