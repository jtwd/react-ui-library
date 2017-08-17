import styled from 'styled-components'

import { transBlack, transBlackLight, transWhiteDark, yellow, white, darkYellow } from "../_theme/colors"
import { radiusRound, transitions } from "../_theme/units"
import { xxs, xs } from "../_theme/spacers"
import trimChildren from '../_theme/mixins/trimChildren'

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
  margin-right: ${xs};
  margin-left: ${xxs};
  top: .33rem;
`

export const StyledCheckbox = styled.input`
  visibility: hidden;
  position: absolute;
`
