import React from 'react'
import renderer from 'react-test-renderer'
import Button from './Button'

test('renders a default button by default', () => {
  const tree = renderer.create(<Button>Default</Button>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders a primary button when passed prop', () => {
  const tree = renderer.create(<Button primary>Primary</Button>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders a secondary button when passed prop', () => {
  const tree = renderer.create(<Button secondary>Primary</Button>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders a large button when passed prop', () => {
  const tree = renderer.create(<Button large>Primary</Button>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders a small button when passed prop', () => {
  const tree = renderer.create(<Button small>Primary</Button>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders a large, primary button when passed prop', () => {
  const tree = renderer.create(<Button primary large>Primary</Button>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders a small, secondary button when passed prop', () => {
  const tree = renderer.create(<Button small secondary>Primary</Button>).toJSON()
  expect(tree).toMatchSnapshot()
})
