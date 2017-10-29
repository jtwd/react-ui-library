import * as c from '../_theme/palette'
import { getTheme } from '../_theme/utils'

const { transitions, radius } = getTheme()

export default {
  default: {
    backgroundColor: c.trans(2),
    color: c.primary(),
    transition: transitions.fadeIn,
    panelIndent: '2px',
    panelRadius: radius.rounded
  }
}