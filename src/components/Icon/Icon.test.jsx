import React from 'react'
import renderer from 'react-test-renderer'
import Icon from './Icon'

test('Icon renders correctly', () => {
  const component = renderer.create(<Icon icon="close" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Icon renders large when passed the prop', () => {
  const component = renderer.create(<Icon icon="close" large />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Icon renders small when passed the prop', () => {
  const component = renderer.create(<Icon icon="close" small />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
