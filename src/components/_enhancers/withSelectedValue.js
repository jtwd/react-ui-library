import { compose, withState, withHandlers } from 'recompose';

function getSelectedValue(props) {
  return props.value
}

/* eslint-disable */
const withSelectedValue = compose(
  withState('selectedValue', 'selectValue', (props) => getSelectedValue(props)),
  withHandlers({
    updateSelected: ({ selectValue, newValue }) => {
      return () => {
        return selectValue(newValue)
      }
    }
  })
)

export default withSelectedValue
