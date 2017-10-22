import React from 'react'
import { node, string, oneOf } from 'prop-types'

import Icon from '../Icon'
import { StyledButton, IconWrap, LinkButton, AButton } from './Button.styles'
import { getIcon } from '../_theme/utils'

/** UI Buttons - Uses: Icon - Choice of sizes and types and icons */
function Button ({ uiStyle, uiSize, icon, type, children, to, href, ...props }) {
  const iconOnly = (children === null)
  const validIcon = (getIcon(icon) !== null)
  const btnProps = { uiStyle, uiSize, icon, iconOnly, ...props }

  if (iconOnly && !validIcon) return null // don't show if there is no valid contents

  let Component = StyledButton  
  if (href) {
    Component = StyledButton.withComponent(AButton)
    btnProps.href = href
  } else if (to) {
    Component = StyledButton.withComponent(LinkButton)
    btnProps.to = to
  } else {
    btnProps.type = type
  }

  return (
    <Component {...btnProps}>
      {validIcon && (
        <IconWrap icon={icon} iconOnly={iconOnly} uiSize={uiSize} uiStyle={uiStyle}>
          <Icon icon={icon} />
        </IconWrap>
      )}
      {children}
    </Component>
  )
}

Button.propTypes = {
  /** Button style (primary, secondary, danger, default) */
  uiStyle: oneOf(['primary', 'secondary', 'danger', 'link', 'default']),
  /** Button size (lg, sm, default) */
  uiSize: oneOf(['large', 'small', 'default']),
  /** Name of Icon */
  icon: string,
  /** Type of button - button, submit, reset */
  type: oneOf(['button', 'submit', 'reset']),
  /** Contents of button */
  children: node,
  /** URL is supplied if you want the button to act as an A tag */
  href: string,
  /** to is supplied if you want the button to act as a Router Link component */
  to: string
}

Button.defaultProps = {
  uiStyle: 'default',
  uiSize: 'default',
  icon: null,
  type: 'button',
  children: null,
  to: null,
  href: null
}

export default Button
