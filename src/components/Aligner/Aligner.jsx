import React from 'react'
import { node, bool } from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'

// import { alignToFlex, packToFlex } from "../_theme/mixins/flexbox"
import AlignerItem from './AlignerItem'

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

function getAlignerContents (items, fixed) {
  return items.map(item => <AlignerItem key={`aitem_${shortid.generate()}`} fixed={fixed}>{item}</AlignerItem>)
}

/** Flexbox layout helper for alignment */
function Aligner({children, fixed, ...props}) {
  const contents = (children.length) ? getAlignerContents(children, fixed) : children
  return (
    <StyledContainer {...props}>{contents}</StyledContainer>
  )
}

Aligner.propTypes = {
  children: node.isRequired,
  fixed: bool
}

Aligner.defaultProps = {
  fixed: false
}

export default Aligner
