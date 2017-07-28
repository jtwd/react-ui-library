import styled from 'styled-components'
import { md, sm, xs, xxs } from '../_theme/spacers'
import { transWhiteLight, transBlackLight } from '../_theme/colors'
import { radiusRound, borderLine, primaryBold } from '../_theme/units'
import boxShadowAnimation from '../_theme/mixins/boxShadowAnimation'

const headFootStyles = `
  padding: ${xs} ${md};
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
  ${boxShadowAnimation('hover')}
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
