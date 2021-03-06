import React from 'react'
import styled from 'styled-components'
import { bool, node, string } from 'prop-types'

import { radiusRound, transTextHover, primaryBold, lineHeightTight } from '../_theme/units'
import trimChildren from '../_theme/mixins/trimChildren'
import getPropStylesFromTheme from '../_theme/utils/getPropStylesFromTheme'
import getIcon from '../_theme/utils/utils.icons'
import boxShadowAnimation from '../_theme/mixins/boxShadowAnimation'
import types from './Button.types'
import sizes from './Button.sizes'
import ButtonIcon from './ButtonIcon'

const tm = {
  borderRadius: radiusRound,
  transition: transTextHover,
  weight: primaryBold,
  lineHeight: lineHeightTight,
  types,
  sizes
}

const StyledButton = styled.button`
  border-radius: ${tm.borderRadius};
  transition: ${tm.transition};
  font-weight: ${tm.weight};
  line-height: ${tm.lineHeight};
  border: 0;
  cursor: pointer;
  display: inline-block;
  min-height: 1rem;
  min-width: 2rem;
  vertical-align: middle;
  ${boxShadowAnimation('all')}

  ${props => !props.large && !props.small && getPropStylesFromTheme(tm, 'sizes')}
  
  ${props => props.small && getPropStylesFromTheme(tm, 'sizes', 'sm')}
   
  ${props => props.large && getPropStylesFromTheme(tm, 'sizes', 'lg')}
  
  ${props => !props.large && !props.small && props.iconOnly && getPropStylesFromTheme(tm, 'sizes', 'iconOnly')}
  
  ${props => props.small && props.iconOnly && getPropStylesFromTheme(tm, 'sizes', 'iconOnlySm')}
   
  ${props => props.large && props.iconOnly && getPropStylesFromTheme(tm, 'sizes', 'iconOnlyLg')}
   
  ${props => !props.primary && !props.secondary && getPropStylesFromTheme(tm, 'types', 'default')}
   
  ${props => props.primary && getPropStylesFromTheme(tm, 'types', 'primary')}
   
  ${props => props.secondary && getPropStylesFromTheme(tm, 'types', 'secondary')}
  
  ${props => props.danger && getPropStylesFromTheme(tm, 'types', 'danger')}
    
  ${trimChildren('hor')};
`

function Button({ primary, secondary, danger, large, small, icon, children, ...props }) {
  const iconOnly = (children === null)
  const validIcon = (getIcon(icon) !== null)

  if(iconOnly && !validIcon) return null // don't show if there is no valid contents
  return (
    <StyledButton primary={primary} secondary={secondary} danger={danger} large={large} small={small} iconOnly={iconOnly} {...props}>
      {icon && <ButtonIcon iconOnly={iconOnly} icon={icon} large={large} small={small} />}
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  /** Type of button */
  primary: bool,
  /** Type of button */
  secondary: bool,
  /** Type of button */
  danger: bool,
  /** Size of button */
  large: bool,
  /** Size of button */
  small: bool,
  /** Name of Icon */
  icon: string,
  /** Contents of button */
  children: node
}

Button.defaultProps = {
  primary: false,
  secondary: false,
  danger: false,
  large: false,
  small: false,
  icon: '',
  children: null
}

export default Button
