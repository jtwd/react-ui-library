import React, { Component } from 'react'
import { oneOf, node, func } from 'prop-types'

import Icon from '../Icon'
import { MessagePanel, CloseButton, MessageIcon } from './Message.styles'

/** Message component for system messaging - Animates in and out. Can be closable. Uses: Panel, Button, Icon */
class Message extends Component {
  constructor (props) {
    super(props)

    // mapping panel props to message props
    this.primary = (props.type === 'default')
    this.secondary = (props.type === 'info')
    this.danger = (props.type === 'error')
    this.success = (props.type === 'success')

    // mapping message props to icons
    this.icons = {
      default: '',
      info: 'info',
      error: 'exclamation',
      success: 'tick'
    }

    this.state = {
      active: false,
      opened: false,
      closed: false
    }
  }

  componentDidMount () {
    const aniDelay = 100
    const aniDuration = 1200

    // Open message delay (set to active to trigger entry animation)
    this.enterTimeout = setTimeout(() => {
      this.setState((prevState) => Object.assign({}, prevState, {active: true}))
    }, aniDelay)

    // Delay for the duration of animation to set to open (overflow-y is set back to auto)
    this.enterAnimationTimeout = setTimeout(() => {
      this.setState((prevState) => Object.assign({}, prevState, {opened: true}))
    }, aniDuration)

  }

  componentWillUnmount () {
    // Clear entry timeouts
    if (this.enterTimeout) clearTimeout(this.enterTimeout)
    this.enterTimeout = false
    if(this.enterAnimationTimeout) clearTimeout(this.enterAnimationTimeout)
    this.enterAnimationTimeout = false
  }

  handleCloseClick () {
    const newState = {
      active: false,
      closed: true
    }
    this.setState((prevState) => Object.assign({}, prevState, newState))
    this.props.onClose();
  }

  render () {
    const { onClose, children, header, type, ...props} = this.props
    const { active } = this.state

    const IconHeader = (header) ? (
      <div>
        {type !== 'default' && <MessageIcon><Icon icon={this.icons[type]} small /></MessageIcon>}
        {header}
      </div>
    ) : null

    const IconBody = (!header) ? type !== 'default' && <MessageIcon><Icon icon={this.icons[type]} small /></MessageIcon> : null

    return (
      <MessagePanel
        header={IconHeader}
        primary={this.primary}
        secondary={this.secondary}
        danger={this.danger}
        success={this.success}
        active={active}
        onClose={onClose}
        {...props}
      >
        {IconBody}
        {children}
        {onClose && <CloseButton icon="close" small onClick={() => this.handleCloseClick()}/>}
      </MessagePanel>
    )
  }
}

Message.propTypes = {
  /** Type of message (default, info, error, success) */
  type: oneOf(['default', 'info', 'error', 'success']),
  /** Header - to go in Panels header */
  header: node,
  /** Function to call onClose - if not present, message is not closable */
  onClose: func,
  /** Message body of message */
  children: node.isRequired
}

Message.defaultProps = {
  type: 'default',
  onClose: null,
  header: null
}

export default Message