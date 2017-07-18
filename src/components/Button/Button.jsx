import React from 'react'
import styled from 'styled-components'
import { bool, node } from 'prop-types'
import { radiusRound, transTextHover, primaryNormal, lineHeightTight } from '../../theme/units'
import { trimChildrenHorizontal } from '../../theme/utils/utils.mixins'
import getPropStylesFromTheme from '../../theme/utils/getPropStylesFromTheme'
import types from './Button.types'
import sizes from './Button.sizes'

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
  vertical-align: baseline;

  ${props => !props.large && !props.small && getPropStylesFromTheme(tm, 'sizes', 'default')} ${props =>
      props.small && getPropStylesFromTheme(tm, 'sizes', 'sm')} ${props =>
      props.large && getPropStylesFromTheme(tm, 'sizes', 'lg')} ${props =>
      !props.primary && !props.secondary && getPropStylesFromTheme(tm, 'types', 'default')} ${props =>
      props.primary && getPropStylesFromTheme(tm, 'types', 'primary')} ${props =>
      props.secondary && getPropStylesFromTheme(tm, 'types', 'secondary')} ${trimChildrenHorizontal};
`

function Button ({primary, secondary, large, small, children}) {
  return (
    <StyledButton
      primary={primary}
      secondary={secondary}
      large={large}
      small={small}
    >
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
  /** Contents of button */
  children: node
}

Button.defaultProps = {
  primary: false,
  secondary: false,
  large: false,
  small: false,
  children: null
}

export default Button
