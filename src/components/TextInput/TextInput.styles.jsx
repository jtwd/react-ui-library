import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { getInputStyles, fieldSizes } from "../_theme/forms"
import { alert } from '../_theme/palette'
import { xxs, xs, md, lg } from '../_theme/spacers'
import Message from '../Message'
import Icon from '../Icon'

const Error = styled(Message)`
  color: ${alert('light')};
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  box-shadow: none;
  &:hover {
    box-shadow: none;
  }
  
  ${props => props.active && `
    max-height: 100px;
  `}
  
  > div {
    padding: ${xxs} 0 ${xxs} ${lg};
    
    > i {
      margin-right: ${xxs};
      position: absolute;
      top: ${xs};
      left: ${xxs};
    }
  }
`

export function ErrorMsg({message}) {
  return (
    <Error active={(message)}>
      <Icon icon="exclamation" small />
      {message}
    </Error>
  )
}

ErrorMsg.propTypes = {
  message: string
}

ErrorMsg.defaultProps = {
  message: null
}

export const Field = styled.div`
  position: relative;
  margin-bottom: ${md};
  
  ${props => props.size !== 'default' && `
    max-width: ${fieldSizes[props.size]};
  `}
`

export const Input = styled.input`
  ${props => getInputStyles(props.error)}
`
