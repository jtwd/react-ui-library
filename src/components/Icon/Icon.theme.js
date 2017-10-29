import { getTheme } from '../_theme/utils'

const spacing = getTheme('spacing')

export default {
  default: {
    uiSize: {
      default: {
        width: spacing.lg
      },
      small: {
        width: spacing.md
      },
      large: {
        width: spacing.xl
      }
    }
  }
}
