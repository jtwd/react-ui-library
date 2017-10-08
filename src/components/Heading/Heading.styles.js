import styled from 'styled-components'

import { light } from '../_theme/palette'
import { fsMd, fsLg, fsXl, fsXxl } from '../_theme/fontSizes'
import { md, sm, xs } from '../_theme/spacers'
import trimChildren from '../_theme/mixins/trimChildren'

const commonStyles = `
  color: ${light()};
  ${trimChildren('ver')} 
`

export const H2 = styled.h2`
  margin: ${md} 0;
  ${commonStyles}
  font-size: ${fsXxl};
  ${props => props.collapse && `
    margin-top: 0;
    margin-bottom: 0;
  `} 
`

export const H3 = styled.h3`
  margin: ${sm} 0;
  ${commonStyles}
  font-size: ${fsXl};
  ${props => props.collapse && `
    margin-top: 0;
    margin-bottom: 0;
  `}
`

export const H4 = styled.h4`
  margin: ${sm} 0;
  ${commonStyles}
  font-size: ${fsLg};
  ${props => props.collapse && `
    margin-top: 0;
    margin-bottom: 0;
  `} 
`

export const H5 = styled.h5`
  margin: ${xs} 0;
  ${commonStyles}
  font-size: ${fsMd};
  ${props => props.collapse && `
    margin-top: 0;
    margin-bottom: 0;
  `} 
`
