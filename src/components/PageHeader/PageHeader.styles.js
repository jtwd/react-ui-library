import styled from 'styled-components'

import { themeProps } from '../_theme/utils'
import theme from './PageHeader.theme'

const t = themeProps(theme)

export const Header = styled.header`
  margin: ${t.headerMargin};
  border-bottom: ${t.borderBottom};
`

export const Title = styled.h1`
  font-size: ${t.fontSize};
  margin: ${t.h1Margin};
  small {
    font-size: ${t.smallFontSize};
    color: ${t.smallColor};
    display: inline-block;
    padding: ${t.smallPadding};
  }
`
