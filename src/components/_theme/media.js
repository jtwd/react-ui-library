import { css } from 'styled-components'
import { getTheme } from './utils'

export const sizes = getTheme('screenSizes')

/*
 * Usage:
 * ${media.xs`
 *   // css code here
 * `}
 */

/* eslint-disable */
const media = Object.keys(sizes).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size]: function(...args) {
      return css`
        @media(min-width: ${sizes[size]}px) {
          ${css(...args)}
        }
      `
    }
  }
}, {})

export default media
