import type { Preset } from 'unocss';
import type { Theme } from 'unocss/preset-mini';
import { presetTheme, type PresetThemeOptions } from 'unocss-preset-theme';
import { type ColorInput } from '@ctrl/tinycolor';
import { light } from './light';
import { dark } from './dark';

export interface PresetElementPlusOptions extends Omit<PresetThemeOptions<Theme>, 'theme'> {
  /**
   * Used to generate light theme light colors
   *
   * @default white
   */
  lightLightenColor?: ColorInput;
  /**
   * Used to generate light theme dark colors
   *
   * @default black
   */
  lightDarkenColor?: ColorInput;
  /**
   * Used to generate dark theme light colors
   *
   * @default #141414
   */
  darkLightenColor?: ColorInput;
  /**
   * Used to generate dark theme light colors
   *
   * @default white
   */
  darkDarkenColor?: ColorInput;
  /**
   * Base primary color
   *
   * @default #409eff
   */
  primary?: ColorInput;
  /**
   * Base success color
   *
   * @default #67c23a
   */
  success?: ColorInput;
  /**
   * Base warning color
   *
   * @default #e6a23c
   */
  warning?: ColorInput;
  /**
   * Base error color
   *
   * @default #f56c6c
   */
  error?: ColorInput;
  /**
   * Base danger color
   *
   * @default #f56c6c
   */
  danger?: ColorInput;
  /**
   * Base info color
   *
   * @default #909399
   */
  info?: ColorInput;
}

export function presetElementPlus(options: PresetElementPlusOptions = {}): Preset<Theme> {
  const {
    prefix = '--un-preset-el',
    selectors,
    lightLightenColor = 'white',
    lightDarkenColor = 'black',
    darkLightenColor = '#141414',
    darkDarkenColor = 'white',
    primary = '#409eff',
    success = '#67c23a',
    warning = '#e6a23c',
    error = '#f56c6c',
    danger = '#f56c6c',
    info = '#909399',
  } = options;

  return presetTheme<Theme>({
    prefix,
    selectors,
    theme: {
      light: light({
        lightenColor: lightLightenColor,
        darkenColor: lightDarkenColor,
        primary,
        success,
        warning,
        error,
        danger,
        info,
      }),
      dark: dark({
        lightenColor: darkLightenColor,
        darkenColor: darkDarkenColor,
        primary,
        success,
        warning,
        error,
        danger,
        info,
      }),
    },
  });
}
