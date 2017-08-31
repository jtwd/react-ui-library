import { compose, withState, withHandlers } from 'recompose';

import getSelectedValues from '../_theme/utils/getSelectedValues'

const withSelectedValues = compose(
  withState('selectedValues', 'updateSelectedValues', props => getSelectedValues(props.list))
)

export default withSelectedValues