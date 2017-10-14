import { rgba } from 'polished'

import generateColorPalette, { variationsKey } from './utils/generateColorPalette'
import getTheme from './utils/getTheme'
import { THEME_CONTRAST_DARK } from './themes'
import config from './config'

const variations = [{ 'o': null }, { 'dark': 0.08 }, { 'light': 0.08 }, { 'trans': 0.5 }];

const themeColors = getTheme('colors', config.theme)
const themeContrast = getTheme('contrast', config.theme)
const palette = generateColorPalette(themeColors, variations)

function getColor(color, variant, colorPalette = palette, colorVariations = variations) {
  const key = variationsKey(colorVariations)
  return colorPalette[color][key[variant]]
}

export function primary(variant = "o") {
  return getColor("primary", variant)
}

export function secondary(variant = "o") {
  return getColor("secondary", variant);
}

export function tertiary(variant = "o") {
  return getColor("tertiary", variant);
}

export function bg(variant = "o") {
  return getColor("bg", variant);
}

export function fore(variant = "o") {
  return getColor("fore", variant);
}

export function alert(variant = "o") {
  return getColor("alert", variant);
}

export function confirm(variant = "o") {
  return getColor("confirm", variant);
}

export function trans(amount, invert = true, contrast = themeContrast) {
  const color = invert ? 'black' : 'white'
  switch (amount) {
    case 1:
      return (contrast === THEME_CONTRAST_DARK) ? rgba(color, 0.2) : rgba(color, 0.1)
    case 2:
      return (contrast === THEME_CONTRAST_DARK) ? rgba(color, 0.4) : rgba(color, 0.2)
    case 3:
      return (contrast === THEME_CONTRAST_DARK) ? rgba(color, 0.6) : rgba(color, 0.3)
    case 4:
      return (contrast === THEME_CONTRAST_DARK) ? rgba(color, 0.8) : rgba(color, 0.4)
    default:
      return rgba(color, 0.5)
  }
}
