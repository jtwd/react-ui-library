import styled from 'styled-components'

import { transBlack, transBlackLight, transWhiteDark, yellow, white, darkYellow } from "../_theme/colors"
import { radiusRound, transitions } from "../_theme/units"

export const StyledLabel = styled.label`
  position: relative;
  padding: 0 .25rem .25rem;
  display: block;
  cursor: pointer;
  border-radius: ${radiusRound};
  background: ${transBlackLight};
  transition: ${transitions.hover};
  color: ${transWhiteDark};
  
  &:hover, &:focus {
    background: ${transBlack};
    color: ${white};
  }
  
  ${props => props.checked && `
    color: ${yellow};
    background: ${transBlack};
    &:hover, &:focus {
      color: ${darkYellow};
    }
  `}
`

export const IconWrapper = styled.span`
  display: inline-block;
  position: relative;
  margin-right: 0.5rem;
  top: 0.33rem;
`

export const StyledCheckbox = styled.input`
  visibility: hidden;
  position: absolute;
`
