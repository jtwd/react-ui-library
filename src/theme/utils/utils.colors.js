import tinycolor from 'tinycolor2'

/**
 * Returns a hex color string that has been lightened
 * @param {string} color - Hex color that is to be lightened
 * @param {number} amount - The amount as a percent to lighten the color
 * @returns {string} - Hex color
 */
export function lighten(color, amount) {
  if (!amount || amount < 0 || amount > 100) return color
  return tinycolor(color).lighten(amount).toString()
}

/**
 * Returns a hex color string that has been darkened
 * @param {string} color - Hex color that is to be lightened
 * @param {number} amount - The amount as a percent to darken the color
 * @returns {string} - Hex color
 */
export function darken(color, amount) {
  if (!amount || amount < 0 || amount > 100) return color
  return tinycolor(color).darken(amount).toString()
}
