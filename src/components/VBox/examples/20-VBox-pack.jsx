import React from 'react'

import VBox from '../VBox'
import Wrapper from '../../Wrapper'

/** Pack (start, center, end, space-between, space-around) */
function VBoxPack () {
  return (
    <div>
      <VBox pack="start" className="docs-eg-height3">
        <Wrapper collapse middle className="docs-example docs-eg1">Item 1</Wrapper>
        <Wrapper collapse middle className="docs-example docs-eg2">Item 2</Wrapper>
        <Wrapper collapse middle className="docs-example docs-eg3">Item 3</Wrapper>
      </VBox>
      <VBox pack="center" className="docs-eg-height3">
        <Wrapper collapse middle className="docs-example docs-eg1">Item 1</Wrapper>
        <Wrapper collapse middle className="docs-example docs-eg2">Item 2</Wrapper>
        <Wrapper collapse middle className="docs-example docs-eg3">Item 3</Wrapper>
      </VBox>
      <VBox pack="end" className="docs-eg-height3">
        <Wrapper collapse middle className="docs-example docs-eg1">Item 1</Wrapper>
        <Wrapper collapse middle className="docs-example docs-eg2">Item 2</Wrapper>
        <Wrapper collapse middle className="docs-example docs-eg3">Item 3</Wrapper>
      </VBox>
      <VBox pack="between" className="docs-eg-height3">
        <Wrapper collapse middle className="docs-example docs-eg1">Item 1</Wrapper>
        <Wrapper collapse middle className="docs-example docs-eg2">Item 2</Wrapper>
        <Wrapper collapse middle className="docs-example docs-eg3">Item 3</Wrapper>
      </VBox>
      <VBox pack="around" className="docs-eg-height3">
        <Wrapper collapse middle className="docs-example docs-eg1">Item 1</Wrapper>
        <Wrapper collapse middle className="docs-example docs-eg2">Item 2</Wrapper>
        <Wrapper collapse middle className="docs-example docs-eg3">Item 3</Wrapper>
      </VBox>
    </div>
  )
}

export default VBoxPack
