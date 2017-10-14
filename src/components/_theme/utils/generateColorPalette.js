import generateColorVariations from './generateColorVariations'

function generateColorPalette (colorObj, variations) {
  const palette = {}
  const colorItems = Object.keys(colorObj)

  colorItems.forEach((item) => {
    palette[item] = generateColorVariations(colorObj[item], variations)
  })

  return palette
}

export function variationsKey(variations) {
  const key = {}
  variations.forEach((objVariant, index) => {
    const variantKey = Object.keys(objVariant)[0]
    key[variantKey] = index
  })
  return key
}

export default generateColorPalette