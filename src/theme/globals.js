import { injectGlobal } from 'styled-components'
import normalize from './normalize'
import fonts from './fonts'
import { siteBg, siteColor } from './colors'
import { baseLineHeight, primaryNormal } from './units'
import media from './media'

const baseFontSizes = {
  base: '15px',
  xs: '16px',
  lg: '18px',
  wide: '20px'
}

/* eslint-disable */
injectGlobal`
  ${normalize} /* reset browser presets */
  /* import global fonts */
  @import url("//fonts.googleapis.com/css?family=${fonts.primary.name}:${fonts.primary.vars}");

  html {
    font-size: ${baseFontSizes.base};
    ${media.xs`font-size: ${baseFontSizes.xs};`}
    ${media.lg`font-size: ${baseFontSizes.lg};`}
    ${media.wide`font-size: ${baseFontSizes.wide};`}
    font-weight: ${primaryNormal};
    line-height: ${baseLineHeight};
  }
  
  body {
    background: ${siteBg};
    color: ${siteColor};
    font-family: '${fonts.primary.name}', ${fonts.primary.stack};
  }
  
  html, body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`
