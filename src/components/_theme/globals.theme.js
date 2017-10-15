import * as palette from './palette'
import { getTheme } from './utils'

const fonts = getTheme('fonts')
const lineHeights = getTheme('lineHeights')

export default {
  default: {
    siteBg: palette.dark(),
    siteColor: palette.light(),
    siteFontFamily: `${fonts.primary.name}, ${fonts.primary.fallbacks}`,
    siteFontWeight: fonts.primary.versions[0].weight,
    baseFontSizes: {
      base: '15px',
      xs: '16px',
      lg: '18px',
      xxl: '20px',
      wide: '22px'
    },
    baseLineHeight: lineHeights.base
  },
  night: {
    siteColor: palette.light('dark'),
    siteFontFamily: `${fonts.secondary.name}, ${fonts.secondary.fallbacks}`,
  }
}
