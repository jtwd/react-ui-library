import styled from 'styled-components'

import Loading from '../Loading'
import Aligner from '../Aligner'
import { themeProps, getTheme } from '../_theme/utils'
import theme from './LoadingOverlay.theme'

const spacing = getTheme('spacing')
const t = themeProps(theme)

export const defaultColor = t.color

export const Overlay = styled(Aligner)`
  background-color: ${t.backgroundColor};
  transition: opacity ${t.transition};
  color: ${props => props.color ? props.color : t.color };
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  overflow: hidden;
  opacity: 0;
  cursor: wait;

  ${props => props.panel && `
    left: ${t.panelIndent};
    top: ${t.panelIndent};
    right: ${t.panelIndent};
    bottom: ${t.panelIndent};
    height: auto;
    border-radius: ${t.panelRadius};
  `}
  
  ${props => props.active && `
    opacity: 1;
    z-index: 200;
  `}
`

export const Animation = styled(Loading)`
  margin-bottom: ${spacing.md};
`