import React from 'react'
import {shallow} from 'enzyme'

import Button from './Button'

describe('Button component', () => {
  it('renders a default button by default', () => {
    const component = shallow(<Button>Default</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders a primary button when passed prop', () => {
    const component = shallow(<Button primary>Primary</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders a secondary button when passed prop', () => {
    const component = shallow(<Button secondary>Primary</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders a danger button when passed prop', () => {
    const component = shallow(<Button danger>Danger</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders a link button when passed prop', () => {
    const component = shallow(<Button link>Link</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders a large button when passed prop', () => {
    const component = shallow(<Button large>Primary</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders a small button when passed prop', () => {
    const component = shallow(<Button small>Primary</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders a large, primary button when passed prop', () => {
    const component = shallow(<Button primary large>Primary</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders a small, secondary button when passed prop', () => {
    const component = shallow(<Button small secondary>Primary</Button>)
    expect(component).toMatchSnapshot()
  })

  it('should render an icon if a valid icon is passed', () => {
    const component = shallow(<Button icon="close">Icon Button</Button>)
    expect(component).toMatchSnapshot()
  })

  it('should render a primary button with an icon', () => {
    const component = shallow(<Button primary icon="close">Icon Button</Button>)
    expect(component).toMatchSnapshot()
  })

  it('should render a secondary button with an icon', () => {
    const component = shallow(<Button secondary icon="close">Icon Button</Button>)
    expect(component).toMatchSnapshot()
  })

  it('should render a large button with an icon', () => {
    const component = shallow(<Button large icon="close">Icon Button</Button>)
    expect(component).toMatchSnapshot()
  })

  it('should render a small button with an icon', () => {
    const component = shallow(<Button small icon="close">Icon Button</Button>)
    expect(component).toMatchSnapshot()
  })

  it('should render a correct icon only button if no children are passed with an icon', () => {
    const component = shallow(<Button icon="close" />)
    expect(component).toMatchSnapshot()
  })

  it('should render a correct icon only large button if no children are passed with an icon and large prop', () => {
    const component = shallow(<Button icon="close" large />)
    expect(component).toMatchSnapshot()
  })

  it('should render a correct icon only small button if no children are passed with an icon and small prop', () => {
    const component = shallow(<Button icon="close" small />)
    expect(component).toMatchSnapshot()
  })

  it('should render a correct icon only primary button if no children are passed with an icon and primary prop', () => {
    const component = shallow(<Button icon="close" primary />)
    expect(component).toMatchSnapshot()
  })

  it('should render a correct icon only secondary button if no children are passed with an icon and secondary prop', () => {
    const component = shallow(<Button icon="close" secondary />)
    expect(component).toMatchSnapshot()
  })

  it('should still render a normal button if icon prop is not valid and children is supplied', () => {
    const component = shallow(<Button icon="qwerty">Invalid icon</Button>)
    expect(component).toMatchSnapshot()
  })

  it('should not render if icon prop is not valid and no children are supplied', () => {
    const component = shallow(<Button icon="qwerty" />)
    expect(component).toMatchSnapshot()
  })
})
