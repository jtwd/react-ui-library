import styled from 'styled-components'

import { xxs } from '../_theme/spacers'
import { red } from '../_theme/colors'
import { primaryBold } from '../_theme/units'
import pseudo from '../_theme/mixins/pseudo'

export const Label = styled.label`
  padding: ${xxs};
  display: block;
`

export const RequiredSymbol = styled.span`
  &::before {
    ${pseudo('inline-block', 'relative', '*')}
    color: ${red};
    font-weight: ${primaryBold};
  }
`
