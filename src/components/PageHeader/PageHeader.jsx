import React from 'react'
import { node } from 'prop-types'

import { Header, Title } from './PageHeader.styles'

/** Page Header component - For consistant styling of Page Titles (H1). Should only be used once per page */
function PageHeader({title, children}) {
  return (
    <Header>
      <Title>{title}</Title>
      {children}
    </Header>
  )
}

PageHeader.propTypes = {
  /** Title content */
  title: node.isRequired,
  /** Any extra content - eg. meta data etc */
  children: node
}

PageHeader.defaultProps = {
  children: null
}

export default PageHeader