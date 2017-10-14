import { injectGlobal } from 'styled-components'
import { rgba } from 'polished'
import normalize from './normalize'
import fonts from './fonts'
import { primary, fore, bg, trans } from './palette'
import { baseLineHeight, primaryNormal } from './units'
import media from './media'
import { baseFontSizes } from './fontSizes'

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
    background: ${bg()};
    color: ${fore()};
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

  /* Let's get this party started */
  ::-webkit-scrollbar {
      width: 12px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.6); 
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background: rgba(0,0,0,.25);
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background: ${primary('trans')};
      -webkit-box-shadow: inset 0 0 6px ${trans(3)};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${rgba(primary(), .85)};
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: ${rgba(primary(), .33)};
  }
`
