import { white, grey, darkGrey, blue, darkBlue, yellow, lightYellow, darkYellow, red, darkRed } from '../_theme/colors'

const types = {
  default: `
    color: ${white};
    background: ${grey};
    &:hover, &:focus {
      background: ${darkGrey};
    }
  `,
  primary: `
    background: ${blue};
    color: ${yellow};
    &:hover, &:focus {
      background: ${darkBlue};
      color: ${lightYellow}
    }
  `,
  secondary: `
    background: ${yellow};
    color: ${blue};
    &:hover, &:focus {
      background: ${darkYellow};
      color: ${darkBlue}
    }
  `,
  danger: `
    background: ${red};
    color: ${white};
    &:hover, &:focus {
      background: ${darkRed};
      color: ${white}
    }
  `
}

export default types
