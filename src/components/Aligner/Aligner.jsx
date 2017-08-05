import React from 'react'
import { node, bool, arrayOf, number } from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'

import AlignerItem from './AlignerItem'

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${props => props.stretch && `
    align-items: stretch;
  `}
`

function getAlignerContents (items, fixed, ratio) {
  let flexRatio = false
  if (ratio && items && (ratio.length === items.length)) {
    flexRatio = ratio
  }
  return items.map((item, i) => {
    let flex = flexRatio ? flexRatio[i] : 1
    if (fixed) flex = 0

    return (
      <AlignerItem key={`aitem_${shortid.generate()}`} flex={flex}>{item}</AlignerItem>
    )
  })
}

/** Flexbox layout helper for alignment */
function Aligner({children, fixed, stretch, ratio, ...props}) {
  const contents = (children.length) ? getAlignerContents(children, fixed, ratio) : children
  return (
    <StyledContainer stretch={stretch} {...props}>{contents}</StyledContainer>
  )
}

Aligner.propTypes = {
  children: node.isRequired,
  fixed: bool,
  stretch: bool,
  ratio: arrayOf(number)
}

Aligner.defaultProps = {
  fixed: false,
  stretch: false,
  ratio: null
}

export default Aligner
