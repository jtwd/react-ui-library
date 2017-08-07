import React from 'react'
import {shallow} from 'enzyme'

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
    expect(component.childAt(0).props().flex).toEqual(1)
    expect(component.childAt(1).props().flex).toEqual(1)
  })

  it('renders a stretch on a single child when passed the stretch prop', () => {
    const component = shallow(
      <Aligner stretch>
        <div>Child 1</div>
      </Aligner>
    )
    expect(component).toMatchSnapshot()
  })

  it('renders a stretch on a multiple children when passed the stretch prop', () => {
    const component = shallow(
      <Aligner stretch>
        <div>Child 1</div>
        <div>Child 2</div>
      </Aligner>
    )
    expect(component).toMatchSnapshot()
  })
/*
    it('renders a center aligns multiple children without flex when passed the fixed prop', () => {
      const component = shallow(
        <Aligner fixed>
          <div>Child 1</div>
          <div>Child 2</div>
        </Aligner>
      )
      expect(component).toMatchSnapshot()
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
      <Aligner alignChildrenu={['top', 'center']}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Aligner>
    )
    expect(component).toMatchSnapshot()
  })

  it('renders a gutter between children when passed multiple children and the gutter prop', () => {
    const component = shallow(
      <Aligner gutter>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Aligner>
    )
    expect(component).toMatchSnapshot()
  })
*/
})