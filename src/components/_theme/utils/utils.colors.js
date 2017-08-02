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

export function rgba(hex, alpha = 1) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const rgbaColor = `${r}, ${g}, ${b}, ${alpha}`

  return `rgba(${rgbaColor})`
}
