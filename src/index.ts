import { presetTheme } from 'unocss-preset-theme';
import type { Preset } from 'unocss';
import type { Theme } from 'unocss/preset-uno';
import { getTheme } from './utils';
import type { PresetElementPlusUserOptions } from './types';

export function presetElementPlus(userOptions: PresetElementPlusUserOptions = {}): Preset<Theme> {
  const { prefix = '--un-preset-el', selectors } = userOptions;

  return presetTheme<Theme>({
    prefix,
    selectors,
    theme: {
      light: getTheme(userOptions, 'light'),
      dark: getTheme(userOptions, 'dark'),
    },
  });
}
