import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

test('App renders correctly', () => {
  const component = shallow(<App />)
  expect(component).toMatchSnapshot()
})
