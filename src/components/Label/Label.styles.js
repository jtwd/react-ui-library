import styled from 'styled-components'

import { xxs } from '../_theme/spacers'
import { lightRed } from '../_theme/colors'
import { primaryBold } from '../_theme/units'
import { fsLg } from "../_theme/fontSizes"
import pseudo from '../_theme/mixins/pseudo'

export const Label = styled.label`
  padding: ${xxs};
  display: block;
`

export const RequiredSymbol = styled.span`
  &::before {
    ${pseudo('inline-block', 'relative', '*')}
    color: ${lightRed};
    font-size: ${fsLg};
    font-weight: ${primaryBold};
    padding-right: ${xxs};
  }
`
