import styled from 'styled-components'

import { light } from '../_theme/palette'
import trimChildren from '../_theme/mixins/trimChildren'
import { getTheme } from '../_theme/utils'

const { fontSizes, spacing } = getTheme()

const commonStyles = `
  color: ${light()};
  ${trimChildren('ver')} 
`

export const H2 = styled.h2`
  margin: ${spacing.md} 0;
  ${commonStyles}
  font-size: ${fontSizes.xxl};
  ${props => props.collapse && `
    margin-top: 0;
    margin-bottom: 0;
  `} 
`

export const H3 = styled.h3`
  margin: ${spacing.sm} 0;
  ${commonStyles}
  font-size: ${fontSizes.xl};
  ${props => props.collapse && `
    margin-top: 0;
    margin-bottom: 0;
  `}
`

export const H4 = styled.h4`
  margin: ${spacing.sm} 0;
  ${commonStyles}
  font-size: ${fontSizes.lg};
  ${props => props.collapse && `
    margin-top: 0;
    margin-bottom: 0;
  `} 
`

export const H5 = styled.h5`
  margin: ${spacing.xs} 0;
  ${commonStyles}
  font-size: ${fontSizes.md};
  ${props => props.collapse && `
    margin-top: 0;
    margin-bottom: 0;
  `} 
`
