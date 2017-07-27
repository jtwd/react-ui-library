import React from 'react'
import renderer from 'react-test-renderer'
import PageHeader from './PageHeader'

test('PageHeader renders correctly when passed a title string', () => {
  const component = renderer.create(<PageHeader title="Page title" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('PageHeader renders correctly when passed a title component', () => {
  const Title = <span>Page title <small>with sub title</small></span>
  const component = renderer.create(<PageHeader title={Title} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('PageHeader renders correctly when passed a title component and extra content', () => {
  const component = renderer.create(<PageHeader title="Page title"><p>Extra content</p></PageHeader>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
