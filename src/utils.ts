import { TinyColor, type ColorInput } from '@ctrl/tinycolor';
import type { Theme } from 'unocss/preset-mini';
import type { PresetElementPlusThemeOptions } from './types';

export const getThemeColorsWithCssVariables = (namespace: string, name: string) => {
  return {
    DEFAULT: `var(--${namespace}-color-${name})`,
    light: {
      3: `var(--${namespace}-color-${name}-light-3)`,
      5: `var(--${namespace}-color-${name}-light-5)`,
      7: `var(--${namespace}-color-${name}-light-7)`,
      8: `var(--${namespace}-color-${name}-light-8)`,
      9: `var(--${namespace}-color-${name}-light-9)`,
    },
    dark: {
      2: `var(--${namespace}-color-${name}-dark-2)`,
    },
  };
};

export const getThemeColorsWithColor = (
  color: ColorInput,
  lightenColor: ColorInput,
  darkenColor: ColorInput,
) => {
  const c = new TinyColor(color);
  const lc = new TinyColor(lightenColor || 'white');
  const dc = new TinyColor(darkenColor || 'black');
  return {
    DEFAULT: c.toHexString(),
    light: Object.fromEntries(
      Array.from({ length: 9 }).map((_, index) => [
        index + 1,
        c.mix(lc, 10 * (index + 1)).toHexString(),
      ]),
    ),
    dark: Object.fromEntries(
      Array.from({ length: 9 }).map((_, index) => [
        index + 1,
        c.mix(dc, 10 * (index + 1)).toHexString(),
      ]),
    ),
  };
};

export const getHexColor = (color: ColorInput) => new TinyColor(color).toHexString();

export const getTheme = (options: PresetElementPlusThemeOptions): Theme => {
  const {
    preferCssVariables,
    namespace,
    primary,
    success,
    warning,
    error,
    danger,
    info,

    lightenColor,
    darkenColor,
    primaryText,
    regularText,
    secondaryText,
    placeholderText,
    disabledText,
  } = options;

  return {
    colors: {
      primary: preferCssVariables
        ? getThemeColorsWithCssVariables(namespace, 'primary')
        : getThemeColorsWithColor(primary, lightenColor, darkenColor),
      success: preferCssVariables
        ? getThemeColorsWithCssVariables(namespace, 'success')
        : getThemeColorsWithColor(success, lightenColor, darkenColor),
      warning: preferCssVariables
        ? getThemeColorsWithCssVariables(namespace, 'warning')
        : getThemeColorsWithColor(warning, lightenColor, darkenColor),
      error: preferCssVariables
        ? getThemeColorsWithCssVariables(namespace, 'error')
        : getThemeColorsWithColor(error, lightenColor, darkenColor),
      danger: preferCssVariables
        ? getThemeColorsWithCssVariables(namespace, 'danger')
        : getThemeColorsWithColor(danger, lightenColor, darkenColor),
      info: preferCssVariables
        ? getThemeColorsWithCssVariables(namespace, 'info')
        : getThemeColorsWithColor(info, lightenColor, darkenColor),

      primaryText: getHexColor(primaryText),
      regularText: getHexColor(regularText),
      secondaryText: getHexColor(secondaryText),
      placeholderText: getHexColor(placeholderText),
      disabledText: getHexColor(disabledText),
    },
  };
};
