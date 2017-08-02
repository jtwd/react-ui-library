import React from 'react'
import { node, bool } from 'prop-types'

import { PanelWrapper, Body, Header, Footer } from './Panel.styles'

function Panel ({header, footer, footerRight, children,  ...props}) {
  return (
    <PanelWrapper collapse {...props}>
      {header && (
        <Header>{header}</Header>
      )}
      <Body collapse flex={1}>
        {children}
      </Body>
      {footer && (
        <Footer right={footerRight}>{footer}</Footer>
      )}
    </PanelWrapper>
  )
}

Panel.propTypes = {
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
  header: null,
  footer: null,
  footerRight: false,
  children: null
}

export default Panel
