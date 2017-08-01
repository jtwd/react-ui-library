import React, { Component } from 'react'

import Wrapper from '../Wrapper'
import Panel from '../Panel'
import TextInput from '../TextInput'
import Button from '../Button'

class ForgottenPasswordForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      error: null,
      submitted: false
    }
  }
  onChange (evt) {
    let email = this.state.email;
    email = evt.target.value;
    this.setState({email});
  }
  render() {
    const { email, error} = this.state
    const SubmitButton = <Button small secondary>Reset password</Button>
    return (
      <Wrapper short collapse>
        <Panel header="Forgotten Password?" footer={SubmitButton} footerRight>
          <TextInput
            htmlId="password-email"
            name="email"
            label="Email address"
            type="email"
            placeholder="user@domain.com"
            value={email}
            onChange={(e) => this.onChange(e)}
            required
            error={error}
          />
        </Panel>
      </Wrapper>
    )
  }
}

export default ForgottenPasswordForm