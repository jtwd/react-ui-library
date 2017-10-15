import { css } from 'styled-components'
import media from '../media'

function baseFontSizes(sizes) {
  return Object.keys(sizes).map(screenSize => css`${media[screenSize]`font-size: ${sizes[screenSize]};`}`)
}

export default baseFontSizes