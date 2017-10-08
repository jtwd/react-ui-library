import styled from 'styled-components'

import Wrapper from '../Wrapper'
import spacers from '../_theme/spacers'
import { radiusRound, primaryBold } from '../_theme/units'
import boxShadowAnimation from '../_theme/mixins/boxShadowAnimation'
import getPropStylesFromTheme from '../_theme/utils/getPropStylesFromTheme'
import {panel, header, footer} from './Panel.types'
import trimChildren from '../_theme/mixins/trimChildren'

const tm = {
  panel,
  header,
  footer
}

const headFootStyles = `
  padding: ${spacers.xs} ${spacers.md};
  
  > * {
    ${trimChildren('ver')}
  }
`

export const PanelWrapper = styled(Wrapper)`
  ${props => !props.danger && !props.success && !props.primary && !props.secondary && getPropStylesFromTheme(tm, 'panel')}
  ${props => props.danger && getPropStylesFromTheme(tm, 'panel', 'danger')}
  ${props => props.success && getPropStylesFromTheme(tm, 'panel', 'success')}
  ${props => props.primary && getPropStylesFromTheme(tm, 'panel', 'primary')}
  ${props => props.secondary && getPropStylesFromTheme(tm, 'panel', 'secondary')}
  margin-bottom: ${spacers.md};
  border-radius: ${radiusRound};
  position: relative;
  ${boxShadowAnimation('hover')}
`

export const Body = styled.div`
  padding: ${spacers.sm} ${spacers.md};
`

export const Header = styled.div`
  ${props => !props.danger && !props.success && !props.primary && !props.secondary && getPropStylesFromTheme(tm, 'header')}
  ${props => props.danger && getPropStylesFromTheme(tm, 'header', 'danger')}
  ${props => props.success && getPropStylesFromTheme(tm, 'header', 'success')}
  ${props => props.primary && getPropStylesFromTheme(tm, 'header', 'primary')}
  ${props => props.secondary && getPropStylesFromTheme(tm, 'header', 'secondary')}
  ${headFootStyles};
  font-weight: ${primaryBold};
  border-radius: ${radiusRound} ${radiusRound} 0 0;
`

export const Footer = styled.div`
  ${props => !props.danger && !props.success && !props.primary && !props.secondary && getPropStylesFromTheme(tm, 'footer')}
  ${props => props.danger && getPropStylesFromTheme(tm, 'footer', 'danger')}
  ${props => props.success && getPropStylesFromTheme(tm, 'footer', 'success')}
  ${props => props.primary && getPropStylesFromTheme(tm, 'footer', 'primary')}
  ${props => props.secondary && getPropStylesFromTheme(tm, 'footer', 'secondary')}
  ${headFootStyles};
  border-radius: 0 0 ${radiusRound} ${radiusRound};
  
  ${props => props.right && `
    text-align: right;
  `}
`
