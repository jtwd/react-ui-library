import { compose, withState, withHandlers } from 'recompose';

function getCheckedState(props) {
  return props.isChecked
}

/* eslint-disable */
const withChecked = compose(
  withState('isChecked', 'toggleCheck', (props) => getCheckedState(props)),
  withHandlers({
    toggleChecked: ({ toggleCheck, isChecked }) => {
      return () => {
        return toggleCheck(!isChecked)
      }
    }
  })
)

export default withChecked
