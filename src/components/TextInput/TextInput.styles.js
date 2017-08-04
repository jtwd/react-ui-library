import styled, { css } from 'styled-components'

import { red, lightRed, yellow, white, transBlackDark, transBlackLight } from '../_theme/colors'
import { transTextHover, radiusRound } from '../_theme/units'
import { xxs, xs, md } from '../_theme/spacers'

export const Error = styled.div`
  color: ${lightRed};
  padding-top: ${xxs};
  
  > i {
    position: relative;
    top: 2px;
    left: -1px;
    margin-right: 6px;
  }
`

export const Field = styled.div`
  position: relative;
  margin-bottom: ${md};
`

export const Input = styled.input`
  border: 2px solid ${white};
  background: ${transBlackLight};
  color: ${white};
  padding: ${xs};
  transition: ${transTextHover};
  border-radius: ${radiusRound};
  display: block;
  width: 100%;
  
  &:focus {
    outline-color: ${yellow}
  }

  ${props =>
    props.error &&
    css`
    border-color: ${red};
  `} 
  
  &:focus {
    border-color: ${props => (props.error ? red : yellow)};
    background: ${transBlackDark};
    outline: 0;
  }
`
