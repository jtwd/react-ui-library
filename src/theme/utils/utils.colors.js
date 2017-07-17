import tinycolor from 'tinycolor2'

export function lighten(color, amount) {
  return tinycolor(color).lighten(amount).toString()
}

export function darken(color, amount) {
  return tinycolor(color).darken(amount).toString()
}
