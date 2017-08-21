import {transWhite, transBlackLight, transBlackDark, white, lightRed, red, darkRed, yellow, darkYellow } from "./colors"
import {xs} from "./spacers"
import {transitions, radiusRound} from "./units"

const inputStyles = `
  border: 2px solid;
  background: ${transBlackLight};
  color: ${white};
  padding: ${xs};
  transition: ${transitions.hover};
  border-radius: ${radiusRound};
  display: block;
  width: 100%;
`

export function getInputStyles(error) {
  return `
    ${inputStyles}
    border-color: ${error ? lightRed : transWhite};
    &:hover {
      border-color: ${(error ? red : white)};
    }
    &:focus {
      border-color: ${(error ? darkRed : yellow)};
      background: ${transBlackDark};
      outline: 0;
      &:hover {
        border-color: ${(error ? darkRed : darkYellow)};
      }
    }
  `
}

export const fieldSizes = {
  'default': '100%',
  'xs': '85px',
  'sm': '150px',
  'md': '300px',
  'lg': '450px',
  'xl': '600px'
}