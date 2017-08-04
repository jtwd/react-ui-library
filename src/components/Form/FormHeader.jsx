import React from 'react'
import {node, bool} from 'prop-types'
import styled from 'styled-components'

import FormControls from '../FormControls'
import { RequiredSymbol } from '../Label/Label.styles'
import {fsSm} from "../_theme/fontSizes"
import {lightRed} from "../_theme/colors"
import {primaryNormal} from "../_theme/units"

const ReqKey = styled.div`
  font-size: ${fsSm};
  color: ${lightRed};
  font-weight: ${primaryNormal};
`

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
  title: node.isRequired,
  reqKey: bool
}

FormHeader.defaultProps = {
  reqKey: false
}

export default FormHeader
