import styled, { css } from 'styled-components'

import { red, lightRed, darkRed, yellow, white, transBlackDark, transBlackLight, transWhite } from '../_theme/colors'
import { transitions, radiusRound } from '../_theme/units'
import { xs } from '../_theme/spacers'

export const StyledSelectBox = styled.select`
  border: 2px solid ${transWhite};
  background: ${transBlackLight};
  color: ${white};
  padding: ${xs};
  transition: ${transitions.hover};
  border-radius: ${radiusRound};
  display: block;
  width: 100%;
  height: 47px;

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

export const Option = styled.option`
  position: relative;
`
