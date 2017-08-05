import React from 'react'

import VBox from '../VBox'
import Wrapper from '../../Wrapper'

/** Align (stretch, top, bottom) */
function VBoxAlign () {
  return (
    <div>
      <VBox align="stretch" className="docs-eg-height3">
        <Wrapper flex={1} middle className="docs-example docs-ele1">Item 1</Wrapper>
        <Wrapper flex={1} middle className="docs-example docs-ele2">Item 2</Wrapper>
        <Wrapper flex={1} middle className="docs-example docs-ele3">Item 3</Wrapper>
      </VBox>
      <VBox align="top" className="docs-eg-height3">
        <Wrapper flex={1} className="docs-example docs-ele1">Item 1</Wrapper>
        <Wrapper flex={1} className="docs-example docs-ele2">Item 2</Wrapper>
        <Wrapper flex={1} className="docs-example docs-ele3">Item 3</Wrapper>
      </VBox>
      <VBox align="bottom" className="docs-eg-height3">
        <Wrapper flex={1} className="docs-example docs-ele1">Item 1</Wrapper>
        <Wrapper flex={1} className="docs-example docs-ele2">Item 2</Wrapper>
        <Wrapper flex={1} className="docs-example docs-ele3">Item 3</Wrapper>
      </VBox>
      <VBox align="center" className="docs-eg-height3">
        <Wrapper flex={1} className="docs-example docs-ele1">Item 1</Wrapper>
        <Wrapper flex={1} className="docs-example docs-ele2">Item 2</Wrapper>
        <Wrapper flex={1} className="docs-example docs-ele3">Item 3</Wrapper>
      </VBox>
    </div>
  )
}

export default VBoxAlign
