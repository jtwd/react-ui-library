import styled from 'styled-components'
import { xl, md, sm } from '../../theme/spacers'
import { transWhite } from '../../theme/colors'
import { fsHuge } from "../../theme/fontSizes"

export const Header = styled.header`
  margin-bottom: ${xl};
  border-bottom: 1px solid ${transWhite};
`

export const Title = styled.h1`
  font-size: ${fsHuge};
  margin: 0 0 ${md};
  small {
    font-size: 75%;
    color: ${transWhite};
    display: inline-block;
    padding-left: ${sm};
  }
`