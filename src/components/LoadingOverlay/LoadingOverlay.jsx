import React from 'react'
import {string, bool} from 'prop-types'
import styled from 'styled-components'

import Loading from '../Loading'
import Aligner from '../Aligner'
import {trans, primary} from "../_theme/palette"
import {transitions} from "../_theme/units"
import spacers from "../_theme/spacers"

const Overlay = styled(Aligner)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${trans()};
  z-index: -1;
  overflow: hidden;
  transition: opacity ${transitions.fadeIn};
  opacity: 0;
  cursor: wait;
  
  ${props => props.active && `
    opacity: 1;
    z-index: 200;
  `}
`

const Animation = styled(Loading)`
  margin-bottom: ${spacers.md};
`

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
  color: string
}

LoadingOverlay.defaultProps = {
  active: false,
  color: primary()
}

export default LoadingOverlay