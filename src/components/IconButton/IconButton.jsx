import React from 'react'
import { string, node } from 'prop-types'
import getIcon from '../../theme/utils/utils.icons'
import IconButtonIcon from './IconButtonIcon'
import IconButtonButton from './IconButtonButton'

/** Inherit styles and props from the <Button/> component */
const IconButton = props => {
  const iconOnly = !props.children // no children means its an icon only button
  const icon = getIcon(props.icon)

  if (iconOnly && !icon) return null

  return (
    <IconButtonButton {...props} iconOnly={iconOnly}>
      <IconButtonIcon {...props} iconOnly={iconOnly}>
        {icon}
      </IconButtonIcon>
      {props.children}
    </IconButtonButton>
  )
}

IconButton.propTypes = {
  icon: string.isRequired,
  children: node
}

IconButton.defaultProps = {
  children: null
}

export default IconButton
