import { xxs, xs, sm, md, xl } from '../_theme/spacers'
import fontSizes from '../_theme/fontSizes'

const sizes = {
  default: `
    margin: 0 ${xxs} ${md};
    padding: 0.66rem ${md};
    font-size: ${fontSizes.md};
  `,
  lg: `
    margin: 0 ${xs} ${md};
    padding: 1.25rem ${xl};
    font-size: ${fontSizes.lg};
  `,
  sm: `
    margin: 0 ${xxs} ${sm};
    padding: .33rem ${sm};
    font-size: ${fontSizes.sm};
  `,
  iconOnly: `
    padding: 0.38rem ${sm}; 
  `,
  iconOnlySm: `
    padding: ${xxs} ${xxs};
  `,
  iconOnlyLg: `
    padding: .85rem ${md};
  `
}

export default sizes
