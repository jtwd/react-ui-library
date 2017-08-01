import React from 'react'
import {shallow} from 'enzyme'

import Wrapper from './Wrapper'

describe('Wrapper component', () => {
  it('renders a correctly by default', () => {
    const component = shallow(<Wrapper>Default</Wrapper>)
    expect(component).toMatchSnapshot()
  })

  it('renders as a type of form', () => {
    const component = shallow(<Wrapper type="form">Form</Wrapper>)
    expect(component).toMatchSnapshot()
  })

  it('renders as a type of main', () => {
    const component = shallow(<Wrapper type="main">Main</Wrapper>)
    expect(component).toMatchSnapshot()
  })

  it('renders as a type of header', () => {
    const component = shallow(<Wrapper type="header">Header</Wrapper>)
    expect(component).toMatchSnapshot()
  })

  it('renders as a type of footer', () => {
    const component = shallow(<Wrapper type="footer">Footer</Wrapper>)
    expect(component).toMatchSnapshot()
  })

  it('renders as a type of section', () => {
    const component = shallow(<Wrapper type="section">Section</Wrapper>)
    expect(component).toMatchSnapshot()
  })

  it('renders as a type of article', () => {
    const component = shallow(<Wrapper type="article">Article</Wrapper>)
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

  it('renders an app wrapper', () => {
    const component = shallow(<Wrapper app>App</Wrapper>)
    expect(component).toMatchSnapshot()
  })
})
