import colors from "./colors"
import fonts from "./fonts";
import fontSizes from './fontSizes'
import screenSizes from './screenSizes'
import spacing from './spacing'
import { THEME_CONTRAST_DARK } from '../constants'

const night = {
  contrast: THEME_CONTRAST_DARK,
  colors: {
    primary: colors.yellow,
    secondary: colors.blue,
    tertiary: colors.grey,
    dark: colors.black,
    light: colors.white,
    alert: colors.red,
    confirm: colors.green
  },
  fonts: {
    primary: fonts.aaargh,
    secondary: fonts.raleway
  },
  screenSizes,
  lineHeights: {
    base: 1.5,
    tight: 1.25,
    spaced: 2
  },
  spacing,
  fontSizes,
  maxWidths: {
    site: '1600px',
    full: '100%',
    text: '76rem',
    short: '33rem'
  }
}

export default night