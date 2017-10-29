import React from 'react'
import { string, bool } from 'prop-types'
import styled from 'styled-components'

import pseudo from '../_theme/mixins/pseudo'
import { themeProps } from '../_theme/utils'
import theme from './Required.theme'

const th = themeProps(theme)

const Symbol = styled.span`
color: ${th.color};
font-size: ${th.keyFontSize};
font-weight: ${th.keyFontWeight};
text-shadow: ${th.textShadow};

&::before {
  ${props => pseudo('inline-block', 'relative', `${props.symbol}`)}
  font-size: ${th.symbolFontSize};
  line-height: 1;
  font-weight: ${th.symbolFontWeight};
  padding-right: ${th.symbolPaddingRight};
`


function Required ({ isKey, symbol, copy }) {
  const props = { 
    isKey, 
    symbol, 
    copy,
    title: !isKey ? copy : null
  }
  const innerText = isKey ? copy : ''
  return (
    <Symbol {...props}>{innerText}</Symbol>
  )
}

Required.propTypes = {
  symbol: string,
  copy: string,
  isKey: bool
}

Required.defaultProps = {
  symbol: '*',
  copy: 'Required field',
  isKey: false
}

export default Required
