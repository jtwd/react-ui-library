import React from 'react'
import renderer from 'react-test-renderer'

import Label from './Label'

test('Label renders correctly', () => {
  const component = renderer.create(<Label htmlFor="test" label="test" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Label renders required field when passed required prop', () => {
  const component = renderer.create(<Label htmlFor="text" label="test" required />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
