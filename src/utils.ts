import { TinyColor, type ColorInput } from '@ctrl/tinycolor';
import type { Theme } from 'unocss/preset-mini';
import type {
  PresetElementPlusUserOptions,
  PresetElementPlusThemeOptions,
  PresetElementPlusThemeName,
} from './types';
import { defaults } from './defaults';

export const getOptionValue = <T = string | number | boolean | string[] | ColorInput>(
  userOptions: PresetElementPlusUserOptions,
  themeName: PresetElementPlusThemeName,
  key: keyof PresetElementPlusThemeOptions,
) => (userOptions[themeName]?.[key] ?? userOptions[key] ?? defaults[themeName][key]) as T;

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

export const getTheme = (
  userOptions: PresetElementPlusUserOptions,
  themeName: PresetElementPlusThemeName,
): Theme => {
  const { preferCssVariables = true, namespace = 'el' } = userOptions;

  const lightenColor = getOptionValue<ColorInput>(
    userOptions,
    themeName,
    'lightenColor',
  ) as ColorInput;
  const darkenColor = getOptionValue<ColorInput>(userOptions, themeName, 'darkenColor');

  const primary = preferCssVariables
    ? getThemeColorsWithCssVariables(namespace, 'primary')
    : getThemeColorsWithColor(
        getOptionValue(userOptions, themeName, 'primary'),
        lightenColor,
        darkenColor,
      );
  const success = preferCssVariables
    ? getThemeColorsWithCssVariables(namespace, 'success')
    : getThemeColorsWithColor(
        getOptionValue(userOptions, themeName, 'success'),
        lightenColor,
        darkenColor,
      );
  const warning = preferCssVariables
    ? getThemeColorsWithCssVariables(namespace, 'warning')
    : getThemeColorsWithColor(
        getOptionValue(userOptions, themeName, 'warning'),
        lightenColor,
        darkenColor,
      );
  const error = preferCssVariables
    ? getThemeColorsWithCssVariables(namespace, 'error')
    : getThemeColorsWithColor(
        getOptionValue(userOptions, themeName, 'error'),
        lightenColor,
        darkenColor,
      );
  const danger = preferCssVariables
    ? getThemeColorsWithCssVariables(namespace, 'danger')
    : getThemeColorsWithColor(
        getOptionValue(userOptions, themeName, 'danger'),
        lightenColor,
        darkenColor,
      );
  const info = preferCssVariables
    ? getThemeColorsWithCssVariables(namespace, 'info')
    : getThemeColorsWithColor(
        getOptionValue(userOptions, themeName, 'info'),
        lightenColor,
        darkenColor,
      );

  const primaryText = preferCssVariables
    ? getCssValue(namespace, 'text-color-primary')
    : getHexColor(getOptionValue(userOptions, themeName, 'primaryText'));
  const regularText = preferCssVariables
    ? getCssValue(namespace, 'text-color-regular')
    : getHexColor(getOptionValue(userOptions, themeName, 'regularText'));
  const secondaryText = preferCssVariables
    ? getCssValue(namespace, 'text-color-secondary')
    : getHexColor(getOptionValue(userOptions, themeName, 'secondaryText'));
  const placeholderText = preferCssVariables
    ? getCssValue(namespace, 'text-color-placeholder')
    : getHexColor(getOptionValue(userOptions, themeName, 'placeholderText'));
  const disabledText = preferCssVariables
    ? getCssValue(namespace, 'text-color-disabled')
    : getHexColor(getOptionValue(userOptions, themeName, 'disabledText'));

  const baseBorder = preferCssVariables
    ? getCssValue(namespace, 'border-color')
    : getHexColor(getOptionValue(userOptions, themeName, 'baseBorder'));
  const lightBorder = preferCssVariables
    ? getCssValue(namespace, 'border-color-light')
    : getHexColor(getOptionValue(userOptions, themeName, 'lightBorder'));
  const lighterBorder = preferCssVariables
    ? getCssValue(namespace, 'border-color-lighter')
    : getHexColor(getOptionValue(userOptions, themeName, 'lighterBorder'));
  const extraLightBorder = preferCssVariables
    ? getCssValue(namespace, 'border-color-extra-light')
    : getHexColor(getOptionValue(userOptions, themeName, 'extraLightBorder'));
  const darkBorder = preferCssVariables
    ? getCssValue(namespace, 'border-color-dark')
    : getHexColor(getOptionValue(userOptions, themeName, 'darkBorder'));
  const darkerBorder = preferCssVariables
    ? getCssValue(namespace, 'border-color-darker')
    : getHexColor(getOptionValue(userOptions, themeName, 'darkerBorder'));

  const baseFill = preferCssVariables
    ? getCssValue(namespace, 'fill-color')
    : getHexColor(getOptionValue(userOptions, themeName, 'baseFill'));
  const lightFill = preferCssVariables
    ? getCssValue(namespace, 'fill-color-light')
    : getHexColor(getOptionValue(userOptions, themeName, 'lightFill'));
  const lighterFill = preferCssVariables
    ? getCssValue(namespace, 'fill-color-lighter')
    : getHexColor(getOptionValue(userOptions, themeName, 'lighterFill'));
  const extraLightFill = preferCssVariables
    ? getCssValue(namespace, 'fill-color-extra-light')
    : getHexColor(getOptionValue(userOptions, themeName, 'extraLightFill'));
  const blankFill = preferCssVariables
    ? getCssValue(namespace, 'fill-color-blank')
    : getHexColor(getOptionValue(userOptions, themeName, 'blankFill'));
  const darkFill = preferCssVariables
    ? getCssValue(namespace, 'fill-color-dark')
    : getHexColor(getOptionValue(userOptions, themeName, 'darkFill'));
  const darkerFill = preferCssVariables
    ? getCssValue(namespace, 'fill-color-darker')
    : getHexColor(getOptionValue(userOptions, themeName, 'darkerFill'));

  const pageBg = preferCssVariables
    ? getCssValue(namespace, 'bg-color-page')
    : getHexColor(getOptionValue(userOptions, themeName, 'pageBg'));
  const baseBg = preferCssVariables
    ? getCssValue(namespace, 'bg-color')
    : getHexColor(getOptionValue(userOptions, themeName, 'baseBg'));
  const overlayBg = preferCssVariables
    ? getCssValue(namespace, 'bg-color-overlay')
    : getHexColor(getOptionValue(userOptions, themeName, 'overlayBg'));

  const overrideShadow = getOptionValue<boolean | string[]>(
    userOptions,
    themeName,
    'overrideShadow',
  );
  const baseShadow = preferCssVariables
    ? getCssValue(namespace, 'box-shadow')
    : getOptionValue<string | string[]>(userOptions, themeName, 'baseShadow');
  const lightShadow = preferCssVariables
    ? getCssValue(namespace, 'box-shadow-light')
    : getOptionValue<string | string[]>(userOptions, themeName, 'lightShadow');
  const lighterShadow = preferCssVariables
    ? getCssValue(namespace, 'box-shadow-lighter')
    : getOptionValue<string | string[]>(userOptions, themeName, 'lighterShadow');
  const darkShadow = preferCssVariables
    ? getCssValue(namespace, 'box-shadow-dark')
    : getOptionValue<string | string[]>(userOptions, themeName, 'darkShadow');
  const boxShadow: Record<string, string | string[]> = { base: baseShadow };
  const boxShadowMapping: Record<string, string | string[]> = {
    light: lightShadow,
    lighter: lighterShadow,
    dark: darkShadow,
    xs: lighterShadow,
    sm: lightShadow,
    md: baseShadow,
    lg: darkShadow,
  };
  if (Array.isArray(overrideShadow)) {
    for (const item of overrideShadow) {
      if (boxShadowMapping[item]) boxShadow[item] = boxShadowMapping[item];
    }
  } else if (overrideShadow) {
    Object.assign(boxShadow, boxShadowMapping);
  }

  return {
    colors: {
      primary,
      success,
      warning,
      error,
      danger,
      info,

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
    },

    boxShadow,

    fontSize,
  };
};
