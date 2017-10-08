import { trans, light, alert, primary } from "./palette"
import spacers from "./spacers"
import {transitions, radiusRound} from "./units"

const inputStyles = `
  border: 2px solid;
  background: ${trans(1)};
  color: ${light()};
  padding: ${spacers.xs};
  transition: ${transitions.hover};
  border-radius: ${radiusRound};
  display: block;
  width: 100%;
`

export function getInputStyles(error) {
  return `
    ${inputStyles}
    border-color: ${error ? alert('light') : light('trans')};
    &:hover {
      border-color: ${(error ? alert() : light())};
    }
    &:focus {
      border-color: ${(error ? alert('dark') : primary())};
      background: ${trans(4)};
      outline: 0;
      &:hover {
        border-color: ${(error ? alert('dark') : primary('dark'))};
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