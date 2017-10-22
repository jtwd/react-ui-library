import { getTheme } from '../_theme/utils'
import * as c from '../_theme/palette'

const { fontSizes, spacing, radius, lineHeights, transitions, fonts } = getTheme()

export default {
  default: {
    borderRadius: radius.rounded,
    trainstion: transitions.hover,
    fontFamily: fonts.primary.name,
    fontWeight: fonts.primary.bold,
    lineHeight: lineHeights.tight,
    boxShadow: true,
    uiSize: {
      default: {
        fontSize: fontSizes.md,
        margin: `0 ${spacing.xxs} ${spacing.md}`,
        padding: `${spacing.sm} ${spacing.md}`,
        iconOnlyPadding: `0.38rem ${spacing.sm}`,
        iconOnlyLeft: '0',
        iconOnlyTop: '2px',
        iconLeft: '-.33rem',
        iconTop: '-.25rem',
        iconMargin: '0 0 -.66rem'
      },
      small: {
        fontSize: fontSizes.sm,
        margin: `0 ${spacing.xxs} ${spacing.sm}`,
        padding: `${spacing.xs} ${spacing.sm}`,
        iconOnlyPadding: `0.42rem ${spacing.sm}`,
        iconLeft: '-.25rem',
        iconTop: '0.06rem',
        iconMargin: '-.2rem 0'
      },
      large: {
        fontSize: fontSizes.xl,
        margin: `0 ${spacing.xs} ${spacing.md}`,
        padding: `${spacing.md} ${spacing.lg}`,
        iconOnlyPadding: `.65rem ${spacing.md}`,
        iconLeft: `-${spacing.xs}`,
        iconTop: '0rem',
        iconMargin: `-.48rem 0`
      }
    },
    uiStyle: {
      default: {
        border: '0',
        color: c.light(),
        backgroundColor: c.tertiary(),
        hoverColor: c.light(),
        hoverBackgroundColor: c.tertiary('dark'),
        hoverBorder: '0'
      },
      primary: {
        border: '0',
        color: c.secondary(),
        backgroundColor: c.primary(),
        hoverColor: c.secondary('dark'),
        hoverBackgroundColor: c.primary('dark'),
        hoverBorder: '0'
      },
      secondary: {
        border: '0',
        color: c.primary(),
        backgroundColor: c.secondary(),
        hoverColor: c.primary('dark'),
        hoverBackgroundColor: c.secondary('dark'),
        hoverBorder: '0'
      },
      danger: {
        border: '0',
        color: c.light(),
        backgroundColor: c.alert(),
        hoverColor: c.light(),
        hoverBackgroundColor: c.alert('dark'),
        hoverBorder: '0'
      }
    }
  }
}
