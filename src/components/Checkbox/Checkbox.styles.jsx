import styled from 'styled-components'

import { transBlack, transBlackLight, transBlackDark, transWhiteDark, yellow, white, darkYellow } from "../_theme/colors"
import { radiusRound, transitions } from "../_theme/units"
import { xxs, xs } from "../_theme/spacers"
import trimChildren from '../_theme/mixins/trimChildren'

const hoverFocusStyles = `
  background: ${transBlack};
  color: ${white};
`

export const StyledLabel = styled.label`
  position: relative;
  padding: 0 ${xxs} ${xxs};
  display: block;
  cursor: pointer;
  border-radius: ${radiusRound};
  background: ${transBlackLight};
  transition: ${transitions.hover};
  color: ${transWhiteDark};
  margin-bottom: ${xxs};
  ${trimChildren('ver')}
  
  &:hover {
    ${hoverFocusStyles}
  }
  
  ${props => props.focus && `
    ${hoverFocusStyles}
  `}
  
  ${props => props.checked && `
    color: ${yellow};
    background: ${transBlack};
    &:hover, &:focus {
      color: ${darkYellow};
    }
  `}
  ${props => props.checked && props.focus && `
    color: ${darkYellow};
    background: ${transBlackDark};
  `}
`

export const IconWrapper = styled.span`
  display: inline-block;
  position: relative;
  margin-right: ${xs};
  margin-left: ${xxs};
  top: .33rem;
`

export const StyledCheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`
