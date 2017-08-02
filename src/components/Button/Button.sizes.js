import { xxs, xs, sm, md, xl } from '../_theme/spacers'
import { fsSm, fsLg, fsMd } from '../_theme/fontSizes'

const sizes = {
  default: `
    margin: 0 ${xxs} ${md};
    padding: 0.66rem ${md};
    font-size: ${fsMd};
  `,
  lg: `
    margin: 0 ${xs} ${md};
    padding: 1.25rem ${xl};
    font-size: ${fsLg};
  `,
  sm: `
    margin: 0 ${xxs} ${sm};
    padding: .33rem ${sm};
    font-size: ${fsSm};
  `,
  iconOnly: `
    padding: 0.38rem ${sm}; 
  `,
  iconOnlySm: `
    padding: ${xxs} ${xxs};
  `,
  iconOnlyLg: `
    padding: ${sm} ${md};
  `
}

export default sizes
