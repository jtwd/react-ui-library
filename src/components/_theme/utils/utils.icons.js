import icons from '../icons'

export default function getIcon(icon) {
  if (!icon || !icons[icon]) return null
  return icons[icon]()
}
