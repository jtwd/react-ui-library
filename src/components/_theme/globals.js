import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'

import { loadFonts, getTheme, themeProps, baseFontSizes } from './utils'
import theme from './globals.theme'

loadFonts(getTheme('fonts'))

const tp = themeProps(theme)
/* eslint-disable */
injectGlobal`
  ${normalize()} /* reset browser presets */
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    ${baseFontSizes(tp.baseFontSizes)}
    font-weight: ${tp.siteFontWeight};
    line-height: ${tp.baseLineHeight};
    background: ${tp.siteBg};
    color: ${tp.siteColor};
    font-family: ${tp.siteFontFamily};
  }
  
  html, body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
`
