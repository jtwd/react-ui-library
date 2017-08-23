import { compose, withState, withHandlers } from 'recompose';

/* eslint-disable */
const withFocus = compose(
  withState('hasFocus', 'toggleFoc', false),
  withHandlers({
    toggleFocus: ({ toggleFoc, hasFocus }) => {
      return () => {
        return toggleFoc(!hasFocus)
      }
    }
  })
)

export default withFocus
