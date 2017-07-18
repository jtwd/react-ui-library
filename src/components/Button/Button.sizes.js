import { xxs, xs, sm, md, lg, xl } from '../../theme/spacers'
import { fsSm, fsLg, fsMd } from '../../theme/fontSizes'

const sizes = {
  default: `
    margin: 0 ${xs} ${md};
    padding: ${md} ${xl};
    font-size: ${fsMd};
  `,
  sm: `
    margin: 0 ${xxs} ${md};
    padding: ${sm} ${md};
    font-size: ${fsSm};
  `,
  lg: `
    margin: 0 ${sm} ${lg};
    padding: ${lg} ${xl};
    font-size: ${fsLg};
  `,
  iconOnly: `
    padding: ${md};
  `,
  iconOnlySm: `
    padding: ${sm};
  `,
  iconOnlyLg: `
    padding: ${lg}
  `
}

export default sizes
