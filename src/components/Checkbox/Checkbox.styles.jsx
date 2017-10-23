import styled from 'styled-components';

import theme from './Checkbox.theme'
import { themeProps } from '../_theme/utils'
import trimChildren from '../_theme/mixins/trimChildren'

const t = themeProps(theme)

const hoverFocusStyles = `
  background: ${t.hoverBackgroundColor};
  color: ${t.hoverColor};
`;

export const StyledLabel = styled.label`
  position: relative;
  padding: ${t.padding};
  display: block;
  cursor: pointer;
  border-radius: ${t.borderRadius};
  background: ${t.backgroundColor};
  transition: ${t.transition};
  color: ${t.color};
  margin: ${t.margin};
  ${trimChildren('ver')} 
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
    color: ${t.checkedColor};
    background: ${t.checkedBackgroundColor};
    &:hover, &:focus {
      color: ${t.checkedHoverColor};
    }
  `} ${props =>
      props.checked &&
      props.focus &&
      `
    color: ${t.checkedHoverColor};
    background: ${t.checkedHoverBackgroundColor};
  `};
`

export const IconWrapper = styled.span`
  display: inline-block;
  position: absolute;
  top: ${t.iconTop};
  left: ${t.iconLeft};
`

export const StyledInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`
