import { xs } from './spacers'
import { darkRed, transDarkYellow, transDarkBlue } from './colors'

export const siteMaxWidth = '100%'
export const textMaxWidth = '750px'
export const shortMaxWidth = '550px'
export const baseLineHeight = 1.5

export const lineHeightTight = 1.25
export const radiusRound = xs
export const radiusCircle = '50%'
export const transTextHover = 'linear .2s'
export const primaryNormal = 400
export const primaryBold = 700
export const borderShadow = '0 2px 2px rgba(0, 0, 0, .33)'
export const borderShadowRaised = '0 6px 6px rgba(0, 0, 0, .5)'
export const borderLine = {
  default: `2px solid rgba(255, 255, 255, 0.05)`,
  primary: `2px solid ${transDarkYellow}`,
  secondary: `2px solid ${transDarkBlue}`,
  danger: `2px solid ${darkRed}`
}