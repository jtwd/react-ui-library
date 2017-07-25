import React from 'react'
import styled from 'styled-components'
import { bool, node, string } from 'prop-types'
import { radiusRound, transTextHover, primaryNormal, lineHeightTight } from '../../theme/units'
import trimChildren from '../../theme/mixins/trimChildren'
import getPropStylesFromTheme from '../../theme/utils/getPropStylesFromTheme'
import getIcon from '../../theme/utils/utils.icons'
import types from './Button.types'
import sizes from './Button.sizes'
import ButtonIcon from './ButtonIcon'

const tm = {
  borderRadius: radiusRound,
  transition: transTextHover,
  weight: primaryNormal,
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
  min-width: 3rem;
  vertical-align: middle;

  ${props => !props.large && !props.small && getPropStylesFromTheme(tm, 'sizes')}
  
  ${props => props.small && getPropStylesFromTheme(tm, 'sizes', 'sm')}
   
  ${props => props.large && getPropStylesFromTheme(tm, 'sizes', 'lg')}
  
  ${props => !props.large && !props.small && props.iconOnly && getPropStylesFromTheme(tm, 'sizes', 'iconOnly')}
  
  ${props => props.small && props.iconOnly && getPropStylesFromTheme(tm, 'sizes', 'iconOnlySm')}
   
  ${props => props.large && props.iconOnly && getPropStylesFromTheme(tm, 'sizes', 'iconOnlyLg')}
   
  ${props => !props.primary && !props.secondary && getPropStylesFromTheme(tm, 'types', 'default')}
   
  ${props => props.primary && getPropStylesFromTheme(tm, 'types', 'primary')}
   
  ${props => props.secondary && getPropStylesFromTheme(tm, 'types', 'secondary')}
    
  ${trimChildren('hor')};
`

function Button({ primary, secondary, large, small, icon, children }) {
  const iconOnly = (children === null)
  const validIcon = (getIcon(icon) !== null)

  if(iconOnly && !validIcon) return null // don't show if there is no valid contents
  return (
    <StyledButton primary={primary} secondary={secondary} large={large} small={small} iconOnly={iconOnly}>
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
  large: false,
  small: false,
  icon: '',
  children: null
}

export default Button
