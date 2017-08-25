export default function buildKey(group, id) {
  return `${group}_${id.replace(' ', '').toLowerCase()}`
}
