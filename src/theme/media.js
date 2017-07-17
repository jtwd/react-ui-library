import { css } from 'styled-components'

const sizes = {
  xxs: 320,
  xs: 480,
  sm: 640,
  md: 768,
  lg: 960,
  xl: 1100,
  xxl: 1280,
  wide: 1460
}

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
