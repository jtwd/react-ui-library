import styled from "styled-components";

import { radiusRound, transitions } from "../_theme/units";
import spacers from "../_theme/spacers";
import trimChildren from "../_theme/mixins/trimChildren";
import { primary, trans, light } from "../_theme/palette";

const hoverFocusStyles = `
  background: ${trans()};
  color: ${light()};
`;

export const StyledLabel = styled.label`
  position: relative;
  padding: ${spacers.xxs} ${spacers.xxs} ${spacers.xxs} 2.5rem;
  display: block;
  cursor: pointer;
  border-radius: ${radiusRound};
  background: ${trans(1)};
  transition: ${transitions.hover};
  color: ${trans(4, false)};
  margin-bottom: ${spacers.xxs};
  ${trimChildren("ver")} 
  &:hover {
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
    background: ${trans()};
    &:hover, &:focus {
      color: ${primary("dark")};
    }
  `} ${props =>
      props.checked &&
      props.focus &&
      `
    color: ${primary("dark")};
    background: ${trans(4)};
  `};
`;

export const IconWrapper = styled.span`
  display: inline-block;
  position: absolute;
  top: ${spacers.xxs};
  left: ${spacers.xs};
`;

export const StyledInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;
