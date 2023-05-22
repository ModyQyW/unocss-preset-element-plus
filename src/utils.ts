import { TinyColor, type ColorInput } from '@ctrl/tinycolor';
import type { Theme } from 'unocss/preset-mini';
import type { PresetElementPlusThemeOptions } from './types';

export const getCssValue = (namespace: string, name: string) => `var(--${namespace}-${name})`;

export const getHexColor = (color: ColorInput) => new TinyColor(color).toHexString();

export const getThemeColorsWithCssVariables = (namespace: string, name: string) => {
  return {
    DEFAULT: getCssValue(namespace, `color-${name}`),
    light: {
      3: getCssValue(namespace, `color-${name}-light-3`),
      5: getCssValue(namespace, `color-${name}-light-5`),
      7: getCssValue(namespace, `color-${name}-light-7`),
      8: getCssValue(namespace, `color-${name}-light-8`),
      9: getCssValue(namespace, `color-${name}-light-9`),
    },
    dark: {
      2: getCssValue(namespace, `color-${name}-dark-2`),
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

    pageBg,
    baseBg,
    overlayBg,
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
        ? getCssValue(namespace, 'text-color-primary')
        : getHexColor(primaryText),
      regularText: preferCssVariables
        ? getCssValue(namespace, 'text-color-regular')
        : getHexColor(regularText),
      secondaryText: preferCssVariables
        ? getCssValue(namespace, 'text-color-secondary')
        : getHexColor(secondaryText),
      placeholderText: preferCssVariables
        ? getCssValue(namespace, 'text-color-placeholder')
        : getHexColor(placeholderText),
      disabledText: preferCssVariables
        ? getCssValue(namespace, 'text-color-disabled')
        : getHexColor(disabledText),

      baseBorder: preferCssVariables
        ? getCssValue(namespace, 'border-color')
        : getHexColor(baseBorder),
      lightBorder: preferCssVariables
        ? getCssValue(namespace, 'border-color-light')
        : getHexColor(lightBorder),
      lighterBorder: preferCssVariables
        ? getCssValue(namespace, 'border-color-lighter')
        : getHexColor(lighterBorder),
      extraLightBorder: preferCssVariables
        ? getCssValue(namespace, 'border-color-extra-light')
        : getHexColor(extraLightBorder),
      darkBorder: preferCssVariables
        ? getCssValue(namespace, 'border-color-dark')
        : getHexColor(darkBorder),
      darkerBorder: preferCssVariables
        ? getCssValue(namespace, 'border-color-darker')
        : getHexColor(darkerBorder),

      baseFill: preferCssVariables ? getCssValue(namespace, 'fill-color') : getHexColor(baseFill),
      lightFill: preferCssVariables
        ? getCssValue(namespace, 'fill-color-light')
        : getHexColor(lightFill),
      lighterFill: preferCssVariables
        ? getCssValue(namespace, 'fill-color-lighter')
        : getHexColor(lighterFill),
      extraLightFill: preferCssVariables
        ? getCssValue(namespace, 'fill-color-extra-light')
        : getHexColor(extraLightFill),
      blankFill: preferCssVariables
        ? getCssValue(namespace, 'fill-color-blank')
        : getHexColor(blankFill),
      darkFill: preferCssVariables
        ? getCssValue(namespace, 'fill-color-dark')
        : getHexColor(darkFill),
      darkerFill: preferCssVariables
        ? getCssValue(namespace, 'fill-color-darker')
        : getHexColor(darkerFill),

      pageBg: preferCssVariables ? getCssValue(namespace, 'bg-color-page') : getHexColor(pageBg),
      baseBg: preferCssVariables ? getCssValue(namespace, 'bg-color') : getHexColor(baseBg),
      overlayBg: preferCssVariables
        ? getCssValue(namespace, 'bg-color-overlay')
        : getHexColor(overlayBg),
    },
  };
};
