import React from 'react'
import { node, bool, number } from 'prop-types'
import styled from 'styled-components'

import { md } from '../_theme/spacers'
import { textMaxWidth, shortMaxWidth, siteMaxWidth } from '../_theme/units'

const StyledDiv = styled.div`
  ${props => !props.collapse && `
    padding: ${md};`
  }
  
  ${props => !props.app && `
    max-width: ${siteMaxWidth}
    min-height: 100vh;
  `}
  
  ${props => props.text && `
    max-width: ${textMaxWidth};
  `}
  
  ${props => props.short && `
    max-width: ${shortMaxWidth};
  `}
  
  ${props => props.centered && `
    margin-left: auto;
    margin-right: auto;
  `}
  
  ${props => props.flex && `
    flex: ${props.flex};
  `}
  
  ${props => props.middle && `
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`

function Wrapper({ app, text, centered, middle, short, collapse, flex, children, ...props }) {
  return (
    <StyledDiv text={text} centered={centered} middle={middle} short={short} collapse={collapse} app={app} flex={flex} {...props}>
      {children}
    </StyledDiv>
  )
}

Wrapper.propTypes = {
  /** Sized appropriately for App */
  app: bool,
  /** Sized appropriately for text */
  text: bool,
  /** Short Sized  */
  short: bool,
  /** Centered wrapper */
  centered: bool,
  /** Middle aligned (vertically) wrapper */
  middle: bool,
  /** Collapsed wrapper (no padding) */
  collapse: bool,
  /** For use with HBox and VBox */
  flex: number,
  /** Contents of wrapper */
  children: node
}

Wrapper.defaultProps = {
  app: false,
  text: false,
  short: false,
  centered: false,
  middle: false,
  collapse: false,
  flex: null,
  children: null
}

export default Wrapper
