import config from '../config'

const themeProps = (theme, activeTheme = config.theme) =>  Object.assign({}, theme.default, theme[activeTheme])

export default themeProps