import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'

import { loadFonts, getTheme, themeProps, baseFontSizes } from './utils'
import theme from './globals.theme'

loadFonts(getTheme('fonts'))

const th = themeProps(theme)
/* eslint-disable */
injectGlobal`
  ${normalize()} /* reset browser presets */
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  *:focus {
    outline: ${th.outline};
  }

  html {
    ${baseFontSizes(th.fontSizes)}
    font-weight: ${th.fontWeight};
    line-height: ${th.lineHeight};
    background: ${th.backgroundColor};
    color: ${th.color};
    font-family: ${th.fontFamily};
  }
  
  html, body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
`
