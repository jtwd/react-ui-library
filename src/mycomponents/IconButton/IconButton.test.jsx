import React from 'react'
import renderer from 'react-test-renderer'
import IconButton from './IconButton'

describe('IconButton', () => {
  it('renders correctly when passed a valid icon with text', () => {
    const component = renderer.create(<IconButton icon="close">Button text</IconButton>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when passed a valid icon without text', () => {
    const component = renderer.create(<IconButton icon="close" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when passed a large prop with text', () => {
    const component = renderer.create(
      <IconButton icon="close" large>
        Button text
      </IconButton>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when passed a small prop with text', () => {
    const component = renderer.create(
      <IconButton icon="close" small>
        Button text
      </IconButton>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when passed a large prop and no text', () => {
    const component = renderer.create(<IconButton icon="close" large />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when passed a small prop and no text', () => {
    const component = renderer.create(<IconButton icon="close" small />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when passed a invalid icon with text', () => {
    const component = renderer.create(<IconButton icon="not-valid" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('does not render when passed a invalid icon with no text', () => {
    const component = renderer.create(<IconButton icon="not-valid" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
