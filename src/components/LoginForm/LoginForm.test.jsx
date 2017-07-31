import React from 'react'
import {shallow} from 'enzyme'

import LoginForm from './LoginForm'

describe('LoginForm', () => {
  it('renders correctly', () => {
    const component = shallow(<LoginForm onSubmit={() => {}}/>)
    expect(component).toMatchSnapshot()
  })

})