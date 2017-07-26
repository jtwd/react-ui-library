import styled from 'styled-components'
import { md, sm, xs, xxs } from '../../theme/spacers'
import { transWhiteLight, transBlackLight } from '../../theme/colors'
import { radiusRound, borderLine, primaryBold } from '../../theme/units'
import boxShadowHover from '../../theme/mixins/boxShadowHover'

const headFootStyles = `
  padding: ${xs} ${xs} ${xs} ${md};
  background: ${transBlackLight};
  
  > * {
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const PanelWrapper = styled.div`
  margin-bottom: ${md};
  border-radius: ${radiusRound};
  background: ${transWhiteLight};
  position: relative;
  border: ${borderLine};
  ${boxShadowHover}
`

export const Body = styled.div`
  padding: ${sm} ${md};
`

export const Header = styled.div`
  ${headFootStyles};
  border-bottom: ${borderLine};
  font-weight: ${primaryBold};
  margin-bottom: ${xxs};
  border-radius: ${radiusRound} ${radiusRound} 0 0;
`

export const Footer = styled.div`
  ${headFootStyles};
  border-top: ${borderLine};
  margin-top: ${xxs};
  border-radius: 0 0 ${radiusRound} ${radiusRound};
  
  ${props => props.right && `
    text-align: right;
  `}
`