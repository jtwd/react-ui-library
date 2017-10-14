import styled from 'styled-components'

import { fore } from '../_theme/palette'
import fontSizes from '../_theme/fontSizes'
import spacers from '../_theme/spacers'
import trimChildren from '../_theme/mixins/trimChildren'

const commonStyles = `
  color: ${fore()};
  ${trimChildren('ver')} 
`

export const H2 = styled.h2`
  margin: ${spacers.md} 0;
  ${commonStyles}
  font-size: ${fontSizes.xxl};
  ${props => props.collapse && `
    margin-top: 0;
    margin-bottom: 0;
  `} 
`

export const H3 = styled.h3`
  margin: ${spacers.sm} 0;
  ${commonStyles}
  font-size: ${fontSizes.xl};
  ${props => props.collapse && `
    margin-top: 0;
    margin-bottom: 0;
  `}
`

export const H4 = styled.h4`
  margin: ${spacers.sm} 0;
  ${commonStyles}
  font-size: ${fontSizes.lg};
  ${props => props.collapse && `
    margin-top: 0;
    margin-bottom: 0;
  `} 
`

export const H5 = styled.h5`
  margin: ${spacers.xs} 0;
  ${commonStyles}
  font-size: ${fontSizes.md};
  ${props => props.collapse && `
    margin-top: 0;
    margin-bottom: 0;
  `} 
`
