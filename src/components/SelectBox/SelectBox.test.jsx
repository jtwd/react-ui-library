import React from 'react'
import renderer from 'react-test-renderer'

import SelectBox from './SelectBox'

test('SelectBox renders correctly', () => {
  const options = [
    { id: 1, label: 'Option number 1', value: '4324324' },
    { id: 2, label: 'Secondary option', value: '4324344' },
    { id: 3, label: 'Option three', value: '4324366' }
  ]
  const component = renderer.create(<SelectBox htmlId="test" name="test" label="Test" options={options} onChange={() => {}} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('SelectBox renders label as the option value when value is not supplied', () => {
  const options = [
    { id: 1, label: 'Option number 1' },
    { id: 2, label: 'Secondary option' },
    { id: 3, label: 'Option three' }
  ]
  const component = renderer.create(<SelectBox htmlId="test" name="test" label="Test" options={options} onChange={() => {}} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('SelectBox renders correctly when passed the required prop', () => {
  const options = [
    { id: 1, label: 'Option number 1', value: '4324324' },
    { id: 2, label: 'Secondary option', value: '4324344' },
    { id: 3, label: 'Option three', value: '4324366' }
  ]
  const component = renderer.create(<SelectBox htmlId="test" name="test" label="Test" options={options} required onChange={() => {}} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('SelectBox renders correctly when passed the error prop', () => {
  const options = [
    { id: 1, label: 'Option number 1', value: '4324324' },
    { id: 2, label: 'Secondary option', value: '4324344' },
    { id: 3, label: 'Option three', value: '4324366' }
  ]
  const component = renderer.create(<SelectBox htmlId="test" name="test" label="Test" options={options} required error="This is required" onChange={() => {}} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('SelectBox renders correctly when passed the defaultOptionLabel prop', () => {
  const options = [
    { id: 1, label: 'Option number 1', value: '4324324' },
    { id: 2, label: 'Secondary option', value: '4324344' },
    { id: 3, label: 'Option three', value: '4324366' }
  ]
  const component = renderer.create(<SelectBox htmlId="test" name="test" label="Test" options={options} defaultOptionLabel="Custom default option label" onChange={() => {}} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('SelectBox does not render the default option when defaultOptionValue is null', () => {
  const options = [
    { id: 1, label: 'Option number 1', value: '4324324' },
    { id: 2, label: 'Secondary option', value: '4324344' },
    { id: 3, label: 'Option three', value: '4324366' }
  ]
  const component = renderer.create(<SelectBox htmlId="test" name="test" label="Test" options={options} defaultOptionLabel={null} onChange={() => {}} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('SelectBox renders the correct option as selected when passed the value prop', () => {
  const options = [
    { id: 1, label: 'Option number 1', value: '4324324' },
    { id: 2, label: 'Secondary option', value: '4324344' },
    { id: 3, label: 'Option three', value: '4324366' }
  ]
  const component = renderer.create(<SelectBox htmlId="test" name="test" label="Test" options={options} value="4324344" onChange={() => {}} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('SelectBox does not render if passed less than 2 options', () => {
  const options = [
    { id: 1, label: 'Option number 1', value: '4324324' }
  ]
  const component = renderer.create(<SelectBox htmlId="test" name="test" label="Test" options={options} onChange={() => {}} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('SelectBox does not render if passed no options', () => {
  const component = renderer.create(<SelectBox htmlId="test" name="test" label="Test" onChange={() => {}} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
