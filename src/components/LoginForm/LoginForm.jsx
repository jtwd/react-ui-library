import React, { Component } from 'react'
import { node, func } from 'prop-types'
import isEmailAddress from '../../services/validation/isEmailAddress'
import { validationMessages } from '../../config/systemMessages'
import Wrapper from '../Wrapper'
import Panel from '../Panel'
import TextInput from '../TextInput'
import PasswordInput from '../PasswordInput'
import Button from '../Button'

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      credentials: {
        email: '',
        password: ''
      },
      errors: {},
      submitted: false
    }
  }

  onChange (evt) {
    const credentials = this.state.credentials;
    credentials[evt.target.name] = evt.target.value;
    this.setState({credentials});
  }

  handleSubmitClick () {
    const {credentials} = this.state
    const formIsValid = this.validate(credentials)

    if(formIsValid) {
      this.props.onSubmit(credentials)
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
    const { email, password } = this.state.credentials
    const { title } = this.props

    const SubmitButton = <Button secondary small onClick={() => this.handleSubmitClick()}>Login</Button>

    return (
      <Wrapper short collapse>
        <Panel header={title} footer={SubmitButton} footerRight>
          <TextInput
            htmlId="login-email"
            name="email"
            label="Email address"
            type="email"
            placeholder="user@domain.com"
            value={email}
            onChange={(e) => this.onChange(e)}
            required
            error={errors.email}
          />

          <PasswordInput
            htmlId="login-password"
            name="password"
            label="Password"
            value={password}
            onChange={(e) => this.onChange(e)}
            maxLength={50}
            required
            error={errors.password} />
        </Panel>
      </Wrapper>
    )
  }
}

LoginForm.propTypes = {
  /** Form title - goes in the panel header */
  title: node,
  onSubmit: func.isRequired
}

LoginForm.defaultProps = {
  title: 'Login'
}

export default LoginForm
