import React from 'react'
import {node, bool} from 'prop-types'
import styled from 'styled-components'

import FormControls from '../FormControls'
import { RequiredSymbol } from '../Label/Label.styles'
import fontSizes from "../_theme/fontSizes"
import {confirm} from "../_theme/palette"
import {primaryNormal} from "../_theme/units"

const ReqKey = styled.div`
  font-size: ${fontSizes.sm};
  color: ${confirm('light')};
  font-weight: ${primaryNormal};
`

/** Form header component. Uses: FormControls, RequireSymbol. Gets inserted into the Panel header of the Form component. Optionally displays the Required Field key */
function FormHeader({title, reqKey}) {
  return (
    <FormControls align='ends'>
      {title}
      {reqKey && (
        <ReqKey>
          <RequiredSymbol />
          Required
        </ReqKey>
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
