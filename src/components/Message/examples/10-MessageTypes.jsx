import React from 'react'

import Message from '../Message'
import P from '../../P'

/** Type of Message (default, info, error, success) */
export default function MessageTypes () {
  return (
    <div>
      <div className="docs-ex-title">Default</div>
      <Message>Default message content</Message>
      <Message header="Default message title">
        <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eveniet laborum minima perspiciatis quaerat voluptatibus? Aspernatur atque dolore ex fugiat, ipsa laboriosam necessitatibus odit perspiciatis possimus, ratione repellat saepe veniam.</P>
      </Message>
      <div className="docs-ex-title">Info</div>
      <Message type="info">Info message content</Message>
      <Message type="info" header="Info message title">
        <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eveniet laborum minima perspiciatis quaerat voluptatibus? Aspernatur atque dolore ex fugiat, ipsa laboriosam necessitatibus odit perspiciatis possimus, ratione repellat saepe veniam.</P>
      </Message>
      <div className="docs-ex-title">Error</div>
      <Message type="error">Error message content</Message>
      <Message type="error" header="Error message title">
        <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eveniet laborum minima perspiciatis quaerat voluptatibus? Aspernatur atque dolore ex fugiat, ipsa laboriosam necessitatibus odit perspiciatis possimus, ratione repellat saepe veniam.</P>
      </Message>
      <div className="docs-ex-title">Success</div>
      <Message type="success">Success message content</Message>
      <Message type="success" header="Success message title">
        <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eveniet laborum minima perspiciatis quaerat voluptatibus? Aspernatur atque dolore ex fugiat, ipsa laboriosam necessitatibus odit perspiciatis possimus, ratione repellat saepe veniam.</P>
      </Message>
    </div>
  )
}
