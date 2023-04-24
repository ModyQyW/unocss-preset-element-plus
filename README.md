# unocss-preset-element-plus

**WIP**

This preset will help you make [element-plus](https://element-plus.org/) and [unocss](https://unocss.dev/) work together. Based on [unocss-perset-theme](https://github.com/Dunqing/unocss-preset-theme).

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

This option is extended from [unocss-perset-theme](https://github.com/Dunqing/unocss-preset-theme). Defaults to `--un-preset-el`.

### selectors

This option is extended from [unocss-perset-theme](https://github.com/Dunqing/unocss-preset-theme) and use its default value.

### lightLightenColor

Used to generate light theme light colors. Defaults to `white`.

### lightDarkenColor

Used to generate light theme dark colors. Defaults to `black`.

### darkLightenColor

Used to generate dark theme light colors. Defaults to `#141414`.

### darkDarkenColor

Used to generate dark theme dark colors. Defaults to `white`.

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
