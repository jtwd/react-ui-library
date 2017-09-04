import React from 'react'
import {shallow} from 'enzyme'
import 'jest-styled-components'

import Checkbox from './Checkbox'

describe('Checkbox component', () => {
  it('renders a checkbox by default', () => {
    const props = {
      htmlId: 'chkbox1',
      label: 'Default checkbox',
      value: 'yes'
    }
    const component = shallow(
      <Checkbox {...props} />
    )
    expect(component).toMatchSnapshot()
  })
  it('renders a checked checkbox when given the isChecked prop', () => {
    const props = {
      htmlId: 'chkbox1',
      label: 'Default checkbox',
      value: 'yes',
      isChecked: true
    }
    const component = shallow(
      <Checkbox {...props} />
    )
    expect(component).toMatchSnapshot()
  })
})