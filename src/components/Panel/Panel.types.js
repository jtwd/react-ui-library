import { transWhiteLight, transBlackLight, transDarkRed, transDarkGreen, yellow, lightYellow, lightBlue } from '../_theme/colors'
import { borderLine } from "../_theme/units"

export const panel = {
  default: `
    border: ${borderLine.default};
    background: ${transWhiteLight};
  `,
  primary: `
    border: ${borderLine.primary};
    background: ${transWhiteLight};
    color: ${lightYellow};
  `,
  secondary: `
    border: ${borderLine.secondary};
    background: ${transWhiteLight};
    color: ${lightBlue};
  `,
  danger: `
    border: ${borderLine.danger};
    background: ${transDarkRed};
  `,
  success: `
    border: ${borderLine.success};
    background: ${transDarkGreen};
  `,
}
export const header = {
  default: `
    border-bottom: ${borderLine.default};
    background: ${transBlackLight};
  `,
  primary: `
    background: ${transBlackLight};
    color: ${yellow};
  `,
  secondary: `
    background: ${transBlackLight};
    color: ${lightBlue};
  `,
  danger: `
    background: ${transBlackLight};
  `,
  success: `
    background: ${transBlackLight};
  `,
}
export const footer = {
  default: `
    background: ${transBlackLight};
    border-top: ${borderLine.default};
  `,
  primary: `
    background: ${transBlackLight};
  `,
  secondary: `
    background: ${transBlackLight};
  `,
  danger: `
    background: ${transBlackLight};
  `,
  success: `
    background: ${transBlackLight};
  `
}
