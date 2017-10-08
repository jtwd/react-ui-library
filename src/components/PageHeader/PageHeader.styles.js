import styled from 'styled-components'

import { xl, md, sm } from '../_theme/spacers'
import { trans } from '../_theme/palette'
import fontSize from "../_theme/fontSizes"

export const Header = styled.header`
  margin-bottom: ${xl};
  border-bottom: 1px solid ${trans(null, false)};
`

export const Title = styled.h1`
  font-size: ${fontSize.huge};
  margin: 0 0 ${md};
  small {
    font-size: 75%;
    color: ${trans(null, false)};
    display: inline-block;
    padding-left: ${sm};
  }
`