import { white, black, grey, darkGrey, blue, darkBlue, yellow, lightYellow, darkYellow, red, darkRed } from '../_theme/colors'
import boxShadowAnimation from '../_theme/mixins/boxShadowAnimation'

const types = {
  default: `
    color: ${white};
    background: ${grey};
    &:hover, &:focus {
      background: ${darkGrey};
    }
    ${boxShadowAnimation('all')}
  `,
  primary: `
    background: ${yellow};
    color: ${blue};
    &:hover, &:focus {
      background: ${darkYellow};
      color: ${darkBlue}
    }
    ${boxShadowAnimation('all')}
  `,
  secondary: `
    background: ${blue};
    color: ${yellow};
    &:hover, &:focus {
      background: ${darkBlue};
      color: ${lightYellow}
    }
    ${boxShadowAnimation('all')}
  `,
  danger: `
    background: ${red};
    color: ${white};
    &:hover, &:focus {
      background: ${darkRed};
      color: ${white}
    }
    ${boxShadowAnimation('all')}
  `,
  link: `
    background: transparent;
    color: ${yellow};
    padding-left: 0;
    padding-right: 0;
    box-shadow: none;
    &:hover, &:focus {
      background: transparent;
      color: ${white};
      text-shadow: 2px 2px 2px ${black};
    }
  `
}

export default types
