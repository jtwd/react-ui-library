import React from 'react'
import { node, bool, arrayOf, number, string, oneOf } from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'

import AlignerItem from './AlignerItem'
import trimChildren from '../_theme/mixins/trimChildren'
import { xs } from "../_theme/spacers"

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${props => props.stretch && `
    align-items: stretch;
  `}
  
  ${props => props.gutter && `
    > div {
      margin: 0 ${xs};
      ${trimChildren('hor')
    }
  `}
  
`

function getAlignerContents (items, fixed, ratio, alignChildren, breakpoint) {
  let flexRatio = false
  if (ratio && items && (ratio.length === items.length)) {
    flexRatio = ratio
  }
  return items.map((item, i) => {
    let flex = flexRatio ? flexRatio[i] : 1
    if (fixed) flex = 0
    const alignSelf = alignChildren ? alignChildren[i] : null

    return (
      <AlignerItem breakpoint={breakpoint} key={`aitem_${shortid.generate()}`} flex={flex} alignSelf={alignSelf}>{item}</AlignerItem>
    )
  })
}

/** Flexbox layout helper for alignment */
function Aligner({children, breakpoint, fixed, stretch, ratio, alignChildren, gutter, ...props}) {
  const contents = (children.length) ? getAlignerContents(children, fixed, ratio, alignChildren, breakpoint) : children
  return (
    <StyledContainer stretch={stretch} gutter={gutter} {...props}>{contents}</StyledContainer>
  )
}

Aligner.propTypes = {
  /** Point at which to break to single column (default: xxs} */
  breakpoint: oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  /** Content to be aligned */
  children: node.isRequired,
  /** Align individual children, 1 value for every child */
  alignChildren: arrayOf(string),
  /** Gutter between children */
  gutter: bool,
  /** No flex on multiple items */
  fixed: bool,
  /** Stretch children to fill container */
  stretch: bool,
  /** Ratio of children widths */
  ratio: arrayOf(number)
}

Aligner.defaultProps = {
  breakpoint: 'xxs',
  fixed: false,
  alignChildren: null,
  gutter: false,
  stretch: false,
  ratio: null
}

export default Aligner
