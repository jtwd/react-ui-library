import React from 'react'
import { oneOf, node, bool } from 'prop-types'

import { H2, H3, H4, H5 } from './Heading.styles'

/** Simple shell for using headings. Level 1 is a H2, level 2 a H3 and so on. H1 is reserved for the PageHeader component */
function Heading({level, children, collapse}) {
  if (!children) return null
  // Allow number strings
  switch(parseInt(level, 10)) {
    case 2:
      return <H3 collapse={collapse}>{children}</H3>
    case 3:
      return <H4 collapse={collapse}>{children}</H4>
    case 4:
      return <H5 collapse={collapse}>{children}</H5>
    default:
      return <H2 collapse={collapse}>{children}</H2>
  }
}

Heading.propTypes = {
  /** Level of heading (1-4 = h2-h5) */
  level: oneOf([1, 2, 3, 4, '1', '2', '3', '4']),
  /** Remove margin from heading */
  collapse: bool,
  /** Content of heading */
  children: node
}

Heading.defaultProps = {
  level: 1,
  children: null,
  collapse: false
}

export default Heading
