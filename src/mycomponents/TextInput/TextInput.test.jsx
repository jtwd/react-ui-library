import React from 'react'
import renderer from 'react-test-renderer'
import TextInput from './TextInput'

test('TextInput renders correctly', () => {
  const component = renderer.create(
    <TextInput
      htmlId="test"
      name="test"
      label="Test"
      onChange={() => {}}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('TextInput renders correctly when passed required prop', () => {
  const component = renderer.create(
    <TextInput
      htmlId="test"
      name="test"
      label="Test"
      required
      onChange={() => {}}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('TextInput renders correctly when passed an error prop', () => {
  const component = renderer.create(
    <TextInput
      htmlId="test"
      name="test"
      label="Test"
      required
      onChange={() => {}}
      error="This is a required field"
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('TextInput renders correctly when passed type of email', () => {
  const component = renderer.create(
    <TextInput
      htmlId="test"
      name="test"
      label="Test"
      type="email"
      onChange={() => {}}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('TextInput renders correctly when passed type of number', () => {
  const component = renderer.create(
    <TextInput
      htmlId="test"
      name="test"
      label="Test"
      type="number"
      onChange={() => {}}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('TextInput renders correctly when passed type of tel', () => {
  const component = renderer.create(
    <TextInput
      htmlId="test"
      name="test"
      label="Test"
      type="tel"
      onChange={() => {}}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('TextInput renders correctly when passed type of password', () => {
  const component = renderer.create(
    <TextInput
      htmlId="test"
      name="test"
      label="Test"
      type="password"
      onChange={() => {}}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
