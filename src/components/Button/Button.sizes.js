import spacers from '../_theme/spacers'
import fontSizes from '../_theme/fontSizes'

const sizes = {
  default: `
    margin: 0 ${spacers.xxs} ${spacers.md};
    padding: 0.66rem ${spacers.md};
    font-size: ${fontSizes.md};
  `,
  lg: `
    margin: 0 ${spacers.xs} ${spacers.md};
    padding: ${spacers.lg} ${spacers.xl};
    font-size: ${fontSizes.lg};
  `,
  sm: `
    margin: 0 ${spacers.xxs} ${spacers.sm};
    padding: .33rem ${spacers.sm};
    font-size: ${fontSizes.sm};
  `,
  iconOnly: `
    padding: 0.38rem ${spacers.sm}; 
  `,
  iconOnlySm: `
    padding: ${spacers.xxs} ${spacers.xxs};
  `,
  iconOnlyLg: `
    padding: .85rem ${spacers.md};
  `
}

export default sizes
