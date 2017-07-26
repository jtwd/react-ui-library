import React from 'react'
import {shallow} from 'enzyme'
import Wrapper from './Wrapper'

describe('Wrapper component', () => {
  it('renders a correctly by default', () => {
    const component = shallow(<Wrapper>Default</Wrapper>)
    expect(component).toMatchSnapshot()
  })

  it('renders a text wrapper', () => {
    const component = shallow(<Wrapper text>Text</Wrapper>)
    expect(component).toMatchSnapshot()
  })

  it('renders a short wrapper', () => {
    const component = shallow(<Wrapper short>Text</Wrapper>)
    expect(component).toMatchSnapshot()
  })

  it('renders a centered wrapper', () => {
    const component = shallow(<Wrapper centered>Centered</Wrapper>)
    expect(component).toMatchSnapshot()
  })

  it('renders a centered text wrapper', () => {
    const component = shallow(<Wrapper text centered>Centered</Wrapper>)
    expect(component).toMatchSnapshot()
  })

  it('renders a collapsed wrapper', () => {
    const component = shallow(<Wrapper collapse>Collapsed</Wrapper>)
    expect(component).toMatchSnapshot()
  })
})
