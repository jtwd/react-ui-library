import React from 'react'
import renderer from 'react-test-renderer'
import PageTitle from './PageTitle'

test('PageTitle renders correctly when passed a title string', () => {
  const component = renderer.create(<PageTitle title="Page title" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('PageTitle renders correctly when passed a title component', () => {
  const Title = <span>Page title <small>with sub title</small></span>
  const component = renderer.create(<PageTitle title={Title} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('PageTitle renders correctly when passed a title component and extra content', () => {
  const component = renderer.create(<PageTitle title="Page title"><p>Extra content</p></PageTitle>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
