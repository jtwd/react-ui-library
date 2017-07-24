import React from 'react'
import {shallow} from 'enzyme'
import Index from './index.jsx'

test('Index renders without crashing', () => {
  expect(JSON.stringify(Index)).toMatchSnapshot()
})
