import styled, { css } from 'styled-components'
import { switchProp, ifProp } from 'styled-tools'
import { Link } from 'react-router-dom'

import { themeProps, mapProp } from '../_theme/utils'
import trimChildren from '../_theme/mixins/trimChildren'
import boxShadowAnimation from '../_theme/mixins/boxShadowAnimation'
import theme from './Button.theme'

const t = themeProps(theme)

export const StyledButton = styled.button`
  border-radius: ${t.borderRadius};
  font-family: ${t.fontFamily};
  font-weight: ${t.fontWeight};
  line-height: ${t.lineHeight};
  ${props => t.uiStyle[props.uiStyle].boxShadow && boxShadowAnimation('all')}
  
  font-size: ${switchProp('uiSize', mapProp('fontSize', t.uiSize))};
  margin: ${switchProp('uiSize', mapProp('margin', t.uiSize))};
  padding: ${ifProp({iconOnly: true},
              switchProp('uiSize', mapProp('iconOnlyPadding', t.uiSize)),
              switchProp('uiSize', mapProp('padding', t.uiSize))
          )};

  background-color: ${switchProp('uiStyle', mapProp('backgroundColor', t.uiStyle))};
  color: ${switchProp('uiStyle', mapProp('color', t.uiStyle))};
  border: ${switchProp('uiStyle', mapProp('border', t.uiStyle))};

  &:focus,
  &:hover {
    background-color: ${switchProp('uiStyle', mapProp('hoverBackgroundColor', t.uiStyle))};
    color: ${switchProp('uiStyle', mapProp('hoverColor', t.uiStyle))};
    border: ${switchProp('uiStyle', mapProp('hoverBorder', t.uiStyle))};
    ${props => props.uiStyle !== 'link' && css`box-shadow: ${t.hoverBoxShadow} ${t.boxShadowColor};`}
    text-decoration: none;
  }

  cursor: pointer;
  display: inline-block;
  min-height: 1rem;
  min-width: 2rem;
  vertical-align: middle;
  text-decoration: none;

  ${trimChildren('hor')};
`

export const IconWrap = styled.span`
  left: ${ifProp({ iconOnly: true },
          switchProp('uiSize', mapProp('iconOnlyLeft', t.uiSize)),
          switchProp('uiSize', mapProp('iconLeft', t.uiSize))
        )};
  top: ${ifProp({ iconOnly: true },
          switchProp('uiSize', mapProp('iconOnlyTop', t.uiSize)),
          switchProp('uiSize', mapProp('iconTop', t.uiSize))
        )};
  margin: ${ifProp({ iconOnly: true },
            '0',
            switchProp('uiSize', mapProp('iconMargin', t.uiSize))
          )};
          
  display: inline-block;
  position: relative;
  vertical-align: middle;
`

export const LinkButton = styled(Link)`
  display: inline-block;
`

export const AButton = styled.a``
