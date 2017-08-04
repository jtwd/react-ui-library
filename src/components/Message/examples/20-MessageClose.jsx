import React from 'react'

import Message from '../Message'
import P from '../../P'

/** Closing Message (onClose) */
export default function MessageTypes () {
  return (
    <div>
      <Message onClose={() => {}}>Default message content</Message>
      <Message onClose={() => {}} header="Default message title">
        <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eveniet laborum minima perspiciatis quaerat voluptatibus? Aspernatur atque dolore ex fugiat, ipsa laboriosam necessitatibus odit perspiciatis possimus, ratione repellat saepe veniam.</P>
      </Message>
    </div>
  )
}
