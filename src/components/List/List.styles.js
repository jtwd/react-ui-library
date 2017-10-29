import styled from 'styled-components'

import { getTheme } from '../_theme/utils'
import P from '../P'

const spacing = getTheme('spacing')

export const Ul = styled.ul`
  position: relative;
`

export const Ol = styled.ol`
  position: relative;
`

export const Li = styled.li`
  position: relative;
  &.has-text {
    padding-bottom: ${spacing.md};
  }
`

export const StyledP = styled(P)`
  &:first-of-type {
    margin-top: 0;
  }
`