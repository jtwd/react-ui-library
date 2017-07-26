import React from 'react'
import renderer from 'react-test-renderer'
import Heading from './Heading'

test('Heading renders top level correctly', () => {
  const component = renderer.create(<Heading level={1}>Top level heading</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Heading renders second level correctly', () => {
  const component = renderer.create(<Heading level={2}>Second level heading</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Heading renders third level correctly', () => {
  const component = renderer.create(<Heading level={3}>Third level heading</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Heading renders forth level correctly', () => {
  const component = renderer.create(<Heading level={4}>Forth level heading</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Heading renders top level when not passed a level prop', () => {
  const component = renderer.create(<Heading>Top level heading</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Heading does not render when not passed any children' , () => {
  const component = renderer.create(<Heading/>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
