import React from 'react'
import {string, bool} from 'prop-types'
import styled from 'styled-components'

import Loading from '../Loading'
import {transBlack, yellow} from "../_theme/colors"

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${transBlack};
  z-index: -1;
  overflow: hidden;
  transition: opacity 0.33s ease-in;
  opacity: 0;
  
  ${props => props.active && `
    opacity: 1;
    z-index: 200;
  `}
`

const Animation = styled(Loading)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

function LoadingOverlay({active, color, ...props}) {
  return (
    <Overlay active={active} {...props}>
      <Animation color={color} size="large" />
    </Overlay>
  )
}

LoadingOverlay.propTypes = {
  active: bool,
  color: string
}

LoadingOverlay.defaultProps = {
  active: false,
  color: yellow
}

export default LoadingOverlay