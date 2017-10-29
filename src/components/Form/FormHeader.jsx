import React from 'react'
import { node, bool } from 'prop-types'

import FormControls from '../FormControls'
import Required from '../FormRequired'

/** Form header component. Uses: FormControls, RequireSymbol. Gets inserted into the Panel header of the Form component. Optionally displays the Required Field key */
function FormHeader({title, reqKey}) {
  return (
    <FormControls align='ends'>
      {title}
      {reqKey && (
        <Required isKey />
      )}
    </FormControls>
  )
}

FormHeader.propTypes = {
  /** Title of form */
  title: node.isRequired,
  /** Show required key */
  reqKey: bool
}

FormHeader.defaultProps = {
  reqKey: false
}

export default FormHeader
