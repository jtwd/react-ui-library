import isEmailAddress from './isEmailAddress'

describe('isEmailAddress - utility', () => {
  it('it returns the true for user@domain.com', () => {
    const value = 'user@domain.com'
    expect(isEmailAddress(value)).toBe(true)
  })

  it('it returns the false for user@', () => {
    const value = 'user@'
    expect(isEmailAddress(value)).toBe(false)
  })

  it('it returns the true for user@domain', () => {
    const value = 'user@domain'
    expect(isEmailAddress(value)).toBe(true)
  })

  it('it returns the false for user@domain^.com', () => {
    const value = 'user@domain^u.comcomcom'
    expect(isEmailAddress(value)).toBe(false)
  })
})
