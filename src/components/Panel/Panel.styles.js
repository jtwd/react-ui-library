import styled from 'styled-components'

import Wrapper from '../Wrapper'
import { md, sm, xs, xxs } from '../_theme/spacers'
import { radiusRound, primaryBold } from '../_theme/units'
import boxShadowAnimation from '../_theme/mixins/boxShadowAnimation'
import getPropStylesFromTheme from '../_theme/utils/getPropStylesFromTheme'
import {panel, header, footer} from './Panel.types'

const tm = {
  panel,
  header,
  footer
}

const headFootStyles = `
  padding: ${xs} ${md};
  
  > * {
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const PanelWrapper = styled(Wrapper)`
  ${props => !props.danger && !props.primary && !props.secondary && getPropStylesFromTheme(tm, 'panel')}
  ${props => props.danger && getPropStylesFromTheme(tm, 'panel', 'danger')}
  ${props => props.primary && getPropStylesFromTheme(tm, 'panel', 'primary')}
  ${props => props.secondary && getPropStylesFromTheme(tm, 'panel', 'secondary')}
  margin-bottom: ${md};
  border-radius: ${radiusRound};
  position: relative;
  ${boxShadowAnimation('hover')}
  
  > Header {
    ${props => !props.danger && !props.primary && !props.secondary && getPropStylesFromTheme(tm, 'header')}
    ${props => props.danger && getPropStylesFromTheme(tm, 'header', 'danger')}
    ${props => props.primary && getPropStylesFromTheme(tm, 'header', 'primary')}
    ${props => props.secondary && getPropStylesFromTheme(tm, 'header', 'secondary')}
  }
`

export const Body = styled.div`
  padding: ${sm} ${md};
`

export const Header = styled.div`
  ${props => !props.danger && !props.primary && !props.secondary && getPropStylesFromTheme(tm, 'header')}
  ${props => props.danger && getPropStylesFromTheme(tm, 'header', 'danger')}
  ${props => props.primary && getPropStylesFromTheme(tm, 'header', 'primary')}
  ${props => props.secondary && getPropStylesFromTheme(tm, 'header', 'secondary')}
  ${headFootStyles};
  font-weight: ${primaryBold};
  margin-bottom: ${xxs};
  border-radius: ${radiusRound} ${radiusRound} 0 0;
`

export const Footer = styled.div`
  ${props => !props.danger && !props.primary && !props.secondary && getPropStylesFromTheme(tm, 'footer')}
  ${props => props.danger && getPropStylesFromTheme(tm, 'footer', 'danger')}
  ${props => props.primary && getPropStylesFromTheme(tm, 'footer', 'primary')}
  ${props => props.secondary && getPropStylesFromTheme(tm, 'footer', 'secondary')}
  ${headFootStyles};
  margin-top: ${xxs};
  border-radius: 0 0 ${radiusRound} ${radiusRound};
  
  ${props => props.right && `
    text-align: right;
  `}
`
