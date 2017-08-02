import React from 'react'
import {shallow} from 'enzyme'

import VBox from './VBox'
import Wrapper from '../Wrapper'

describe('VBox component', () => {
  it('renders correctly by default (stretched)', () => {
    const component = shallow(
      <VBox>
        <Wrapper flex={1}>1</Wrapper>
        <Wrapper flex={1}>2</Wrapper>
      </VBox>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders top aligned', () => {
    const component = shallow(
      <VBox align="top">
        <Wrapper flex={1}>1</Wrapper>
        <Wrapper flex={1}>2</Wrapper>
      </VBox>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders bottom aligned', () => {
    const component = shallow(
      <VBox align="bottom">
        <Wrapper flex={1}>1</Wrapper>
        <Wrapper flex={1}>2</Wrapper>
      </VBox>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders packed to the start', () => {
    const component = shallow(
      <VBox pack="start">
        <Wrapper>1</Wrapper>
        <Wrapper>2</Wrapper>
      </VBox>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders packed in the center', () => {
    const component = shallow(
      <VBox pack="center">
        <Wrapper>1</Wrapper>
        <Wrapper>2</Wrapper>
      </VBox>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders packed to the end', () => {
    const component = shallow(
      <VBox pack="end">
        <Wrapper>1</Wrapper>
        <Wrapper>2</Wrapper>
      </VBox>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders packed with space between', () => {
    const component = shallow(
      <VBox pack="between">
        <Wrapper>1</Wrapper>
        <Wrapper>2</Wrapper>
      </VBox>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders packed with space around', () => {
    const component = shallow(
      <VBox pack="around">
        <Wrapper>1</Wrapper>
        <Wrapper>2</Wrapper>
      </VBox>
    )
    expect(component).toMatchSnapshot()
  })
})
