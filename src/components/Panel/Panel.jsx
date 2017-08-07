import React from 'react'
import { node, bool } from 'prop-types'

import { PanelWrapper, Body, Header, Footer } from './Panel.styles'

/** Reusable Panel with optional Header and Footer and Types of Primary, Secondary, Danger and Success */
function Panel ({header, footer, footerRight, children, primary, secondary, danger, success, ...props}) {
  return (
    <PanelWrapper danger={danger} success={success} primary={primary} secondary={secondary} collapse {...props}>
      {header && (
        <Header danger={danger} success={success} primary={primary} secondary={secondary}>{header}</Header>
      )}
      <Body className="Panel-body" collapse>
        {children}
      </Body>
      {footer && (
        <Footer danger={danger} success={success} primary={primary} secondary={secondary} right={footerRight}>{footer}</Footer>
      )}
    </PanelWrapper>
  )
}

Panel.propTypes = {
  /** Type of panel */
  primary: bool,
  /** Type of panel */
  secondary: bool,
  /** Type of panel */
  danger: bool,
  /** Type of panel */
  success: bool,
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
  success: false,
  header: null,
  footer: null,
  footerRight: false,
  children: null
}

export default Panel
