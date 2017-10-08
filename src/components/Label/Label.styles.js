import styled from 'styled-components'

import { xxs } from '../_theme/spacers'
import { alert } from '../_theme/palette'
import { primaryBold } from '../_theme/units'
import fontSizes from "../_theme/fontSizes"
import pseudo from '../_theme/mixins/pseudo'

export const Label = styled.label`
  padding: ${xxs};
  display: block;
`

export const RequiredSymbol = styled.span`
  &::before {
    ${pseudo('inline-block', 'relative', '*')}
    color: ${alert('light')};
    font-size: ${fontSizes.lg};
    line-height: 1;
    font-weight: ${primaryBold};
    padding-right: ${xxs};
  }
`
