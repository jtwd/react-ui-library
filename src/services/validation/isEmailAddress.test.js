import isEmailAddress from './isEmailAddress'

describe('isEmailAddress - validation', () => {
  it('it returns true for user@domain.com', () => {
    const value = 'user@domain.com'
    expect(isEmailAddress(value)).toBe(true)
  })

  it('it returns false for user@', () => {
    const value = 'user@'
    expect(isEmailAddress(value)).toBe(false)
  })

  it('it returns true for user@domain', () => {
    const value = 'user@domain'
    expect(isEmailAddress(value)).toBe(true)
  })

  it('it returns false for user@domain^.com', () => {
    const value = 'user@domain^u.comcomcom'
    expect(isEmailAddress(value)).toBe(false)
  })

  it('it returns false for an empty string', () => {
    const value = ''
    expect(isEmailAddress(value)).toBe(false)
  })
})
