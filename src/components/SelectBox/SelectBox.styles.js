import styled from 'styled-components'

import { getInputStyles } from "../_theme/forms"
import media from '../_theme/media'

export const StyledSelectBox = styled.select`
  ${props => getInputStyles(props.error)}
  padding-top: .46rem;
  padding-bottom: .46rem;
  height: 36px;
  ${media.xs`height: 38px;`}
  ${media.lg`height: 42px;`}
  ${media.wide`height: 47px;`}
`

export const Option = styled.option`
  position: relative;
`
