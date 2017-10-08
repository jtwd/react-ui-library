import spacers from './spacers'
import { trans, alert, confirm, primary, secondary } from './palette'

export const siteMaxWidth = '100%'
export const textMaxWidth = '750px'
export const shortMaxWidth = '550px'
export const baseLineHeight = 1.5
export const lineHeightTight = 1.25
export const radiusRound = spacers.xxs
export const radiusCircle = '50%'
export const textShadow = `2px 2px 2px ${trans(4)}`
export const transitions = {
  hover: 'ease-in-out .33s',
  fadeIn: 'ease-in .5s',
  fadeOut: 'ease-out .5s',
  drawOut: 'max-height .5s .2s ease-out, opacity .7s ease-out, border-width .2s .7s',
  drawIn: 'border-width .25s linear, max-height 1s ease-in .25s, opacity .33s ease'
}
export const primaryNormal = 400
export const primaryBold = 700
export const borderShadow = `0 2px 2px ${trans(1)}`
export const borderShadowRaised = `0 6px 6px ${trans(2)}`
export const borderLine = {
  default: `2px solid rgba(255, 255, 255, 0.05)`,
  primary: `2px solid ${primary('trans')}`,
  secondary: `2px solid ${secondary('trans')}`,
  danger: `2px solid ${alert('dark')}`,
  success: `2px solid ${confirm('dark')}`
}
export const gutters = {
  'sm': spacers.xxs,
  'md': spacers.xs,
  'lg': spacers.sm
}
export const headingLevelPropType = [0, 1, 2, 3, 4, '1', '2', '3', '4']
