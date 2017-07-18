import { white, grey, darkGrey, blue, darkBlue, yellow, lightYellow, darkYellow } from '../../theme/colors'

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
    `
}

export default types
