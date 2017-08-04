import { lighten, darken, rgba } from './utils/utils.colors'

const shadeFactor = 8 // (0 - 100) percentage to shade alternative colors

export const black = '#272727'
export const transBlack = rgba('#000000', 0.5)
export const transBlackLight = rgba('#000000', 0.2)
export const transBlackDark = rgba('#000000', 0.8)
export const white = '#eff1f3'
export const transWhite = rgba('#ffffff', 0.5)
export const transWhiteLight = rgba('#ffffff', 0.075)
export const transWhiteDark = rgba('#ffffff', 0.8)

export const grey = '#696773'
export const lightGrey = lighten(grey, shadeFactor)
export const darkGrey = darken(grey, shadeFactor)

export const blue = '#009fb7'
export const lightBlue = lighten(blue, shadeFactor)
export const darkBlue = darken(blue, shadeFactor)
export const transDarkBlue = rgba(darkBlue, 0.5)

export const yellow = '#fed766'
export const lightYellow = lighten(yellow, shadeFactor)
export const darkYellow = darken(yellow, shadeFactor)
export const transDarkYellow = rgba(darkYellow, 0.5)

export const siteBg = black
export const siteColor = white

export const red = 'FireBrick'
export const lightRed = lighten(red, 20)
export const darkRed = darken(red, shadeFactor)
export const transDarkRed = rgba(darkRed, 0.5)

export const green = 'ForestGreen'
export const lightGreen = lighten(green, 20)
export const darkGreen = darken(green, shadeFactor)
export const transDarkGreen = rgba(lightGreen, 0.5)
