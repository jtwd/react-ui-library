import { xxs, xs, sm, md, lg, xl } from '../../theme/spacers'
import { fsSm, fsLg, fsMd } from '../../theme/fontSizes'

const sizes = {
  default: `
    margin: 0 ${xs} ${md};
    padding: ${sm} ${lg};
    font-size: ${fsMd};
  `,
  sm: `
    margin: 0 ${xxs} ${md};
    padding: ${xs} ${md};
    font-size: ${fsSm};
  `,
  lg: `
    margin: 0 ${sm} ${lg};
    padding: ${md} ${xl};
    font-size: ${fsLg};
  `,
  iconOnly: `
    padding: ${sm} ${md}; 
  `,
  iconOnlySm: `
    padding: ${xs} ${xxs};
  `,
  iconOnlyLg: `
    padding: ${md} ${lg};
  `
}

export default sizes
