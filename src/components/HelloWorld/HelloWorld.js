import React from 'react'
import { string } from 'prop-types'

function HelloWorld({message = 'World'}) {
  return <div>Hello {message}</div>
}

HelloWorld.propTypes = {
  message: string
}

export default HelloWorld