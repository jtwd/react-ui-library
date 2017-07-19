import styled from 'styled-components'
import { bool } from 'prop-types'
import { fsMd, fsLg, fsHuge } from '../../theme/fontSizes'
import { xxs, xs, sm } from '../../theme/spacers'
import getPropStylesFromTheme from '../../theme/utils/getPropStylesFromTheme'

const tm = {
  iconOnly: {
    default: `right: 0;`
  },
  sizes: {
    default: `
      font-size: ${fsLg};
      right: ${xs};
    `,
    sm: `
      font-size: ${fsMd};
      right: ${xxs};
    `,
    lg: `
      font-size: ${fsHuge};
      right: ${sm};
      margin-top: -.25rem;
   `
  }
}

const IconButtonIcon = styled.span`
  display: inline-block;
  position: relative;
  ${props => !props.large && !props.small && getPropStylesFromTheme(tm, 'sizes', 'default')} ${props => props.small && getPropStylesFromTheme(tm, 'sizes', 'sm')} ${props =>
      props.large && getPropStylesFromTheme(tm, 'sizes', 'lg')} ${props => props.iconOnly && getPropStylesFromTheme(tm, 'iconOnly')};
`

IconButtonIcon.propTypes = {
  iconOnly: bool
}

export default IconButtonIcon
