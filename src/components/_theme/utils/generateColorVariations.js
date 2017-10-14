import { lighten, darken, rgba } from "polished";

function generateColorVariations(color, variations = {}) {
  const colorRange = variations.map(variant => {
    const type = Object.keys(variant)[0];
    switch (type) {
      case "light":
        return lighten(variant[type], color.toString());
      case "dark":
        return darken(variant[type], color.toString());
      case "trans":
        return rgba(color.toString(), variant[type]);
      default:
        return color;
    }
  });
  return colorRange;
}

export default generateColorVariations
