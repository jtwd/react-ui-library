import React from 'react'
import { node } from 'prop-types'
import { PageHeader, Title } from './PageTitle.styles'

function PageTitle({title, children}) {
  return (
    <PageHeader>
      <Title>{title}</Title>
      {children}
    </PageHeader>
  )
}

PageTitle.propTypes = {
  /** Title content */
  title: node.isRequired,
  /** Any extra content - eg. meta data etc */
  children: node
}

PageTitle.defaultProps = {
  children: null
}

export default PageTitle