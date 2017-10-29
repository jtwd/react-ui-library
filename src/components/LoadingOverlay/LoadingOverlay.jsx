import React from 'react'
import {string, bool} from 'prop-types'

import { Overlay, Animation, defaultColor } from './LoadingOverlay.styles'

/** Overlay with loading indication. Animates in and out. Uses: Loading, Aligner */
function LoadingOverlay({active, color, ...props}) {
  return (
    <Overlay active={active} {...props}>
      <Animation color={color} size="large" />
    </Overlay>
  )
}

LoadingOverlay.propTypes = {
  /** Active state */
  active: bool,
  /** Color of the loading component (yellow) */
  color: string,
  /** Whether overlay is within a panel */
  panel: bool
}

LoadingOverlay.defaultProps = {
  active: false,
  panel: false,
  color: defaultColor
}

export default LoadingOverlay