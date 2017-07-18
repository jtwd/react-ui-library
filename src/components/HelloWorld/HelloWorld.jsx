import React from 'react'
import { string } from 'prop-types'

/** Component that says 'Hello' to the world */
function HelloWorld({message}) {
  return <div>Hello {message}</div>
}

HelloWorld.propTypes = {
  /** Message to be displayed */
  message: string
}

HelloWorld.defaultProps = {
  message: 'World'
}

export default HelloWorld