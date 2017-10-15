import { rgba } from 'polished'

import { getTheme, generateColorPalette, variationsKey } from './utils'
import * as c from './themes/constants'
import config from './config'

const variations = getTheme('colorVariations')
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

export function quarternary(variant = "o") {
  return getColor("quarternary", variant);
}

export function dark(variant = "o") {
  return getColor("dark", variant);
}

export function light(variant = "o") {
  return getColor("light", variant);
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
      return (contrast === c.THEME_CONTRAST_DARK) ? rgba(color, 0.2) : rgba(color, 0.1)
    case 2:
      return (contrast === c.THEME_CONTRAST_DARK) ? rgba(color, 0.4) : rgba(color, 0.2)
    case 3:
      return (contrast === c.THEME_CONTRAST_DARK) ? rgba(color, 0.6) : rgba(color, 0.3)
    case 4:
      return (contrast === c.THEME_CONTRAST_DARK) ? rgba(color, 0.8) : rgba(color, 0.4)
    default:
      return rgba(color, 0.5)
  }
}
