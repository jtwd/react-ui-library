import styled, { css } from 'styled-components'
import { red, yellow, lightYellow, darkGrey, black } from '../../theme/colors'
import { transTextHover, radiusRound } from '../../theme/units'
import { xs, md } from '../../theme/spacers'

export const Error = styled.div`color: ${red};`

export const Field = styled.div`
  margin-bottom: ${md};
  max-width: 480px;
`

export const Input = styled.input`
  border: 2px solid ${yellow};
  background: ${darkGrey};
  color: ${yellow};
  padding: ${xs};
  transform: ${transTextHover};
  border-radius: ${radiusRound};
  display: block;
  width: 100%;

  ${props =>
    props.error &&
    css`
    border-color: ${red};
  `} &:focus {
    border-color: ${props => (props.error ? red : lightYellow)};
    background: ${black};
    outline: 0;
  }
`
