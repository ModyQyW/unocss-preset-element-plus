# unocss-preset-element-plus

**WIP**

This preset will help you make [element-plus](https://element-plus.org/) and [unocss](https://unocss.dev/) work together. Based on [unocss-preset-theme](https://github.com/Dunqing/unocss-preset-theme).

## Installation

```bash
npm i -D unocss-preset-element-plus
```

## Usages

We use `uno.config.ts` as an example below.

```ts
import { defineConfig, presetUno } from 'unocss'
import { presetElementPlus } from 'unocss-preset-element-plus'

export default defineConfig({
  presets: [
    presetUno(),
    presetElementPlus(), // place after other presets, since it overrides some values by default
  ],
})
```

We recommend you to use [tailwind compat reset](https://unocss.dev/guide/style-reset#tailwind-compat) if you are facing style conflicts.

## Options

You can a options object to the preset.

### prefix

This option is extended from [unocss-preset-theme](https://github.com/Dunqing/unocss-preset-theme). Defaults to `--un-preset-el`.

### selectors

This option is extended from [unocss-preset-theme](https://github.com/Dunqing/unocss-preset-theme) and use its default value.

You may need to update this field when you are developing with `uni-app`, `taro`, etc.

### preferCssVariables

Prefer existed css variables or not. Defaults to `true`.

If true, use `element-plus` css variables and you have to follow `element-plus` design standards.

If false, use generated variables and you can use more variables away from `element-plus` design standards.

You may need to set this field to `false` when you are developing with `uni-app`, `taro`, etc.

### namespace

The namespace used to find css variables. Used when preferCssVariables is true. Defaults to `el`.

### primary

Base primary color. Defaults to `#409eff`.

### success

Base success color. Defaults to `#67c23a`.

### warning

Base warning color. Defaults to `#e6a23c`.

### error

Base error color. Defaults to `#f56c6c`.

### danger

Base danger color. Defaults to `#f56c6c`.

### info

Base info color. Defaults to `#909399`.

### light & dark

Light / Dark theme config.

#### lightenColor

Used to generate theme light colors. Used when `preferCssVariables` is false.

By default `white` for light theme, `#141414` for dark theme.

#### darkenColor

Used to generate theme dark colors. Used when `preferCssVariables` is false.

By default `black` for light theme, `white` for dark theme.

#### primaryText

Primary text color. Used when `preferCssVariables` is false.

By default `#303133` for light theme, `#e5eaf3` for dark theme.

#### regularText

Regular text color. Used when `preferCssVariables` is false.

By default `#606266` for light theme, `#cfd3dc` for dark theme.

#### secondaryText

Secondary text color. Used when `preferCssVariables` is false.

By default `#909399` for light theme, `#a3a6ad` for dark theme.

#### placeholderText

Placeholder text color. Used when `preferCssVariables` is false.
  
By default `#a8abb2` for light theme, `#8d9095` for dark theme.

#### disabledText

Disabled text color. Used when `preferCssVariables` is false.

By default `#c0c4cc` for light theme, `#6c6e72` for dark theme.

#### baseBorder

Base border color. Used when `preferCssVariables` is false.

By default `#dcdfe6` for light theme, `#4c4d4f` for dark theme.

#### lightBorder

Light border color. Used when `preferCssVariables` is false.

By default `#e4e7ed` for light theme, `#414243` for dark theme.

#### lighterBorder

Lighter border color. Used when `preferCssVariables` is false.

By default `#ebeef5` for light theme, `#363637` for dark theme.

#### extraLightBorder

Extra light border color. Used when `preferCssVariables` is false.

By default `#f2f6fc` for light theme, `#2b2b2c` for dark theme.

#### darkBorder

Dark border color. Used when `preferCssVariables` is false.

By default `#d4d7de` for light theme, `#58585b` for dark theme.

#### darkerBorder

Darker border color. Used when `preferCssVariables` is false.

By default `#cdd0d6` for light theme, `#636466` for dark theme.

#### baseFill

Base fill color. Used when `preferCssVariables` is false.

By default `#f0f2f5` for light theme, `#303030` for dark theme.

#### lightFill

light fill color. Used when `preferCssVariables` is false.

By default `#f5f7fa` for light theme, `#262727` for dark theme.

#### lighterFill

Lighter fill color. Used when `preferCssVariables` is false.

By default `#fafafa` for light theme, `#1d1d1d` for dark theme.

#### extraLightFill

Extra light fill color. Used when `preferCssVariables` is false.

By default `#fafcff` for light theme, `#191919` for dark theme.

#### blankFill

Blank fill color. Used when `preferCssVariables` is false.

By default `#ffffff` for light theme, `transparent` for dark theme.

#### darkFill

Dark fill color. Used when `preferCssVariables` is false.

By default `#ebedf0` for light theme, `#39393a` for dark theme.

#### darkerFill

Darker fill color. Used when `preferCssVariables` is false.

By default `#e6e8eb` for light theme, `#424243` for dark theme.

#### pageBg

Page background color. Used when `preferCssVariables` is false.

By default `#f2f3f5` for light theme, `#0a0a0a` for dark theme.

#### baseBg

Base background color. Used when `preferCssVariables` is false.

By default `#ffffff` for light theme, `#141414` for dark theme.

#### overlayBg

Overlay background color. Used when `preferCssVariables` is false.

By default `#ffffff` for light theme, `#1d1e1f` for dark theme.
