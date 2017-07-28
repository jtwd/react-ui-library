import { borderShadow, borderShadowRaised, transTextHover } from "../units"

function boxShadowAnimation(action) {
  return `
    box-shadow: ${borderShadow};
    transition: ${transTextHover};
    ${action === 'hover' && `
      &:hover {
        box-shadow: ${borderShadowRaised};
      }
    `}
    ${action === 'focus' && `
      &:focus {
        box-shadow: ${borderShadowRaised};
      }
    `}
    ${action === 'all' && `
      &:focus,
      &:hover {
        box-shadow: ${borderShadowRaised};
      }
    `}
  `
}

export default boxShadowAnimation
