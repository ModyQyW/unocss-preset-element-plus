import { type PresetThemeOptions } from 'unocss-preset-theme';
import { type ColorInput } from '@ctrl/tinycolor';
import type { Theme } from 'unocss/preset-mini';

export interface PresetElementPlusUserCommonOptions {
  /**
   * Prefer existed css variables or not.
   *
   * If true, will try to use css variables first, and you don't need set anything else. You must
   * follow element-plus design standards then.
   *
   * @default true
   */
  preferCssVariables?: boolean;
  /**
   * The namesapce used to find css variables. This will work when preferCssVariables is true.
   *
   * @default el
   */
  namespace?: string;
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

export interface PresetElementPlusUserThemeOptions {
  /**
   * Used to generate theme light colors
   *
   * By default white for light theme, #141414 for dark theme
   */
  lightenColor?: ColorInput;
  /**
   * Used to generate theme dark colors
   *
   * By default black for light theme, white for dark theme
   */
  darkenColor?: ColorInput;
  /**
   * Primary text color
   *
   * By default #303133 for light theme, #e5eaf3 for dark theme
   */
  primaryText?: ColorInput;
  /**
   * Regular text color
   *
   * By default #606266 for light theme, #cfd3dc for dark theme
   */
  regularText?: ColorInput;
  /**
   * Secondary text color
   *
   * By default #909399 for light theme, #a3a6ad for dark theme
   */
  secondaryText?: ColorInput;
  /**
   * Placeholder text color
   *
   * By default #a8abb2 for light theme, #8d9095 for dark theme
   */
  placeholderText?: ColorInput;
  /**
   * Disabled text color
   *
   * By default #c0c4cc for light theme, #6c6e72 for dark theme
   */
  disabledText?: ColorInput;
}

export interface PresetElementPlusUserOptions
  extends Omit<PresetThemeOptions<Theme>, 'theme'>,
    PresetElementPlusUserCommonOptions {
  /** Light theme */
  light?: PresetElementPlusUserThemeOptions;
  /** Dark theme */
  dark?: PresetElementPlusUserThemeOptions;
}

export type PresetElementPlusThemeOptions = Required<
  PresetElementPlusUserCommonOptions & PresetElementPlusUserThemeOptions
>;

export type PresetElementPlusOptions = Required<PresetElementPlusUserOptions>;
