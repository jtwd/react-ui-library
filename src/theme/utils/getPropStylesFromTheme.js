/**
 * Returns a style string from a theme object based on props passed into a react component
 * @param {object} themeVars - A React Components theme object
 * @param {string} param - The prop identifier
 * @param {string} val - Value of the prop identifier - 'default'
 * @returns {string} - A style string for styled-components
 */
function getPropStylesFromTheme(themeVars, param, val = 'default') {
  if (!themeVars || !themeVars[param] || !themeVars[param][val]) return null
  return themeVars[param][val]
}

export default getPropStylesFromTheme
