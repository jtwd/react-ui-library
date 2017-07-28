import { lighten, darken, rgba } from './utils.colors'

const percent = 20

describe('lighten - color utility', () => {
  it('returns a hex 20% lighter than the one passed in', () => {
    const color = '#000000'
    const expected = '#333333'
    expect(lighten(color, percent)).toBe(expected)
  })
  it('accepts 3 digit hex codes', () => {
    const color = '#000'
    const expected = '#333333'
    expect(lighten(color, percent)).toBe(expected)
  })
  it('accepts rgb color codes', () => {
    const color = 'rgb(0, 0, 0)'
    const expected = 'rgb(51, 51, 51)'
    expect(lighten(color, percent)).toBe(expected)
  })
  it('returns the original color if given an invalid amount', () => {
    const color = '#000'
    const expected = '#000'
    expect(lighten(color, 110)).toBe(expected)
  })
  it('returns the original color if not given an amount', () => {
    const color = '#000'
    const expected = '#000'
    expect(lighten(color)).toBe(expected)
  })
})

describe('darken - color utility', () => {
  it('returns a hex 20% darker than the one passed in', () => {
    const color = '#ffffff'
    const expected = '#cccccc'
    expect(darken(color, percent)).toBe(expected)
  })
  it('accepts 3 digit hex codes', () => {
    const color = '#fff'
    const expected = '#cccccc'
    expect(darken(color, percent)).toBe(expected)
  })
  it('accepts rgb color codes', () => {
    const color = 'rgb(255, 255, 255)'
    const expected = 'rgb(204, 204, 204)'
    expect(darken(color, percent)).toBe(expected)
  })
  it('returns the original color if given an invalid amount', () => {
    const color = '#000'
    const expected = '#000'
    expect(darken(color, 110)).toBe(expected)
  })
  it('returns the original color if not given an amount', () => {
    const color = '#000'
    const expected = '#000'
    expect(darken(color)).toBe(expected)
  })
})

describe('rgba - color utility', () => {
  it('returns a rgba value ', () => {
    const color = '#000000'
    const alpha = 0.5
    const expected = 'rgba(0, 0, 0, 0.5)'
    expect(rgba(color, alpha)).toBe(expected)
  })

  it('returns a solid rgba color if no alpha value is passed', () => {
    const color = '#ffffff'
    const expected = 'rgba(255, 255, 255, 1)'
    expect(rgba(color)).toBe(expected)
  })
})