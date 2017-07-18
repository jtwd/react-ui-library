import styled from 'styled-components'
import { bool } from 'prop-types'
import Button from '../Button/index'
import { sm, md, lg } from '../../theme/spacers'
import getPropStylesFromTheme from '../../theme/utils/getPropStylesFromTheme'

const tm = {
  iconOnly: {
    default: `padding: ${md};`,
    sm: `padding: ${sm};`,
    lg: `padding: ${lg};`
  }
}

const IconButtonButton = styled(Button)`
  vertical-align: middle;
  ${props => props.iconOnly && !props.large && !props.small && getPropStylesFromTheme(tm, 'iconOnly')}
  ${props => props.iconOnly && props.large && getPropStylesFromTheme(tm, 'iconOnly', 'lg')}
  ${props => !props.iconOnly && props.small && getPropStylesFromTheme(tm, 'iconOnly', 'sm')}
`

IconButtonButton.propTypes = {
  iconOnly: bool
}

export default IconButtonButton
