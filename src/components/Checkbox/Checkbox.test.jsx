import React from 'react'
import {shallow} from 'enzyme'
import 'jest-styled-components'

import Checkbox from './Checkbox'
import Icon from '../Icon'

function createTestProps (props) {
  return {
    label: 'foo',
    htmlId: 'chk1',
    toggleChecked: jest.fn(),
    value: 'foo',
    hasFocus: false,
    isChecked: false,
    toggleFocus: jest.fn(),
    iconName: 'checkboxOff',
    ...props
  }
}

// contains everything related to rendered output
describe('rendering', () => {
  let wrapper 
  const createWrapper = props => shallow(<Checkbox {...props} />)
  beforeEach(() => {
    const props = createTestProps()
    wrapper = createWrapper(props)
  })

  describe('initial state', () => {
    it('contains one <Icon />', () => {
      console.log(wrapper.find(Icon).props())
      expect(wrapper.find(Icon).length).toEqual(1)
    })
    xdescribe('when checkbox is not checked', () => {
      const chkOffIcon = 'checkboxOff'
      it(`displays the '${chkOffIcon}' icon`, () => {
        expect(wrapper.find(Icon).props().icon).toEqual(chkOffIcon)
      })
    })
    
  })
})

// contains everything related to callback functions and interactions
// describe('interactions')

// contains tests related to react lifecycle functions
// describe('lifecycle')


/*
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
*/