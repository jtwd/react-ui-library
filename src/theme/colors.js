import { lighten, darken } from './utils/utils.colors'

const shadeFactor = 8 // (0 - 100) percentage to shade alternative colors

export const black = '#272727'
export const white = '#eff1f3'

export const grey = '#696773'
export const lightGrey = lighten(grey, shadeFactor)
export const darkGrey = darken(grey, shadeFactor)

export const blue = '#009fb7'
export const lightBlue = lighten(blue, shadeFactor)
export const darkBlue = darken(blue, shadeFactor)

export const yellow = '#fed766'
export const lightYellow = lighten(yellow, shadeFactor)
export const darkYellow = darken(yellow, shadeFactor)

export const siteBg = black
export const siteColor = white

export const red = 'red'
export const green = 'green'
