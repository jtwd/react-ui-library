import { getTheme } from '../_theme/utils'
import * as c from '../_theme/palette'

const { spacing, fontSizes } = getTheme()

export default {
  default: {
    headerMargin: `0 0 ${spacing.xl}`,
    borderBottom: `1px solid ${c.trans(false)}`,
    fontSize: fontSizes.huge,
    h1Margin: `0 0 ${spacing.md}`,
    color: c.light(),
    smallFontSize: '75%',
    smallColor: c.trans(false),
    smallPadding: `0 0 0 ${spacing.sm}`
  }
}
