import styled from 'styled-components'
import { xxs } from '../../theme/spacers'
import { red } from '../../theme/colors'
import { primaryBold } from '../../theme/units'
import pseudo from '../../theme/mixins/pseudo'

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
