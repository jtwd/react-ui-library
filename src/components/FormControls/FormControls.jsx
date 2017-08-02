import React from 'react'
import { node, oneOf } from 'prop-types'
import styled from 'styled-components'

import HBox from '../HBox'

const Controls = styled(HBox)`
  > button {
    margin-bottom: 0;
  }
`

const alignToPack = {
  right: 'end',
  left: 'start',
  center: 'center',
  ends: 'between',
  spaced: 'around'
}

/** Alignment helper for form buttons and controls */
function FormControls({children, align, ...props}) {
  return (
    <Controls pack={alignToPack[align]} {...props}>{children}</Controls>
  )
}

FormControls.propTypes = {
  children: node.isRequired,
  /** right, left, center, ends, spaced */
  align: oneOf(['right', 'left', 'center', 'ends', 'spaced'])
}

FormControls.defaultProps = {
  align: 'right'
}

export default FormControls