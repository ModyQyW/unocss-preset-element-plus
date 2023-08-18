import { presetTheme } from 'unocss-preset-theme';
import type { Preset } from 'unocss';
import type { Theme } from 'unocss/preset-uno';
import { getTheme } from './utils';
import type { PresetElementPlusUserOptions } from './types';

export function presetElementPlus(userOptions: PresetElementPlusUserOptions = {}) {
  const {
    prefix = '--un-preset-el',
    selectors,
    breakpoints = {
      xs: '0px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1920px',
      '2xl': '2560px',
      xxl: '2560px',
    },
  } = userOptions;

  const preset = presetTheme<Theme>({
    prefix,
    selectors,
    theme: {
      light: getTheme(userOptions, 'light'),
      dark: getTheme(userOptions, 'dark'),
    },
  });
  const theme: Preset<Theme> = {
    ...preset,
    theme: {
      ...preset.theme,
      breakpoints,
    },
  };
  return theme;
}
