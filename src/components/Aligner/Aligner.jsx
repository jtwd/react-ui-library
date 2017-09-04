import React from 'react'
import { node, bool, arrayOf, number, string, oneOf } from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'

import AlignerItem from './AlignerItem'
import trimChildren from '../_theme/mixins/trimChildren'
import { gutters } from "../_theme/units"

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
      margin: 0 ${gutters[props.gutter]};
      ${trimChildren('hor')
    }
  `}
`

function getAlignerContents (items, fixed, ratio, alignChildren) {
  let flexRatio = false
  // if ratio has the same amount of arguments as children then it can be used
  flexRatio = ratio && items && (ratio.length === items.length) && ratio

  return items.map((item, i) => {
    let flex = flexRatio ? flexRatio[i] : 1
    if (fixed) flex = 0

    let alignSelf = null
    // if alignChildren contains the same amount or arguments than there are children then assign the relevant one
    if (alignChildren && alignChildren.length >= items.length) alignSelf = alignChildren[i]

    return (
      <AlignerItem key={shortid.generate()} flex={`${flex}`} alignSelf={alignSelf}>{item}</AlignerItem>
    )
  })
}

/** Flexbox layout helper for alignment */
function Aligner({children, fixed, stretch, ratio, alignChildren, gutter, ...props}) {
  const contents = (children.length) ? getAlignerContents(children, fixed, ratio, alignChildren) : children
  return (
    <StyledContainer stretch={stretch} gutter={gutter} {...props}>{contents}</StyledContainer>
  )
}

Aligner.propTypes = {
  /** Content to be aligned */
  children: node.isRequired,
  /** Align individual children, 1 value for every child */
  alignChildren: arrayOf(string),
  /** Gutter between children */
  gutter: oneOf(Object.keys(gutters)),
  /** No flex on multiple items */
  fixed: bool,
  /** Stretch children to fill container */
  stretch: bool,
  /** Ratio of children widths */
  ratio: arrayOf(number)
}

Aligner.defaultProps = {
  fixed: false,
  alignChildren: null,
  gutter: null,
  stretch: false,
  ratio: null
}

export default Aligner
