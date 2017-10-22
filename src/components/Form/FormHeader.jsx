import React from 'react'
import {node, bool} from 'prop-types'
import styled from 'styled-components'

import FormControls from '../FormControls'
import { RequiredSymbol } from '../Label/Label.styles'
import {alert} from "../_theme/palette"
import {primaryNormal} from "../_theme/units"
import { getTheme } from '../_theme/utils'

const fontSizes = getTheme('fontSizes')

const ReqKey = styled.div`
  font-size: ${fontSizes.sm};
  color: ${alert('light')};
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
