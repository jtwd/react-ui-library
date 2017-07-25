export default function pseudo(display = 'block', pos = 'absolute', content = '') {
  return `
    content: ${content};
    display: ${display};
    position: ${pos};
  `
}