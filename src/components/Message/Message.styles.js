import styled from 'styled-components'

import Panel from '../Panel'
import Button from '../Button'
import theme from './Message.theme'
import { themeProps } from '../_theme/utils'

const t = themeProps(theme)

export const MessagePanel = styled(Panel)`
  position: relative;
  transition: ${t.transitionOut};
  max-height: 0;
  overflow-y: hidden;
  opacity: 0;
  border-width: 0;
  
  ${props => props.active && `
    max-height: ${t.maxHeight};
    transition: ${t.transitionIn};
    opacity: 1;
    border-width: ${t.borderWidth};
  `}
  
  ${props => props.opened && `
    overflow-y: auto;
  `}
  
  ${props => props.onClose && `
    > div:first-child {
      padding-right: ${t.onClosePadding};
    }
  `}
`

export const CloseButton = styled(Button)`
  position: absolute;
  top: ${t.closeBtnTop};
  right: ${t.closeBtnRight};
  z-index: 10;
`

export const MessageIcon = styled.span`
  position: relative;
  left: ${t.iconLeft};
  top: ${t.iconTop};
`