import { presetTheme } from 'unocss-preset-theme';
import type { Preset } from 'unocss';
import type { Theme } from 'unocss/preset-mini';
import { getTheme } from './utils';
import type { PresetElementPlusThemeOptions, PresetElementPlusUserOptions } from './types';

export function presetElementPlus(options: PresetElementPlusUserOptions = {}): Preset<Theme> {
  const {
    prefix = '--un-preset-el',
    selectors,

    preferCssVariables = true,
    namespace = 'el',
    primary = '#409eff',
    success = '#67c23a',
    warning = '#e6a23c',
    error = '#f56c6c',
    danger = '#f56c6c',
    info = '#909399',

    light,
    dark,
  } = options;

  const commonOptions = {
    preferCssVariables,
    namespace,
    primary,
    success,
    warning,
    error,
    danger,
    info,
  };

  const lightThemeOptions: PresetElementPlusThemeOptions = {
    ...commonOptions,
    lightenColor: 'white',
    darkenColor: 'black',
    primaryText: '#303133',
    regularText: '#606266',
    secondaryText: '#909399',
    placeholderText: '#a8abb2',
    disabledText: '#c0c4cc',
    ...light,
  };

  const darkThemeOptions: PresetElementPlusThemeOptions = {
    ...commonOptions,
    lightenColor: '#141414',
    darkenColor: 'white',
    primaryText: '#e5eaf3',
    regularText: '#cfd3dc',
    secondaryText: '#a3a6ad',
    placeholderText: '#8d9095',
    disabledText: '#6c6e72',
    ...dark,
  };

  return presetTheme<Theme>({
    prefix,
    selectors,
    theme: {
      light: getTheme(lightThemeOptions),
      dark: getTheme(darkThemeOptions),
    },
  });
}
