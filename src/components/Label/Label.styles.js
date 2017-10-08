import styled from 'styled-components'

import spacers from '../_theme/spacers'
import { alert } from '../_theme/palette'
import { primaryBold } from '../_theme/units'
import fontSizes from "../_theme/fontSizes"
import pseudo from '../_theme/mixins/pseudo'

export const Label = styled.label`
  padding: ${spacers.xxs};
  display: block;
`

export const RequiredSymbol = styled.span`
  &::before {
    ${pseudo('inline-block', 'relative', '*')}
    color: ${alert('light')};
    font-size: ${fontSizes.lg};
    line-height: 1;
    font-weight: ${primaryBold};
    padding-right: ${spacers.xxs};
  }
`
