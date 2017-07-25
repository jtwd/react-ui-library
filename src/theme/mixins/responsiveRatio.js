import pseudo from './pseudo'

export default function responsiveRatio(x, y, usePseudo = false) {
  const padding = (y / x) + 100

  if (usePseudo) {
    return `
      &::before {
        ${pseudo('block', 'relative')}
        width: 100%;
        padding-top: ${padding}%;
      }
    `
  }
  return `
    padding-top: ${padding}%;
  `
}