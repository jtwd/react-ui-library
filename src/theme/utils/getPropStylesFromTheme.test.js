import getPropStylesFromTheme from './getPropStylesFromTheme'

const theme = {
  param1: {
    default: `display: none;`,
    val1: `display: block;`
  },
  param2: {
    default: `color: white;`,
    val1: `color: black;`
  }
}

describe('getPropStylesFromTheme - utility', () => {
  it('it returns the correct styles when passed valid param and value', () => {
    const expected = theme.param1.val1
    const param = 'param1'
    const value = 'val1'
    expect(getPropStylesFromTheme(theme, param, value)).toBe(expected)
  })

  it('it returns the default styles when passed valid param only (no value)', () => {
    const expected = theme.param2.default
    const param = 'param2'
    expect(getPropStylesFromTheme(theme, param)).toBe(expected)
  })

  it('it returns null when passed an valid param and invalid value', () => {
    const expected = null
    const param = 'param2'
    const value = 'val99'
    expect(getPropStylesFromTheme(theme, param, value)).toBe(expected)
  })

  it('it returns null when passed an invalid param', () => {
    const expected = null
    const param = 'param99'
    expect(getPropStylesFromTheme(theme, param)).toBe(expected)
  })

  it('it returns null when passed an invalid theme', () => {
    const invalidTheme = undefined
    const expected = null
    const param = 'param1'
    expect(getPropStylesFromTheme(invalidTheme, param)).toBe(expected)
  })

  it('it returns null when passed no args', () => {
    const expected = null
    expect(getPropStylesFromTheme()).toBe(expected)
  })

  it('it returns null when passed only a theme', () => {
    const expected = null
    expect(getPropStylesFromTheme(theme)).toBe(expected)
  })
})
