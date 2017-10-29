import styled from 'styled-components'

import trimChildren from '../_theme/mixins/trimChildren'
import { themeProps } from '../_theme/utils'
import theme from './Heading.theme'

const th = themeProps(theme)

export const H2 = styled.h2`
  color: ${th.color};
  font-family: ${th.fontFamily};
  font-weight: ${th.fontWeight};
  margin: ${th.h2Margin};
  font-size: ${th.h2FontSize};
  ${trimChildren('ver')}
  ${props => props.collapse && `
    margin-top: 0;
    margin-bottom: 0;
  `} 
`

export const H3 = H2.withComponent('h3').extend`
  font-size: ${th.h3FontSize};
  margin: ${th.h3Margin};
  ${props => props.collapse && `
    margin-top: 0;
    margin-bottom: 0;
  `} 
`

export const H4 = H2.withComponent('h4').extend`
  font-size: ${th.h4FontSize};
  margin: ${th.h4Margin};
  ${props => props.collapse && `
    margin-top: 0;
    margin-bottom: 0;
  `} 
`

export const H5 = H2.withComponent('h5').extend`
  font-size: ${th.h5FontSize};
  margin: ${th.h5Margin};
  ${props => props.collapse && `
    margin-top: 0;
    margin-bottom: 0;
  `} 
`

export const H6 = H2.withComponent('h6').extend`
  font-size: ${th.h6FontSize};
  margin: ${th.h6Margin};
  text-transform: ${th.h6TextTransform};
  font-weight: ${th.h6FontWeight};
  ${props => props.collapse && `
    margin-top: 0;
    margin-bottom: 0;
  `} 
`
