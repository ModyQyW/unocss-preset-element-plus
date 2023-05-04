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

Used to generate theme light colors. By default `white` for light theme, `#141414` for dark theme.

#### darkenColor

Used to generate theme dark colors. By default `black` for light theme, `white` for dark theme.

#### primaryText

Primary text color. By default `#303133` for light theme, `#e5eaf3` for dark theme.

#### regularText

Regular text color. By default `#606266` for light theme, `#cfd3dc` for dark theme.

#### secondaryText

Secondary text color. By default `#909399` for light theme, `#a3a6ad` for dark theme.

#### placeholderText

Placeholder text color. By default `#a8abb2` for light theme, `#8d9095` for dark theme.

#### disabledText

Disabled text color. By default `#c0c4cc` for light theme, `#6c6e72` for dark theme.
