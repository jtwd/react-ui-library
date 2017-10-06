import styled from "styled-components";

import {
  transBlack,
  transBlackLight,
  transBlackDark,
  transWhiteDark,
  white
} from "../_theme/colors";
import { radiusRound, transitions } from "../_theme/units";
import { xxs, xs } from "../_theme/spacers";
import trimChildren from "../_theme/mixins/trimChildren";
import { primary } from "../_theme/palette";

const hoverFocusStyles = `
  background: ${transBlack};
  color: ${white};
`;

export const StyledLabel = styled.label`
  position: relative;
  padding: ${xxs} ${xxs} ${xxs} 2.5rem;
  display: block;
  cursor: pointer;
  border-radius: ${radiusRound};
  background: ${transBlackLight};
  transition: ${transitions.hover};
  color: ${transWhiteDark};
  margin-bottom: ${xxs};
  ${trimChildren("ver")} &:hover {
    ${hoverFocusStyles};
  }

  ${props =>
    props.focus &&
    `
    ${hoverFocusStyles}
  `} ${props =>
      props.checked &&
      `
    color: ${primary()};
    background: ${transBlack};
    &:hover, &:focus {
      color: ${primary("d")};
    }
  `} ${props =>
      props.checked &&
      props.focus &&
      `
    color: ${primary("d")};
    background: ${transBlackDark};
  `};
`;

export const IconWrapper = styled.span`
  display: inline-block;
  position: absolute;
  top: ${xxs};
  left: ${xs};
`;

export const StyledInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;
