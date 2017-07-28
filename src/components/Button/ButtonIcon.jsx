import React from 'react'
import { string, bool } from 'prop-types'
import styled from 'styled-components'
import { xxs, sm, md } from '../_theme/spacers'
import getPropStylesFromTheme from '../_theme/utils/getPropStylesFromTheme'
import Icon from '../Icon'

const tm = {
  iconOnly: {
    default: `left: 0`
  },
  sizes: {
    default: `
      left: -${sm};
    `,
    sm: `
      left: -${xxs};
    `,
    lg: `
      left: -${md};
    `
  }
}

const StyledSpan = styled.span`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  ${props => !props.iconOnly && !props.small && !props.large && getPropStylesFromTheme(tm, 'sizes')}
  ${props => props.iconOnly && getPropStylesFromTheme(tm, 'iconOnly')}
  ${props => !props.iconOnly && props.large && getPropStylesFromTheme(tm, 'sizes', 'lg')}
  ${props => !props.iconOnly && props.small && getPropStylesFromTheme(tm, 'sizes', 'sm')}
`

const StyledIcon = (props) =>
  <StyledSpan iconOnly={props.iconOnly} large={props.large} small={props.small}>
    <Icon icon={props.icon} {...props} />
  </StyledSpan>

StyledIcon.propTypes = {
  icon: string.isRequired,
  large: bool,
  small: bool,
  iconOnly: bool
}

StyledIcon.defaultProps = {
  iconOnly: false,
  large: false,
  small: false
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
