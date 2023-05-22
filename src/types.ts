import { type PresetThemeOptions } from 'unocss-preset-theme';
import { type ColorInput } from '@ctrl/tinycolor';
import type { Theme } from 'unocss/preset-mini';

export interface PresetElementPlusUserCommonOptions {
  /**
   * Prefer existed css variables or not.
   *
   * If true, use element-plus css variables and you have to follow element-plus design standards.
   *
   * If false, use generated variables and you can use more variables away from element-plus design
   * standards.
   *
   * @default true
   */
  preferCssVariables?: boolean;
  /**
   * The namesapce used to find css variables. Used when preferCssVariables is true.
   *
   * @default el
   */
  namespace?: string;
  /**
   * Base primary color. Used when preferCssVariables is false.
   *
   * @default #409eff
   */
  primary?: ColorInput;
  /**
   * Base success color. Used when preferCssVariables is false.
   *
   * @default #67c23a
   */
  success?: ColorInput;
  /**
   * Base warning color. Used when preferCssVariables is false.
   *
   * @default #e6a23c
   */
  warning?: ColorInput;
  /**
   * Base error color. Used when preferCssVariables is false.
   *
   * @default #f56c6c
   */
  error?: ColorInput;
  /**
   * Base danger color. Used when preferCssVariables is false.
   *
   * @default #f56c6c
   */
  danger?: ColorInput;
  /**
   * Base info color. Used when preferCssVariables is false.
   *
   * @default #909399
   */
  info?: ColorInput;
}

export interface PresetElementPlusUserThemeOptions {
  /**
   * Used to generate theme light colors. Used when preferCssVariables is false.
   *
   * By default white for light theme, #141414 for dark theme
   */
  lightenColor?: ColorInput;
  /**
   * Used to generate theme dark colors. Used when preferCssVariables is false.
   *
   * By default black for light theme, white for dark theme
   */
  darkenColor?: ColorInput;
  /**
   * Primary text color. Used when preferCssVariables is false.
   *
   * By default #303133 for light theme, #e5eaf3 for dark theme
   */
  primaryText?: ColorInput;
  /**
   * Regular text color. Used when preferCssVariables is false.
   *
   * By default #606266 for light theme, #cfd3dc for dark theme
   */
  regularText?: ColorInput;
  /**
   * Secondary text color. Used when preferCssVariables is false.
   *
   * By default #909399 for light theme, #a3a6ad for dark theme
   */
  secondaryText?: ColorInput;
  /**
   * Placeholder text color. Used when preferCssVariables is false.
   *
   * By default #a8abb2 for light theme, #8d9095 for dark theme
   */
  placeholderText?: ColorInput;
  /**
   * Disabled text color. Used when preferCssVariables is false.
   *
   * By default #c0c4cc for light theme, #6c6e72 for dark theme
   */
  disabledText?: ColorInput;
  /**
   * Base border color. Used when preferCssVariables is false.
   *
   * By default #dcdfe6 for light theme, #4c4d4f for dark theme
   */
  baseBorder?: ColorInput;
  /**
   * Light border color. Used when preferCssVariables is false.
   *
   * By default #e4e7ed for light theme, #414243 for dark theme
   */
  lightBorder?: ColorInput;
  /**
   * Lighter border color. Used when preferCssVariables is false.
   *
   * By default #ebeef5 for light theme, #363637 for dark theme
   */
  lighterBorder?: ColorInput;
  /**
   * Extra light border color. Used when preferCssVariables is false.
   *
   * By default #f2f6fc for light theme, #2b2b2c for dark theme
   */
  extraLightBorder?: ColorInput;
  /**
   * Dark border color. Used when preferCssVariables is false.
   *
   * By default #d4d7de for light theme, #58585b for dark theme
   */
  darkBorder?: ColorInput;
  /**
   * Darker border color. Used when preferCssVariables is false.
   *
   * By default #cdd0d6 for light theme, #636466 for dark theme
   */
  darkerBorder?: ColorInput;
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
