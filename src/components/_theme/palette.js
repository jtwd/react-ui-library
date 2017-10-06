import { lighten, darken, rgba } from "polished";

import colors from "./colors2";

function generateVariations(color, variations) {
  const colorRange = variations.map(variant => {
    const type = Object.keys(variant)[0];
    switch (type) {
      case "l":
        return lighten(variant[type], color.toString());
      case "d":
        return darken(variant[type], color.toString());
      case "a":
        return rgba(color.toString(), variant[type]);
      default:
        return color;
    }
  });
  return colorRange;
}

const variations = [{ o: null }, { d: 0.08 }, { l: 0.08 }, { a: 0.5 }];

const palette = {
  primary: generateVariations(colors.yellow, variations),
  secondary: generateVariations(colors.blue, variations),
  tertiary: generateVariations(colors.grey, variations),
  dark: generateVariations(colors.black, variations),
  light: generateVariations(colors.white, variations)
};

function getColor(color, variant) {
  const variationsKey = { o: 0, d: 1, l: 2, a: 3 };
  return palette[color][variationsKey[variant]];
}

export function primary(variant = "o") {
  return getColor("primary", variant);
}

export function secondary(variant = "o") {
  return getColor("secondary", variant);
}

export function teriary(variant = "o") {
  return getColor("tertiary", variant);
}

export function dark(variant = "o") {
  return getColor("dark", variant);
}

export function light(variant = "o") {
  return getColor("light", variant);
}
