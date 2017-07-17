import React from 'react'
import { shallow } from 'enzyme'
import AppWrapper from './AppWrapper'

test('AppWrapper renders correctly', () => {
  const component = shallow(<AppWrapper />)
  expect(component).toMatchSnapshot()
})
