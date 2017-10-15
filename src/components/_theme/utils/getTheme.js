import themes from '../themes/index'
import config from '../config'

function getTheme(themeSelector = null, selectedTheme = config.theme, themesObj = themes) {
  return (themeSelector) ? themesObj[selectedTheme][themeSelector] : themesObj[selectedTheme]
}

export default getTheme