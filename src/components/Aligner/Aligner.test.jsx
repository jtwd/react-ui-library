import React from 'react'
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Aligner from './Aligner'
import AlignerItem from './AlignerItem'

describe('Aligner component', () => {
  it('renders a center aligned single child by default', () => {
    const component = shallow(<Aligner><div>Centered</div></Aligner>)
    expect(component).toMatchSnapshot()
  })

  it('does not render a AlignerItem for single children', () => {
    const component = shallow(<Aligner><div>Centered</div></Aligner>)
    expect(component.find(AlignerItem).exists()).toBe(false)
  })

  it('renders a AlignerItem on multiple children by default', () => {
    const component = shallow(
      <Aligner>
        <div>Child 1</div>
        <div>Child 2</div>
      </Aligner>
    )
    expect(component.find(AlignerItem).length).toEqual(2)
  })

  it('renders flex of 1 on multiple children by default', () => {
    const component = shallow(
      <Aligner>
        <div>Child 1</div>
        <div>Child 2</div>
      </Aligner>
    )
    expect(component.childAt(0).props().flex).toEqual('1')
    expect(component.childAt(1).props().flex).toEqual('1')
  })

  it('renders stretch when passed the stretch prop', () => {
    const Component = (
      <Aligner stretch>
        <div>Child 1</div>
        <div>Child 2</div>
      </Aligner>
    )
    const wrapper = renderer.create(Component).toJSON()
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveStyleRule('display', 'flex')
  })

  it('renders flex of 0 on multiple children when passed prop of fixed', () => {
    const component = shallow(
      <Aligner fixed>
        <div>Child 1</div>
        <div>Child 2</div>
      </Aligner>
    )
    expect(component.childAt(0).props().flex).toEqual('0')
    expect(component.childAt(1).props().flex).toEqual('0')
  })

  it('renders flex of 1 and 2 on multiple children when passed prop ratio of [1,2]', () => {
    const component = shallow(
      <Aligner ratio={[1,2]}>
        <div>Child 1</div>
        <div>Child 2</div>
      </Aligner>
    )
    expect(component.childAt(0).props().flex).toEqual('1')
    expect(component.childAt(1).props().flex).toEqual('2')
  })

  it('renders a flex values on multiple children when passed a valid ratio prop', () => {
    const component = shallow(
      <Aligner ratio={[3,7]}>
        <div>Child 1</div>
        <div>Child 2</div>
      </Aligner>
    )
    expect(component).toMatchSnapshot()
  })

  it('renders no flex values on children when passed a invalid ratio prop', () => {
    const component = shallow(
      <Aligner ratio={[2,4,3,7]}>
        <div>Child 1</div>
        <div>Child 2</div>
      </Aligner>
    )
    expect(component).toMatchSnapshot()
  })

  it('renders align-self on children when passed a valid align-children prop', () => {
    const component = shallow(
      <Aligner alignChildren={['top', 'center', 'bottom']}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Aligner>
    )
    expect(component).toMatchSnapshot()
  })

  it('still renders align-self on children when passed an align-children prop with more values than children', () => {
    const component = shallow(
      <Aligner alignChildren={['top', 'center', 'bottom', 'center']}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Aligner>
    )
    expect(component).toMatchSnapshot()
  })

  it('still renders no align-self on children when passed an align-children prop with less values than children', () => {
    const component = shallow(
      <Aligner alignChildren={['top', 'center']}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Aligner>
    )
    expect(component).toMatchSnapshot()
  })

})