import { transWhiteLight, transBlackLight, transDarkRed, yellow, lightBlue } from '../_theme/colors'
import { borderLine } from "../_theme/units"

export const panel = {
  default: `
    border: ${borderLine.default};
    background: ${transWhiteLight};
  `,
  primary: `
    border: ${borderLine.primary};
    background: ${transWhiteLight};
  `,
  secondary: `
    border: ${borderLine.secondary};
    background: ${transWhiteLight};
  `,
  danger: `
    border: ${borderLine.danger};
    background: ${transDarkRed};
  `,
}
export const header = {
  default: `
    border-bottom: ${borderLine.default};
    background: ${transBlackLight};
  `,
  primary: `
    border-bottom: ${borderLine.primary};
    background: ${transBlackLight};
    color: ${yellow};
  `,
  secondary: `
    border-bottom: ${borderLine.secondary};
    background: ${transBlackLight};
    color: ${lightBlue};
  `,
  danger: `
    border-bottom: ${borderLine.danger};
    background: ${transBlackLight};
  `,
}
export const footer = {
  default: `
    border-top: ${borderLine.default};
    background: ${transBlackLight};
  `,
  primary: `
    border-top: ${borderLine.primary};
    background: ${transBlackLight};
  `,
  secondary: `
    border-top: ${borderLine.secondary};
    background: ${transBlackLight};
  `,
  danger: `
    border-top: ${borderLine.danger};
    background: ${transBlackLight};
  `
}
