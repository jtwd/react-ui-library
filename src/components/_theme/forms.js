import * as c from "./palette"
import spacers from "./spacers"
import {transitions, radiusRound} from "./units"

const inputStyles = `
  border: 2px solid;
  background: ${c.trans(1)};
  color: ${c.light()};
  padding: ${spacers.xs};
  transition: ${transitions.hover};
  border-radius: ${radiusRound};
  display: block;
  width: 100%;
`

export function getInputStyles(error) {
  return `
    ${inputStyles}
    border-color: ${error ? c.alert('light') : c.trans(3, false)};
    &:hover {
      border-color: ${(error ? c.alert() : c.light())};
    }
    &:focus {
      border-color: ${(error ? c.alert('dark') : c.primary())};
      background: ${c.trans(4)};
      outline: 0;
      &:hover {
        border-color: ${(error ? c.alert('dark') : c.primary('dark'))};
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