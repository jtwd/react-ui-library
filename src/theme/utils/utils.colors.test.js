import { lighten, darken } from './utils.colors'

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
})
