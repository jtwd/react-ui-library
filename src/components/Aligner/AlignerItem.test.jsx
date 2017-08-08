import React from 'react'
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import AlignerItem from './AlignerItem'
import {alignToFlex} from "../_theme/mixins/flexbox"

describe('AlignerItem component', () => {
  it('renders correctly by default', () => {
    const component = shallow(<AlignerItem><div>Aligned item</div></AlignerItem>)
    expect(component).toMatchSnapshot()
  })

  it('renders correctly with a flex prop', () => {
    const component = shallow(<AlignerItem flex="1"><div>Aligned item</div></AlignerItem>)
    expect(component).toMatchSnapshot()
  })

  it('renders correctly with a flex prop of 0', () => {
    const Component = (
      <AlignerItem flex="0">
        <div>Aligned item</div>
      </AlignerItem>
    )
    const wrapper = renderer.create(Component).toJSON()
    expect(wrapper).toHaveStyleRule('flex', 'none')
  })

  it('renders correctly with a alignSelf prop of top', () => {
    const Component = (
      <AlignerItem alignSelf="top">
        <div>Aligned item</div>
      </AlignerItem>
    )
    const wrapper = renderer.create(Component).toJSON()
    expect(wrapper).toHaveStyleRule('align-self', alignToFlex.top)
  })

  it('renders correctly with a alignSelf prop of center', () => {
    const Component = (
      <AlignerItem alignSelf="center">
        <div>Aligned item</div>
      </AlignerItem>
    )
    const wrapper = renderer.create(Component).toJSON()
    expect(wrapper).toHaveStyleRule('align-self', alignToFlex.center)
  })

  it('renders correctly with a alignSelf prop of bottom', () => {
    const Component = (
      <AlignerItem alignSelf="bottom">
        <div>Aligned item</div>
      </AlignerItem>
    )
    const wrapper = renderer.create(Component).toJSON()
    expect(wrapper).toHaveStyleRule('align-self',  alignToFlex.bottom)
  })
})