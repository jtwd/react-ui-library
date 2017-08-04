import React, { Component } from 'react'
import { oneOf, node, func } from 'prop-types'
import styled from 'styled-components'

import Panel from '../Panel'
import Button from '../Button'
import Icon from '../Icon'
import {xxs} from "../_theme/spacers"

const MessagePanel = styled(Panel)`
  position: relative;
  transition: all .5s ease-out;
  max-height: 500px;
  overflow-y: auto;
  
  ${props => props.closed && `
    overflow-y: hidden;
    max-height: 0;
    border: 0 solid rgba(255,255,255,0);
    opacity: .2
  `}
  
  ${props => props.onClose && `
    > div:first-child {
      padding-right: 45px;
    }
  `}
`

const CloseButton = styled(Button)`
  position: absolute;
  top: .33rem;
  right: ${xxs};
  z-index: 10;
`

const MessageIcon = styled.span`
  position: relative;
  left: -6px;
  top: 3px;
`

class Message extends Component {
  constructor (props) {
    super(props)

    this.primary = (props.type === 'default')
    this.secondary = (props.type === 'info')
    this.danger = (props.type === 'error')
    this.success = (props.type === 'success')

    this.icons = {
      default: '',
      info: 'info',
      error: 'exclamation',
      success: 'tick'
    }

    this.state = {
      closed: false
    }
  }

  handleCloseClick () {
    this.setState({closed: true})
    this.props.onClose();
  }

  render () {
    const { onClose, children, header, type, ...props} = this.props
    const { closed } = this.state

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
        closed={closed}
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
  type: oneOf(['default', 'info', 'error', 'success']),
  header: node,
  onClose: func,
  children: node.isRequired
}

Message.defaultProps = {
  type: 'default',
  onClose: null,
  header: null
}

export default Message