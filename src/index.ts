import type { Preset } from 'unocss';
import type { Theme } from 'unocss/preset-mini';
import { presetTheme, type PresetThemeOptions } from 'unocss-preset-theme';

export interface PresetElementPlusOptions extends Omit<PresetThemeOptions<Theme>, 'theme'> {}

export function presetElementPlus(options: PresetElementPlusOptions = {}): Preset<Theme> {
  const { prefix = '--un-preset-element-plus', selectors } = options;
  return presetTheme<Theme>({
    prefix,
    selectors,
    theme: {
      light: {},
      dark: {},
    },
  });
}
