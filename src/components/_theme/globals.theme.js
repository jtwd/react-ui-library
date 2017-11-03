import * as c from './palette'
import { getTheme } from './utils'

const { fonts, lineHeights } = getTheme()

export default {
  default: {
    backgroundColor: c.dark(),
    color: c.light(),
    fontFamily: `${fonts.primary.name}, ${fonts.primary.fallbacks}`,
    fontWeight: fonts.primary.versions[0].weight,
    fontSizes: {
      base: '14px',
      xxs: '15px',
      md: '16px',
      xxl: '18px',
      wide: '20px'
    },
    outline: `2px dotted ${c.trans(4, false)}`,
    lineHeight: lineHeights.base,
    link: {
      color: c.primary(),
      textDecoration: 'none',
      hover: {
        color: c.primary('dark'),
        textDecoration: 'none'
      }
    }
  },
  night: {
    color: c.light()
  }
}
