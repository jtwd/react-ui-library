function getPropStylesFromTheme(themeVars, param, val = 'default') {
  if (!themeVars || !themeVars[param] || !themeVars[param][val]) return null
  return themeVars[param][val]
}

export default getPropStylesFromTheme
