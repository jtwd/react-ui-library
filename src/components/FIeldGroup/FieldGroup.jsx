import React from 'react'
import {node, bool, arrayOf, number} from 'prop-types'
import styled from 'styled-components'

import Aligner from '../Aligner'

const StyledAligner = styled(Aligner)`
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
`

function FieldGroup ({children, center, ratio, ...props}) {
  return (
    <StyledAligner center={center} ratio={ratio} gutter="sm" {...props}>
      {children}
    </StyledAligner>
  )
}

FieldGroup.propTypes = {
  /** Fields to display within the field group */
  children: node.isRequired,
  center: bool,
  ratio: arrayOf(number)
}

FieldGroup.defaultProps = {
  center: false,
  ratio: [0, 0, 0]
}

export default FieldGroup
