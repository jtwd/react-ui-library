import WebFont from 'webfontloader'
import { injectGlobal } from 'styled-components'
import { fontFace } from 'polished'

import * as c from '../themes/constants'
import config from '../config'

export const fontStack = (font) => `${font.name}, ${font.fallbacks}`

function formatGoogleFontVersions(versions) {
  const newVersions = []
  versions.forEach((version) => {
    version.styles.forEach((style) => {
      switch (style) {
        case c.THEME_FONT_STYLE_ITALIC:
          newVersions.push(`${version.weight}i`)
          break
        case c.THEME_FONT_STYLE_NORMAL:
          newVersions.push(`${version.weight}`)
          break
        default:
          newVersions.push(`${version.weight}`)
      }
    })
  })
  return `${newVersions.join(',')}`
}

function formatFontFamilyConfig(font, type) {
  switch (type) {
    case c.THEME_FONT_TYPE_GOOGLE:
      return `${font.name}:${formatGoogleFontVersions(font.versions)}`
    case c.THEME_FONT_TYPE_CUSTOM:
      return `${font.name}`
    default:
      return `${font.name}`
  }
}

function normaliseFonts(fontLevels, fontType) {
  const fonts = {}
  Object.keys(fontLevels).forEach(fontLevel => {
    const font = fontLevels[fontLevel]
    if (font.type === fontType) {
      fonts[font.name] = font
    }
  })
  return fonts
}

function getFonts(fontLevels, type) {
  const fonts = normaliseFonts(fontLevels, type)
  const arrFonts = Object.keys(fonts)
  if (!arrFonts.length) return null
  return {
    families: arrFonts.map((family) => formatFontFamilyConfig(fonts[family]))
  }
}


function injectCustomFonts(fontLevels) {
  const fonts = normaliseFonts(fontLevels, c.THEME_FONT_TYPE_CUSTOM)
  
  Object.keys(fonts).forEach((font) => {
    const objFont = fonts[font]
    // eslint-disable-next-line no-unused-expressions
    injectGlobal`${fontFace({
      'fontFamily': objFont.name,
      'fontFilePath': `/assets/themes/${config.theme}/fonts/${objFont.fileName}`,
      'fileFormats': objFont.fileTypes
    })}`
  })
}

export function loadFonts(fonts) {
  const fontConfig = {}
  const googleConfig = getFonts(fonts, c.THEME_FONT_TYPE_GOOGLE)
  const customConfig = getFonts(fonts, c.THEME_FONT_TYPE_CUSTOM)
  
  if (googleConfig) {
    fontConfig.google = googleConfig
  }

  if (customConfig) {
    fontConfig.custom = customConfig
    injectCustomFonts(fonts)
  }

  WebFont.load(fontConfig)
}
