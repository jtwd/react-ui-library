import styled from 'styled-components'

import spacers from '../_theme/spacers'
import { trans } from '../_theme/palette'
import { getTheme } from '../_theme/utils'

const fontSizes = getTheme('fontSizes')

export const Header = styled.header`
  margin-bottom: ${spacers.xl};
  border-bottom: 1px solid ${trans(null, false)};
`

export const Title = styled.h1`
  font-size: ${fontSizes.huge};
  margin: 0 0 ${spacers.md};
  small {
    font-size: 75%;
    color: ${trans(null, false)};
    display: inline-block;
    padding-left: ${spacers.sm};
  }
`