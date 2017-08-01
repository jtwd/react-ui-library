/**
 * Returns a style string to trim margin from children either horizontally or vertically
 * @param {string} dir - Direction to trim - 'hor'
 * @returns {string} - A style string for styled-components
 */
export default function trimChildren (dir = 'hor') {
  if (dir === 'ver') {
    return `
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    `
  }
  if (dir === 'hor') {
    return `
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    `
  }
  return `
    &:first-child {
      margin-top: 0;
      margin-left: 0;
    }
    &:last-child {
      margin-bottom: 0;
      margin-right: 0;
    }
  `
}