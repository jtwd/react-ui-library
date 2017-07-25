import styled, { css } from 'styled-components'
import { red, yellow, white, transBlackDark, transBlackLight } from '../../theme/colors'
import { transTextHover, radiusRound } from '../../theme/units'
import { xs, md } from '../../theme/spacers'

export const Error = styled.div`
  color: ${red};
  
  > i {
    position: relative;
    top: 3px;
  }
`

export const Field = styled.div`
  position: relative;
  margin-bottom: ${md};
`

export const Input = styled.input`
  border: 2px solid ${white};
  background: ${transBlackLight};
  color: ${white};
  padding: ${xs};
  transition: ${transTextHover};
  border-radius: ${radiusRound};
  display: block;
  width: 100%;

  ${props =>
    props.error &&
    css`
    border-color: ${red};
  `} 
  
  &:focus {
    border-color: ${props => (props.error ? red : yellow)};
    background: ${transBlackDark};
    outline: 0;
  }
`
