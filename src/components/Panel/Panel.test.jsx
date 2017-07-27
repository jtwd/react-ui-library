import React from 'react'
import renderer from 'react-test-renderer'
import Panel from './Panel'

test('Panel renders correctly by default', () => {
  const component = renderer.create(<Panel>Panel content</Panel>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Panel renders header', () => {
  const component = renderer.create(<Panel header="Panel header">Panel content</Panel>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Panel renders header when passed a component', () => {
  const Title = <span>Panel header <strong>component</strong></span>
  const component = renderer.create(<Panel header={Title}>Panel content</Panel>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Panel renders footer', () => {
  const component = renderer.create(<Panel footer="Panel footer">Panel content</Panel>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Panel renders footer when passed a component', () => {
  const Title = <span>Panel footer <strong>component</strong></span>
  const component = renderer.create(<Panel footer={Title}>Panel content</Panel>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Panel aligns footer content to the right', () => {
  const component = renderer.create(<Panel footer="Panel footer" footerRight>Panel content</Panel>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Panel renders a header and footer', () => {
  const component = renderer.create(<Panel header="Panel header" footer="Panel footer">Panel content</Panel>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
