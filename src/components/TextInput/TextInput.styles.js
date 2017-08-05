import styled, { css } from 'styled-components'

import { red, lightRed, darkRed, yellow, white, transBlackDark, transBlackLight, transWhite } from '../_theme/colors'
import { transitions, radiusRound } from '../_theme/units'
import { xxs, xs, md } from '../_theme/spacers'
import Message from '../Message'

export const Error = styled(Message)`
  color: ${lightRed};
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
    padding: ${xxs} 0 0;
    
    > i {
      margin-right: ${xxs};
      position: relative;
      top: 2px;
    }
  }
`

export const Field = styled.div`
  position: relative;
  margin-bottom: ${md};
`

export const Input = styled.input`
  border: 2px solid ${transWhite};
  background: ${transBlackLight};
  color: ${white};
  padding: ${xs};
  transition: ${transitions.hover};
  border-radius: ${radiusRound};
  display: block;
  width: 100%;

  ${props =>
    props.error &&
    css`
    border-color: ${lightRed};
  `} 
  
  &:hover {
    border-color: ${props => (props.error ? red : white)};
  }
  
  &:focus {
    border-color: ${props => (props.error ? darkRed : yellow)};
    background: ${transBlackDark};
    outline: 0;
  }
`
