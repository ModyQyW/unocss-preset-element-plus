import { TinyColor, type ColorInput } from '@ctrl/tinycolor';
import type { Theme } from 'unocss/preset-mini';
import type { PresetElementPlusThemeOptions } from './types';

export const getColorWithCssVariable = (namespace: string, name: string) =>
  `var(--${namespace}-${name})`;

export const getColorWithColor = (color: ColorInput) => new TinyColor(color).toHexString();

export const getThemeColorsWithCssVariables = (namespace: string, name: string) => {
  return {
    DEFAULT: getColorWithCssVariable(namespace, `color-${name}`),
    light: {
      3: getColorWithCssVariable(namespace, `color-${name}-light-3`),
      5: getColorWithCssVariable(namespace, `color-${name}-light-5`),
      7: getColorWithCssVariable(namespace, `color-${name}-light-7`),
      8: getColorWithCssVariable(namespace, `color-${name}-light-8`),
      9: getColorWithCssVariable(namespace, `color-${name}-light-9`),
    },
    dark: {
      2: getColorWithCssVariable(namespace, `color-${name}-dark-2`),
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

    baseBorder,
    lightBorder,
    lighterBorder,
    extraLightBorder,
    darkBorder,
    darkerBorder,

    baseFill,
    lightFill,
    lighterFill,
    extraLightFill,
    darkFill,
    darkerFill,
    blankFill,
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

      primaryText: preferCssVariables
        ? getColorWithCssVariable(namespace, 'text-color-primary')
        : getColorWithColor(primaryText),
      regularText: preferCssVariables
        ? getColorWithCssVariable(namespace, 'text-color-regular')
        : getColorWithColor(regularText),
      secondaryText: preferCssVariables
        ? getColorWithCssVariable(namespace, 'text-color-secondary')
        : getColorWithColor(secondaryText),
      placeholderText: preferCssVariables
        ? getColorWithCssVariable(namespace, 'text-color-placeholder')
        : getColorWithColor(placeholderText),
      disabledText: preferCssVariables
        ? getColorWithCssVariable(namespace, 'text-color-disabled')
        : getColorWithColor(disabledText),

      baseBorder: preferCssVariables
        ? getColorWithCssVariable(namespace, 'border-color')
        : getColorWithColor(baseBorder),
      lightBorder: preferCssVariables
        ? getColorWithCssVariable(namespace, 'border-color-light')
        : getColorWithColor(lightBorder),
      lighterBorder: preferCssVariables
        ? getColorWithCssVariable(namespace, 'border-color-lighter')
        : getColorWithColor(lighterBorder),
      extraLightBorder: preferCssVariables
        ? getColorWithCssVariable(namespace, 'border-color-extra-light')
        : getColorWithColor(extraLightBorder),
      darkBorder: preferCssVariables
        ? getColorWithCssVariable(namespace, 'border-color-dark')
        : getColorWithColor(darkBorder),
      darkerBorder: preferCssVariables
        ? getColorWithCssVariable(namespace, 'border-color-darker')
        : getColorWithColor(darkerBorder),

      baseFill: preferCssVariables
        ? getColorWithCssVariable(namespace, 'fill-color')
        : getColorWithColor(baseFill),
      lightFill: preferCssVariables
        ? getColorWithCssVariable(namespace, 'fill-color-light')
        : getColorWithColor(lightFill),
      lighterFill: preferCssVariables
        ? getColorWithCssVariable(namespace, 'fill-color-lighter')
        : getColorWithColor(lighterFill),
      extraLightFill: preferCssVariables
        ? getColorWithCssVariable(namespace, 'fill-color-extra-light')
        : getColorWithColor(extraLightFill),
      blankFill: preferCssVariables
        ? getColorWithCssVariable(namespace, 'fill-color-blank')
        : getColorWithColor(blankFill),
      darkFill: preferCssVariables
        ? getColorWithCssVariable(namespace, 'fill-color-dark')
        : getColorWithColor(darkFill),
      darkerFill: preferCssVariables
        ? getColorWithCssVariable(namespace, 'fill-color-darker')
        : getColorWithColor(darkerFill),
    },
  };
};
