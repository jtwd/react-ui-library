import React from 'react'

import HBox from '../HBox'
import Wrapper from '../../Wrapper'

/** Pack (start, center, end, space-between, space-around) */
function HBoxAlign () {
  return (
    <div>
      <HBox pack="start" className="docs-eg-height">
        <Wrapper middle className="docs-example docs-eg1">Item 1</Wrapper>
        <Wrapper middle className="docs-example docs-eg2">Item 2</Wrapper>
        <Wrapper middle className="docs-example docs-eg3">Item 3</Wrapper>
      </HBox>
      <HBox pack="center" className="docs-eg-height">
        <Wrapper middle className="docs-example docs-eg1">Item 1</Wrapper>
        <Wrapper middle className="docs-example docs-eg2">Item 2</Wrapper>
        <Wrapper middle className="docs-example docs-eg3">Item 3</Wrapper>
      </HBox>
      <HBox pack="end" className="docs-eg-height">
        <Wrapper middle className="docs-example docs-eg1">Item 1</Wrapper>
        <Wrapper middle className="docs-example docs-eg2">Item 2</Wrapper>
        <Wrapper middle className="docs-example docs-eg3">Item 3</Wrapper>
      </HBox>
      <HBox pack="space-between" className="docs-eg-height">
        <Wrapper middle className="docs-example docs-eg1">Item 1</Wrapper>
        <Wrapper middle className="docs-example docs-eg2">Item 2</Wrapper>
        <Wrapper middle className="docs-example docs-eg3">Item 3</Wrapper>
      </HBox>
      <HBox pack="space-around" className="docs-eg-height">
        <Wrapper middle className="docs-example docs-eg1">Item 1</Wrapper>
        <Wrapper middle className="docs-example docs-eg2">Item 2</Wrapper>
        <Wrapper middle className="docs-example docs-eg3">Item 3</Wrapper>
      </HBox>
    </div>
  )
}

export default HBoxAlign
