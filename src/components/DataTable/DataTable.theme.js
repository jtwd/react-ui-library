import { getTheme } from '../_theme/utils'
import * as c from '../_theme/palette'

const { spacing, fontSizes } = getTheme()

export default {
  default: {
    borderSpacing: '2px',
    thTextAlign: 'left',
    thPadding: `0 ${spacing.xs}`,
    sortableColor: c.primary(),
    sortSymbolAsc: 'asc',
    sortSymbolDesc: 'desc',
    sortablePadding: `0 ${spacing.md} 0 ${spacing.xs}`,
    sortSymbolRight: spacing.xxs,
    sortSymbolTop: '0',
    sortSymbolFontSize: fontSizes.sm,
    cellPadding: `${spacing.xxs} ${spacing.xs}`,
    cellBackgroundColor: c.trans()
  }
}
