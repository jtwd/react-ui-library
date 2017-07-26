import styled from 'styled-components'
import { white } from '../../theme/colors'
import { fsMd, fsLg, fsXl, fsXxl } from '../../theme/fontSizes'
import { md, sm, xs } from '../../theme/spacers'
import trimChildren from '../../theme/mixins/trimChildren'

const commonStyles = `
  color: ${white};
  ${trimChildren('ver')}
`

export const H2 = styled.h2`
  ${commonStyles}
  margin: ${md} 0;
  font-size: ${fsXxl};
`

export const H3 = styled.h3`
  ${commonStyles}
  margin: ${sm} 0;
  font-size: ${fsXl};
`

export const H4 = styled.h4`
  ${commonStyles}
  margin: ${sm} 0;
  font-size: ${fsLg};
`

export const H5 = styled.h5`
  ${commonStyles}
  font-size: ${fsMd};
  margin: ${xs} 0;
`
