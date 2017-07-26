import { borderShadow, borderShadowRaised, transTextHover } from "../units"

const boxShadowHover = `
  box-shadow: ${borderShadow};
  transition: ${transTextHover};
  
  &:hover {
    box-shadow: ${borderShadowRaised};
  }
`

export default boxShadowHover