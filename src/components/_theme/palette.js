import { rgba } from 'polished'
import colors from "./colors";
import generateColorVariations from './utils/generateColorVariations'

const variations = [{ 'o': null }, { 'dark': 0.08 }, { 'light': 0.08 }, { 'trans': 0.5 }];

const palette = {
  primary: generateColorVariations(colors.yellow, variations),
  secondary: generateColorVariations(colors.blue, variations),
  tertiary: generateColorVariations(colors.grey, variations),
  dark: generateColorVariations(colors.black, variations),
  light: generateColorVariations(colors.white, variations),
  alert: generateColorVariations(colors.red, variations),
  confirm: generateColorVariations(colors.green, variations)
};

function getColor(color, variant) {
  const variationsKey = { 'o': 0, 'dark': 1, 'light': 2, 'trans': 3 };
  return palette[color][variationsKey[variant]];
}

export function primary(variant = "o") {
  return getColor("primary", variant);
}

export function secondary(variant = "o") {
  return getColor("secondary", variant);
}

export function tertiary(variant = "o") {
  return getColor("tertiary", variant);
}

export function dark(variant = "o") {
  return getColor("dark", variant);
}

export function light(variant = "o") {
  return getColor("light", variant);
}

export function alert(variant = "o") {
  return getColor("alert", variant);
}

export function confirm(variant = "o") {
  return getColor("confirm", variant);
}

export function trans(amount, black = true) {
  const color = black ? '#000000' : '#ffffff'
  switch (amount) {
    case 1:
      return rgba(color, 0.2)
    case 2:
      return rgba(color, 0.4)
    case 3:
      return rgba(color, 0.6)
    case 4:
      return rgba(color, 0.8)
    default:
      return rgba(color, 0.5)
  }
}
