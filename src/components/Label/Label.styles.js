import styled from 'styled-components'

import { alert } from '../_theme/palette'
import pseudo from '../_theme/mixins/pseudo'
import { getTheme } from '../_theme/utils'

const { fontSizes, spacing, fonts } = getTheme()

export const Label = styled.label`
  padding: ${spacing.xxs};
  display: block;
`

console.log(fontSizes)

export const RequiredSymbol = styled.span`
  &::before {
    ${pseudo('inline-block', 'relative', '*')}
    color: ${alert('light')};
    font-size: ${fontSizes.lg};
    line-height: 1;
    font-weight: ${fonts.primary.bold};
    padding-right: ${spacing.xxs};
  }
`
