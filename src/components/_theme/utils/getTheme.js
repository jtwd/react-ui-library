import themes, { THEME_DEFAULT } from '../themes/index'

function getTheme(themeSelector = null, selectedTheme = THEME_DEFAULT, themesObj = themes) {
  return (themeSelector) ? themesObj[selectedTheme][themeSelector] : themesObj[selectedTheme]
}

export default getTheme