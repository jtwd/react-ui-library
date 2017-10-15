import { lighten, darken, rgba, grayscale } from "polished";
import * as c from '../themes/constants'

function generateColorVariations(color, variations = {}) {
  const colorRange = variations.map(variant => {
    const type = Object.keys(variant)[0];
    switch (type) {
      case c.THEME_COLOR_VARIATION_LIGHT:
        return lighten(variant[type], color.toString());
      case c.THEME_COLOR_VARIATION_DARK:
        return darken(variant[type], color.toString());
      case c.THEME_COLOR_VARIATION_TRANS:
        return rgba(color.toString(), variant[type]);
      case c.THEME_COLOR_VARIATION_GRAYSCALE:
        return grayscale(color.toString());
      default:
        return color;
    }
  });
  return colorRange;
}

export default generateColorVariations
