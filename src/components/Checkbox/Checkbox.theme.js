import { getTheme } from '../_theme/utils'
import * as c from '../_theme/palette'

const { spacing, radius, transitions } = getTheme()

export default {
  default: {
    padding: `${spacing.xxs} ${spacing.xxs} ${spacing.xxs} 2.5rem`,
    borderRadius: radius.rounded,
    backgroundColor: c.trans(1),
    color: c.trans(4, false),
    hoverBackgroundColor: c.trans(),
    hoverColor: c.light(),
    checkedBackgroundColor: c.trans(),
    checkedColor: c.primary(),
    checkedHoverColor: c.primary('dark'),
    checkedHoverBackgroundColor: c.trans(4),
    transition: transitions.hover,
    margin: `0 0 ${spacing.xxs}`,
    iconTop: spacing.xxs,
    iconLeft: spacing.xs
  }
}