import styled from 'styled-components'
import { xxs } from '../../theme/spacers'
import { red } from '../../theme/colors'
import { primaryBold } from '../../theme/units'

export const Label = styled.label`
  padding: ${xxs};
  display: block;
`

export const RequiredSymbol = styled.span`
  &:before {
    color: ${red};
    font-weight: ${primaryBold};
    display: inline-block;
    content: '*';
  }
`
