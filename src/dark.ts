import type { Theme } from 'unocss/preset-mini';
import { generate, convert } from './utils';
import type { PresetElementPlusThemeOptions } from './types';

export function getDarkTheme(options: PresetElementPlusThemeOptions): Theme {
  const {
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
      primary: generate(primary, lightenColor, darkenColor),
      success: generate(success, lightenColor, darkenColor),
      warning: generate(warning, lightenColor, darkenColor),
      error: generate(error, lightenColor, darkenColor),
      danger: generate(danger, lightenColor, darkenColor),
      info: generate(info, lightenColor, darkenColor),
      primaryText: convert(primaryText),
      regularText: convert(regularText),
      secondaryText: convert(secondaryText),
      placeholderText: convert(placeholderText),
      disabledText: convert(disabledText),
    },
  };
}
