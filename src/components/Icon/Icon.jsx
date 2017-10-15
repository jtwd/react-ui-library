import React from 'react'
import styled from 'styled-components'
import {string, bool } from 'prop-types'

import { getIcon, getPropStylesFromTheme } from '../_theme/utils'
import sizes from './Icon.sizes'

const tm = {
  sizes
}

const StyledIcon = styled.i`
  display: inline-block;
  
  > svg {
    display: block;
    width: 100%;
    height: auto;
  }
  
  ${props => !props.large && !props.small && getPropStylesFromTheme(tm, 'sizes', 'default')}

  ${props => props.small && getPropStylesFromTheme(tm, 'sizes', 'sm')}

  ${props => props.large && getPropStylesFromTheme(tm, 'sizes', 'lg')}
`

/** Icon component - icons are from 'React icons' and are defined in the theme - icons.js */
function Icon({icon, large, small}) {
  const myIcon = getIcon(icon)
  return <StyledIcon large={large} small={small}>{myIcon}</StyledIcon>
}

Icon.propTypes = {
  /** Name of icon to be displayed */
  icon: string.isRequired,
  /** Icon size */
  large: bool,
  /** Icon size */
  small: bool
}

Icon.defaultProps = {
  icon: '',
  large: false,
  small: false
}

export default Icon
