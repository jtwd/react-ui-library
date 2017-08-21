import styled from 'styled-components'

import { getInputStyles } from "../_theme/forms"

export const StyledSelectBox = styled.select`
  ${props => getInputStyles(props.error)}
  padding-top: .468rem;
  padding-bottom: .468rem;
`

export const Option = styled.option`
  position: relative;
`
