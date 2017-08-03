import React from 'react'
import { node, bool } from 'prop-types'

import { PanelWrapper, Body, Header, Footer } from './Panel.styles'

function Panel ({header, footer, footerRight, children, primary, secondary, danger, ...props}) {
  return (
    <PanelWrapper danger={danger} primary={primary} secondary={secondary} collapse {...props}>
      {header && (
        <Header danger={danger} primary={primary} secondary={secondary}>{header}</Header>
      )}
      <Body collapse flex={1}>
        {children}
      </Body>
      {footer && (
        <Footer danger={danger} primary={primary} secondary={secondary} right={footerRight}>{footer}</Footer>
      )}
    </PanelWrapper>
  )
}

Panel.propTypes = {
  primary: bool,
  secondary: bool,
  danger: bool,
  /** Header content */
  header: node,
  /** Footer content */
  footer: node,
  /** Footer right align */
  footerRight: bool,
  /** Panel content */
  children: node
}

Panel.defaultProps = {
  primary: false,
  secondary: false,
  danger: false,
  header: null,
  footer: null,
  footerRight: false,
  children: null
}

export default Panel
