import React from 'react'
import {shallow} from 'enzyme'

import HBox from './HBox'
import Wrapper from '../Wrapper'

describe('HBox component', () => {
  it('renders correctly by default (stretched)', () => {
    const component = shallow(
      <HBox>
        <Wrapper flex={1}>1</Wrapper>
        <Wrapper flex={1}>2</Wrapper>
      </HBox>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders top aligned', () => {
    const component = shallow(
      <HBox align="top">
        <Wrapper flex={1}>1</Wrapper>
        <Wrapper flex={1}>2</Wrapper>
      </HBox>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders bottom aligned', () => {
    const component = shallow(
      <HBox align="bottom">
        <Wrapper flex={1}>1</Wrapper>
        <Wrapper flex={1}>2</Wrapper>
      </HBox>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders center aligned', () => {
    const component = shallow(
      <HBox align="center">
        <Wrapper flex={1}>1</Wrapper>
        <Wrapper flex={1}>2</Wrapper>
      </HBox>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders packed to the start', () => {
    const component = shallow(
      <HBox pack="start">
        <Wrapper>1</Wrapper>
        <Wrapper>2</Wrapper>
      </HBox>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders packed in the center', () => {
    const component = shallow(
      <HBox pack="center">
        <Wrapper>1</Wrapper>
        <Wrapper>2</Wrapper>
      </HBox>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders packed to the end', () => {
    const component = shallow(
      <HBox pack="end">
        <Wrapper>1</Wrapper>
        <Wrapper>2</Wrapper>
      </HBox>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders packed with space between', () => {
    const component = shallow(
      <HBox pack="between">
        <Wrapper>1</Wrapper>
        <Wrapper>2</Wrapper>
      </HBox>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders packed with space around', () => {
    const component = shallow(
      <HBox pack="around">
        <Wrapper>1</Wrapper>
        <Wrapper>2</Wrapper>
      </HBox>
    )
    expect(component).toMatchSnapshot()
  })
})
