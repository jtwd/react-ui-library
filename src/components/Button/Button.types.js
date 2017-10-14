import boxShadowAnimation from '../_theme/mixins/boxShadowAnimation'
import { fore, trans, tertiary, secondary, primary, alert } from '../_theme/palette'

const types = {
  default: `
    color: ${fore()};
    background: ${tertiary()};
    &:hover, &:focus {
      background: ${tertiary('dark')};
    }
    ${boxShadowAnimation('all')}
  `,
  primary: `
    background: ${primary()};
    color: ${secondary()};
    &:hover, &:focus {
      background: ${primary('dark')};
      color: ${secondary('dark')}
    }
    ${boxShadowAnimation('all')}
  `,
  secondary: `
    background: ${secondary()};
    color: ${primary()};
    &:hover, &:focus {
      background: ${secondary('dark')};
      color: ${primary('dark')}
    }
    ${boxShadowAnimation('all')}
  `,
  danger: `
    background: ${alert()};
    color: ${fore()};
    &:hover, &:focus {
      background: ${alert('dark')};
      color: ${fore()}
    }
    ${boxShadowAnimation('all')}
  `,
  link: `
    background: transparent;
    color: ${primary()};
    padding-left: 0;
    padding-right: 0;
    box-shadow: none;
    &:hover, &:focus {
      background: transparent;
      color: ${fore()};
      text-shadow: 2px 2px 2px ${trans(4)};
    }
  `
}

export default types
