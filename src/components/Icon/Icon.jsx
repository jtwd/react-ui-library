import React from 'react'
import styled from 'styled-components'
import { switchProp } from 'styled-tools'
import {string, oneOf } from 'prop-types'

import { getIcon, themeProps, mapProp } from '../_theme/utils'
import theme from './Icon.theme'

const t = themeProps(theme)

const StyledIcon = styled.i`
  width: ${switchProp('uiSize', mapProp('width', t.uiSize))};
  display: inline-block;
  
  > svg {
    display: block;
    width: 100%;
    height: auto;
  }
`

/** Icon component - icons are from 'React icons' and are defined in the theme - icons.js */
function Icon({icon, uiSize}) {
  const myIcon = getIcon(icon)
  return <StyledIcon uiSize={uiSize}>{myIcon}</StyledIcon>
}

Icon.propTypes = {
  /** Name of icon to be displayed */
  icon: string.isRequired,
  /** Icon size */
  uiSize: oneOf(['small', 'large', 'default'])
}

Icon.defaultProps = {
  icon: '',
  uiSize: 'default'
}

export default Icon
