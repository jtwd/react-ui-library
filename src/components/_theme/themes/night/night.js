import colors from './colors'
import fonts from './fonts'
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
  colorVariations: [
    { 'o': null },
    { 'dark': 0.08 },
    { 'light': 0.08 },
    { 'trans': 0.5 },
    { 'grayscale': true }
  ],
  fonts: {
    primary: fonts.raleway,
    secondary: fonts.aaargh
  },
  fontSizes,
  screenSizes,
  lineHeights: {
    base: 1.5,
    tight: 1.25,
    spaced: 2
  },
  spacing,
  maxWidths: {
    site: '1600px',
    full: '100%',
    text: '76rem',
    short: '33rem'
  },
  radius: {
    rounded: '0.25rem',
    circle: '50%'
  },
  transitions: {
    hover: 'ease-in-out .33s',
    fadeIn: 'ease-in .5s',
    fadeOut: 'ease-out .5s',
    drawOut: 'max-height .5s .2s ease-out, opacity .7s ease-out, border-width .2s .7s',
    drawIn: 'border-width .25s linear, max-height 1s ease-in .25s, opacity .33s ease'
  },
  shadows: {
    close: '0 2px 2px',
    raised: '0 6px 6px',
    text: '1px 1px 1px rgba(0, 0, 0, .6)'
  }
}

export default night
