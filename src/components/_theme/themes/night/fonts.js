import * as c from '../constants'

export default {
  raleway: {
    name: 'Raleway',
    type: c.THEME_FONT_TYPE_GOOGLE,
    fallbacks: 'sans-serif',
    versions: [
      {
        weight: 400,
        styles: [c.THEME_FONT_STYLE_NORMAL, c.THEME_FONT_STYLE_ITALIC]
      },
      {
        weight: 700,
        styles: [c.THEME_FONT_STYLE_NORMAL, c.THEME_FONT_STYLE_ITALIC]
      }
    ],
  },
  aaargh: {
    name: 'Aaargh',
    type: c.THEME_FONT_TYPE_CUSTOM,
    fallbacks: 'sans-serif',
    fileName: 'aaargh',
    fileTypes: ['woff'],
    versions: [
      {
        weight: 400,
        styles: [c.THEME_FONT_STYLE_NORMAL, c.THEME_FONT_STYLE_ITALIC]
      }
    ]
  },
  crimson: {
    name: 'Crimson',
    type: c.THEME_FONT_TYPE_CUSTOM,
    fallbacks: 'sans-serif',
    fileName: 'crimson-roman',
    fileTypes: ['woff', 'woff2'],
    versions: [
      {
        weight: 400,
        styles: [c.THEME_FONT_STYLE_NORMAL]
      }
    ]
  }
}
