import { type PresetThemeOptions } from 'unocss-preset-theme';
import { type ColorInput } from '@ctrl/tinycolor';
import type { Theme } from 'unocss/preset-mini';

export interface PresetElementPlusUserThemeOptions {
  /**
   * Base primary color. Used when `preferCssVariables` is false. Defaults to `#409eff`.
   *
   * @default #409eff
   */
  primary?: ColorInput;
  /**
   * Base success color. Used when `preferCssVariables` is false. Defaults to `#67c23a`.
   *
   * @default #67c23a
   */
  success?: ColorInput;
  /**
   * Base warning color. Used when `preferCssVariables` is false. Defaults to `#e6a23c`.
   *
   * @default #e6a23c
   */
  warning?: ColorInput;
  /**
   * Base error color. Used when `preferCssVariables` is false. Defaults to `#f56c6c`.
   *
   * @default #f56c6c
   */
  error?: ColorInput;
  /**
   * Base danger color. Used when `preferCssVariables` is false. Defaults to `#f56c6c`.
   *
   * @default #f56c6c
   */
  danger?: ColorInput;
  /**
   * Base info color. Used when `preferCssVariables` is false. Defaults to `#909399`.
   *
   * @default #909399
   */
  info?: ColorInput;
  /**
   * Used to generate theme light colors. Used when `preferCssVariables` is false.
   *
   * By default `white` for light theme, `#141414` for dark theme.
   */
  lightenColor?: ColorInput;
  /**
   * Used to generate theme dark colors. Used when `preferCssVariables` is false.
   *
   * By default `black` for light theme, `white` for dark theme.
   */
  darkenColor?: ColorInput;
  /**
   * Primary text color. Used when `preferCssVariables` is false.
   *
   * By default `#303133` for light theme, `#e5eaf3` for dark theme.
   */
  primaryText?: ColorInput;
  /**
   * Regular text color. Used when `preferCssVariables` is false.
   *
   * By default `#606266` for light theme, `#cfd3dc` for dark theme.
   */
  regularText?: ColorInput;
  /**
   * Secondary text color. Used when `preferCssVariables` is false.
   *
   * By default `#909399` for light theme, `#a3a6ad` for dark theme.
   */
  secondaryText?: ColorInput;
  /**
   * Placeholder text color. Used when `preferCssVariables` is false.
   *
   * By default `#a8abb2` for light theme, `#8d9095` for dark theme.
   */
  placeholderText?: ColorInput;
  /**
   * Disabled text color. Used when `preferCssVariables` is false.
   *
   * By default `#c0c4cc` for light theme, `#6c6e72` for dark theme.
   */
  disabledText?: ColorInput;
  /**
   * Base border color. Used when `preferCssVariables` is false.
   *
   * By default `#dcdfe6` for light theme, `#4c4d4f` for dark theme.
   */
  baseBorder?: ColorInput;
  /**
   * Light border color. Used when `preferCssVariables` is false.
   *
   * By default `#e4e7ed` for light theme, `#414243` for dark theme.
   */
  lightBorder?: ColorInput;
  /**
   * Lighter border color. Used when `preferCssVariables` is false.
   *
   * By default `#ebeef5` for light theme, `#363637` for dark theme.
   */
  lighterBorder?: ColorInput;
  /**
   * Extra light border color. Used when `preferCssVariables` is false.
   *
   * By default `#f2f6fc` for light theme, `#2b2b2c` for dark theme.
   */
  extraLightBorder?: ColorInput;
  /**
   * Dark border color. Used when `preferCssVariables` is false.
   *
   * By default `#d4d7de` for light theme, `#58585b` for dark theme.
   */
  darkBorder?: ColorInput;
  /**
   * Darker border color. Used when `preferCssVariables` is false.
   *
   * By default `#cdd0d6` for light theme, `#636466` for dark theme.
   */
  darkerBorder?: ColorInput;
  /**
   * Base fill color. Used when `preferCssVariables` is false.
   *
   * By default `#f0f2f5` for light theme, `#303030` for dark theme.
   */
  baseFill?: ColorInput;
  /**
   * light fill color. Used when `preferCssVariables` is false.
   *
   * By default `#f5f7fa` for light theme, `#262727` for dark theme.
   */
  lightFill?: ColorInput;
  /**
   * Lighter fill color. Used when `preferCssVariables` is false.
   *
   * By default `#fafafa` for light theme, `#1d1d1d` for dark theme.
   */
  lighterFill?: ColorInput;
  /**
   * Extra light fill color. Used when `preferCssVariables` is false.
   *
   * By default `#fafcff` for light theme, `#191919` for dark theme.
   */
  extraLightFill?: ColorInput;
  /**
   * Blank fill color. Used when `preferCssVariables` is false.
   *
   * By default `#ffffff` for light theme, `transparent` for dark theme.
   */
  blankFill?: ColorInput;
  /**
   * Dark fill color. Used when `preferCssVariables` is false.
   *
   * By default `#ebedf0` for light theme, `#39393a` for dark theme.
   */
  darkFill?: ColorInput;
  /**
   * Darker fill color. Used when `preferCssVariables` is false.
   *
   * By default `#e6e8eb` for light theme, `#424243` for dark theme.
   */
  darkerFill?: ColorInput;
  /**
   * Page background color. Used when `preferCssVariables` is false.
   *
   * By default `#f2f3f5` for light theme, `#0a0a0a` for dark theme.
   */
  pageBg?: ColorInput;
  /**
   * Base background color. Used when `preferCssVariables` is false.
   *
   * By default `#ffffff` for light theme, `#141414` for dark theme.
   */
  baseBg?: ColorInput;
  /**
   * Overlay background color. Used when `preferCssVariables` is false.
   *
   * By default `#ffffff` for light theme, `#1d1e1f` for dark theme.
   */
  overlayBg?: ColorInput;
  /**
   * Should override shadow or not. Defaults to `false`.
   *
   * If false, only generate `.shadow-base`.
   *
   * If true, also override `.shadow-light`, `.shadow-lighter` and `.shadow-dark`, override
   * `.shadow-xs` with `.shadow-lighter`, override `.shadow-sm` with `.shadow-light`, override
   * `.shadow-md` with `.shadow-base`, and override `.shadow-lg` with `.shadow-dark`.
   *
   * You can pass an array specifying what you want to override, e.g. `['light', 'lighter', 'dark',
   * 'xs', 'sm', 'md', 'lg']` for overriding all.
   *
   * @default false
   */
  overrideShadow?: boolean | ('light' | 'lighter' | 'dark' | 'xs' | 'sm' | 'md' | 'lg')[];
  /**
   * Base box shadow. Used when `preferCssVariables` is false.
   *
   * By default `0px 12px 32px 4px rgba(0,0,0,.04), 0px 8px 20px rgba(0,0,0,.08)` for light theme,
   * `0px 12px 32px rgba(0,0,0,.36), 0px 8px 20px rgba(0,0,0,.72)` for dark theme.
   */
  baseShadow?: string | string[];
  /**
   * Light box shadow. Used when `preferCssVariables` is false.
   *
   * By default `0px 0px 12px rgba(0,0,0,.12)` for light theme, `0px 0px 12px rgba(0,0,0,.72)` for
   * dark theme.
   */
  lightShadow?: string | string[];
  /**
   * Lighter box shadow. Used when `preferCssVariables` is false.
   *
   * By default `0px 0px 6px rgba(0,0,0,.12)` for light theme, `0px 0px 6px rgba(0,0,0,.72)` for
   * dark theme.
   */
  lighterShadow?: string | string[];
  /**
   * Dark box shadow. Used when `preferCssVariables` is false.
   *
   * By default `0px 16px 48px 16px rgba(0, 0, 0, .08), 0px 12px 32px rgba(0, 0, 0, .12), 0px 8px
   * 16px -8px rgba(0, 0, 0, .16)` for light theme, `0px 16px 48px 16px rgba(0, 0, 0, .72), 0px 12px
   * 32px #000000, 0px 8px 16px -8px #000000` for dark theme.
   */
  darkShadow?: string | string[];
  /**
   * Should override font size or not. Defaults to `false`.
   *
   * If false, only generate `.text-extra-large`, `.text-large`, `.text-medium`, `.text-basis`,
   * `.text-small` and `.text-extra-small`.
   *
   * If true, also override `.text-xl` with `.text-extra-large`, override `.text-lg` with
   * `.text-large`, override `.text-md` with `.text-medium`, override `.text-base` with
   * `.text-basis`, override `.text-sm` with `.text-small`, and override `.text-xs` with
   * `.text-extra-small`.
   *
   * You can pass an array specifying what you want to override, e.g. `['xl', 'lg', 'md', 'base',
   * 'sm', 'xs']` for overriding all.
   *
   * @default false
   */
  overrideFontSize?: boolean | ('xl' | 'lg' | 'md' | 'base' | 'sm' | 'xs')[];
  /**
   * Extra large font size. Used when `preferCssVariables` is false. Defaults to `20px`.
   *
   * @default 20px
   */
  extraLargeFontSize?: string;
  /**
   * Large font size. Used when `preferCssVariables` is false. Defaults to `18px`.
   *
   * @default 18px
   */
  largeFontSize?: string;
  /**
   * Medium font size. Used when `preferCssVariables` is false. Defaults to `16px`.
   *
   * @default 16px
   */
  mediumFontSize?: string;
  /**
   * Basis font size. Used when `preferCssVariables` is false. Defaults to `14px`.
   *
   * @default 14px
   */
  basisFontSize?: string;
  /**
   * Small font size. Used when `preferCssVariables` is false. Defaults to `13px`.
   *
   * @default 13px
   */
  smallFontSize?: string;
  /**
   * Extra small font size. Used when `preferCssVariables` is false. Defaults to `12px`.
   *
   * @default 12px
   */
  extraSmallFontSize?: string;
}

export interface PresetElementPlusUserCommonOptions
  extends Omit<PresetThemeOptions<Theme>, 'theme'>,
    PresetElementPlusUserThemeOptions {
  /**
   * Prefer existed css variables or not.
   *
   * If true, use element-plus css variables and you have to follow element-plus design standards.
   *
   * If false, use generated variables and you can use more variables away from element-plus design
   * standards.
   *
   * You may need to set this field to `false` when you are developing with `uni-app`, `taro`, etc.
   *
   * @default true
   */
  preferCssVariables?: boolean;
  /**
   * The namespace used to find css variables. Used when `preferCssVariables` is true.
   *
   * @default el
   */
  namespace?: string;
}

export interface PresetElementPlusUserOptions extends PresetElementPlusUserCommonOptions {
  /** Light theme */
  light?: PresetElementPlusUserThemeOptions;
  /** Dark theme */
  dark?: PresetElementPlusUserThemeOptions;
}

export type PresetElementPlusThemeOptions = Required<PresetElementPlusUserThemeOptions>;

export type PresetElementPlusCommonOptions = Required<PresetElementPlusUserCommonOptions>;

export type PresetElementPlusOptions = Required<PresetElementPlusUserOptions>;

export type PresetElementPlusThemeName = 'light' | 'dark';
