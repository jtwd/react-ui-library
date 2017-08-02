import React from 'react'

import HBox from '../HBox'
import Wrapper from '../../Wrapper'

/** Align (stretch, top, bottom) */
function HBoxAlign () {
  return (
    <div>
      <HBox align="stretch" className="docs-eg-height2">
        <Wrapper flex={1} middle className="docs-example docs-eg1">Item 1</Wrapper>
        <Wrapper flex={1} middle className="docs-example docs-eg2">Item 2</Wrapper>
        <Wrapper flex={1} middle className="docs-example docs-eg3">Item 3</Wrapper>
      </HBox>
      <HBox align="top" className="docs-eg-height2">
        <Wrapper flex={1} className="docs-example docs-eg1">Item 1</Wrapper>
        <Wrapper flex={1} className="docs-example docs-eg2">Item 2</Wrapper>
        <Wrapper flex={1} className="docs-example docs-eg3">Item 3</Wrapper>
      </HBox>
      <HBox align="bottom" className="docs-eg-height2">
        <Wrapper flex={1} className="docs-example docs-eg1">Item 1</Wrapper>
        <Wrapper flex={1} className="docs-example docs-eg2">Item 2</Wrapper>
        <Wrapper flex={1} className="docs-example docs-eg3">Item 3</Wrapper>
      </HBox>
      <HBox align="center" className="docs-eg-height2">
        <Wrapper flex={1} className="docs-example docs-eg1">Item 1</Wrapper>
        <Wrapper flex={1} className="docs-example docs-eg2">Item 2</Wrapper>
        <Wrapper flex={1} className="docs-example docs-eg3">Item 3</Wrapper>
      </HBox>
    </div>
  )
}

export default HBoxAlign
