import React from 'react'
import { string, bool } from 'prop-types'
import styled from 'styled-components'
import { ifProp, switchProp } from 'styled-tools'

import Icon from '../Icon'
import { themeProps, mapProp } from '../_theme/utils'
import theme from './Button.theme'

const t = themeProps(theme)

const StyledSpan = styled.span`
  left: ${ifProp({ iconOnly: true }, 
          switchProp('uiSize', mapProp('iconOnlyLeft', t.uiSize)), 
          switchProp('uiSize', mapProp('iconLeft', t.uiSize))
        )};
  top: ${ifProp({ iconOnly: true }, 
          switchProp('uiSize', mapProp('iconOnlyTop', t.uiSize)), 
          switchProp('uiSize', mapProp('iconTop', t.uiSize))
        )};
  margin: ${ifProp({ iconOnly: true }, 
            '0', 
            switchProp('uiSize', mapProp('iconMargin', t.uiSize))
          )};
          
  display: inline-block;
  position: relative;
  vertical-align: middle;
`

const StyledIcon = ({iconOnly, uiStyle, uiSize, icon, ...props}) =>
  <StyledSpan iconOnly={iconOnly} uiSize={uiSize} uiStyle={uiStyle}>
    <Icon icon={icon} {...props} />
  </StyledSpan>

StyledIcon.propTypes = {
  icon: string.isRequired,
  uiStyle: string,
  uiSize: string,
  iconOnly: bool
}

StyledIcon.defaultProps = {
  iconOnly: false,
  uiStyle: 'default',
  uiSize: 'default'
}

const ButtonIcon = ({icon, iconOnly, large, small}) =>
  <StyledIcon icon={icon} iconOnly={iconOnly} large={large} small={small} />

ButtonIcon.propTypes = {
  icon: string.isRequired,
  iconOnly: bool,
  large: bool,
  small: bool
}

ButtonIcon.defaultProps = {
  iconOnly: false,
  large: false,
  small: false
}

export default ButtonIcon
