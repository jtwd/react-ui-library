import boxShadowAnimation from '../_theme/mixins/boxShadowAnimation'
import { light, trans, tertiary, secondary, primary, alert } from '../_theme/palette'

const types = {
  default: `
    color: ${light()};
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
    color: ${light()};
    &:hover, &:focus {
      background: ${alert('dark')};
      color: ${light()}
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
      color: ${light()};
      text-shadow: 2px 2px 2px ${trans(4)};
    }
  `
}

export default types
