import React from 'react'
import styled from 'styled-components'
import trimChildren from '../_theme/mixins/trimChildren'

/** Paragraph */
const StyledP = styled.p`
  ${trimChildren('ver')}
`

function P({...props}) {
  return (
    <StyledP {...props}/>
  )
}

export default P
