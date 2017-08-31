import { compose, withState, withHandlers } from 'recompose';

function getSelectedValue(props) {
  if (!props.value) return null
  return props.value
}

/* eslint-disable */
const withSelectedValue = compose(
  withState('value', 'updateValue', (props) => getSelectedValue(props)),
  withHandlers({
    handleClick: props => (val, handleChange) => event => {
      if(val !== props.value) {
        props.updateValue(val)
        handleChange(val)
      }
    }
  })
)

export default withSelectedValue
