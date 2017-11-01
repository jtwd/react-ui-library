import { getTheme } from '../_theme/utils'

const { transitions, spacing } = getTheme()

export default {
  default: {
    transitionOut: transitions.drawOut,
    transitionIn: transitions.drawIn,
    maxHeight: '500px',
    borderWidth: '2px',
    onClosePadding: '45px',
    closeBtnRight: spacing.xxs,
    closeBtnTop: '.33rem',
    iconLeft: '-6px',
    iconTop: '3px'
  }
}
