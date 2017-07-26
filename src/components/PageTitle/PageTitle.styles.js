import styled from 'styled-components'
import { md, sm } from '../../theme/spacers'
import { transWhite } from '../../theme/colors'
import { fsHuge } from "../../theme/fontSizes"

export const PageHeader = styled.header`
  margin-bottom: ${md};
  border-bottom: 1px solid ${transWhite};
`

export const Title = styled.h1`
  font-size: ${fsHuge};
  small {
    font-size: 75%;
    color: ${transWhite};
    display: inline-block;
    padding-left: ${sm};
  }
`