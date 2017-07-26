import React from 'react'
import { oneOf, node } from 'prop-types'
import { H2, H3, H4, H5 } from './Heading.styles'

/** Simple shell for using headings. Level 1 is a H2, level 2 a H3 and so on. H1 is reserved for the PageHeader component */
function Heading({level, children}) {
  if (!children) return null
  switch(level) {
    case 1:
      return <H2>{children}</H2>
    case 2:
      return <H3>{children}</H3>
    case 3:
      return <H4>{children}</H4>
    case 4:
      return <H5>{children}</H5>
  }
}

Heading.propTypes = {
  /** Level of heading (1-4) */
  level: oneOf([1, 2, 3, 4]),
  children: node
}

Heading.defaultProps = {
  level: 1,
  children: null
}

export default Heading
