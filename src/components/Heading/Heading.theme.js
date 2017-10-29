import { getTheme } from '../_theme/utils'

const { fontSizes, spacing, fonts } = getTheme()

export default {
  default: {
    fontFamily: 'inherit',
    color: 'inherit',
    fontWeight: fonts.primary.bold,
    h2FontSize: fontSizes.xxl,
    h2Margin: `${spacing.md} 0`,
    h3FontSize: fontSizes.xl,
    h3Margin: `${spacing.sm} 0`,
    h4FontSize: fontSizes.lg,
    h4Margin: `${spacing.sm} 0`,
    h5FontSize: fontSizes.md,
    h5Margin: `${spacing.xs} 0`,
    h6FontSize: fontSizes.md,
    h6Margin: `${spacing.xs} 0`,
    h6TextTransform: 'uppercase',
    h6FontWeight: 'normal'
  }
}