import { trans, alert, confirm, primary, secondary } from '../_theme/palette'
import { borderLine } from "../_theme/units"

export const panel = {
  default: `
    border: ${borderLine.default};
    background: ${trans(1, false)};
  `,
  primary: `
    border: ${borderLine.primary};
    background: ${trans(1, false)};
    color: ${primary('light')};
  `,
  secondary: `
    border: ${borderLine.secondary};
    background: ${trans(1, false)};
    color: ${secondary('light')};
  `,
  danger: `
    border: ${borderLine.danger};
    background: ${alert('dark')};
  `,
  success: `
    border: ${borderLine.success};
    background: ${confirm('dark')};
  `,
}
export const header = {
  default: `
    border-bottom: ${borderLine.default};
    background: ${trans(1)};
  `,
  primary: `
    background: ${trans(1)};
    color: ${primary()};
  `,
  secondary: `
    background: ${trans(1)};
    color: ${secondary('light')};
  `,
  danger: `
    background: ${trans(1)};
  `,
  success: `
    background: ${trans(1)};
  `,
}
export const footer = {
  default: `
    background: ${trans(1)};
    border-top: ${borderLine.default};
  `,
  primary: `
    background: ${trans(1)};
  `,
  secondary: `
    background: ${trans(1)};
  `,
  danger: `
    background: ${trans(1)};
  `,
  success: `
    background: ${trans(1)};
  `
}
