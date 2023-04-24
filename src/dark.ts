import type { Theme } from 'unocss/preset-mini';
import { type ColorInput } from '@ctrl/tinycolor';
import { generate } from './utils';

export interface PresetElementPlusDarkOptions {
  /**
   * Used to generate dark theme light colors
   *
   * @default #141414
   */
  lightenColor?: ColorInput;
  /**
   * Used to generate dark theme dark colors
   *
   * @default white
   */
  darkenColor?: ColorInput;
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

export function dark(options: PresetElementPlusDarkOptions = {}): Theme {
  const {
    lightenColor = 'white',
    darkenColor = 'black',
    primary = '#409eff',
    success = '#67c23a',
    warning = '#e6a23c',
    error = '#f56c6c',
    danger = '#f56c6c',
    info = '#909399',
  } = options;

  return {
    colors: {
      primary: generate(primary, lightenColor, darkenColor),
      success: generate(success, lightenColor, darkenColor),
      warning: generate(warning, lightenColor, darkenColor),
      error: generate(error, lightenColor, darkenColor),
      danger: generate(danger, lightenColor, darkenColor),
      info: generate(info, lightenColor, darkenColor),
    },
  };
}