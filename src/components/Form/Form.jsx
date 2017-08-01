import React, { Component } from 'react'
import { node, func } from 'prop-types'

import Wrapper from '../Wrapper'
import Panel from '../Panel'

class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fields: {},
      errors: {},
      submitted: false
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit()
  }

  render () {
    const { title, controls, ...props } = this.props
    return (
      <Wrapper collapse short type="form" {...props} onSubmit={(e) => this.handleSubmit(e)}>
        <Panel header={title} footer={controls}>
          Form
        </Panel>
      </Wrapper>
    )
  }
}

Form.propTypes = {
  title: node.isRequired,
  controls: node.isRequired,
  onSubmit: func.isRequired
}

export default Form