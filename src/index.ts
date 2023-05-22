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
    baseBorder: '#dcdfe6',
    lightBorder: '#e4e7ed',
    lighterBorder: '#ebeef5',
    extraLightBorder: '#f2f6fc',
    darkBorder: '#d4d7de',
    darkerBorder: '#cdd0d6',
    baseFill: '#f0f2f5',
    lightFill: '#f5f7fa',
    lighterFill: '#fafafa',
    extraLightFill: '#fafcff',
    blankFill: '#ffffff',
    darkFill: '#ebedf0',
    darkerFill: '#e6e8eb',
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
    baseBorder: '#4c4d4f',
    lightBorder: '#414243',
    lighterBorder: '#363637',
    extraLightBorder: '#2b2b2c',
    darkBorder: '#58585b',
    darkerBorder: '#636466',
    baseFill: '#303030',
    lightFill: '#262727',
    lighterFill: '#1d1d1d',
    extraLightFill: '#191919',
    blankFill: 'transparent',
    darkFill: '#39393a',
    darkerFill: '#424243',
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
