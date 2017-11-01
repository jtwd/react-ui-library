import * as c from '../_theme/palette'
import { getTheme } from '../_theme/utils'

const { fontSizes, fonts, spacing, shadows } = getTheme()

export default {
  default: {
    color: c.alert('light'),
    textShadow: shadows.text,
    keyFontSize: fontSizes.sm,
    keyFontWieght: fonts.primary.bold,
    symbolFontSize: fontSizes.lg,
    symbolFontWeight: fonts.primary.bold,
    symbolPaddingRight: spacing.xxs
  }
}