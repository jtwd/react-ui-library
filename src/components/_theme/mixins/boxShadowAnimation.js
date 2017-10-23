import { getTheme } from '../utils'
import * as c from '../palette'

const { transitions, shadows } = getTheme()

function boxShadowAnimation(action) {
  return `
    box-shadow: ${shadows.close} ${c.trans('dark')};
    transition: ${transitions.hover};
    ${action === 'hover' && `
      &:hover {
        box-shadow: ${shadows.raised} ${c.trans('dark')};
      }
    `}
    ${action === 'focus' && `
      &:focus {
        box-shadow: ${shadows.raised} ${c.trans('dark')};
      }
    `}
    ${action === 'all' && `
      &:focus,
      &:hover {
        box-shadow: ${shadows.raised} ${c.trans('dark')};
      }
    `}
  `
}

export default boxShadowAnimation
