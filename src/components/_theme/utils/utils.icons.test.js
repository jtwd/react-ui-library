import getIcon from './utils.icons'
import { IconMenu } from '../icons'

describe('getIcon - icon utility', () => {
  it('Returns the correct icon element when passed a valid name', () => {
    const iconName = 'menu'
    const expected = IconMenu()
    expect(getIcon(iconName)).toEqual(expected)
  })

  it('Returns null when passed a invalid name', () => {
    const iconName = 2
    const expected = null
    expect(getIcon(iconName)).toEqual(expected)
  })

  it('Returns null when passed no params', () => {
    const expected = null
    expect(getIcon()).toEqual(expected)
  })
})
