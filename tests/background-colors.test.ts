import { createGenerator, presetUno } from 'unocss';
import { describe, expect, test } from 'vitest';
import { presetElementPlus } from '../src';

describe('theme', () => {
  test('background colors with css variables', async () => {
    const uno = createGenerator({
      presets: [presetUno({ preflight: false }), presetElementPlus()],
    });
    const backgroundColors = ['page-bg', 'base-bg', 'overlay-bg'];
    const targets = backgroundColors.map((color) => `bg-${color}`);
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      .dark,:root{--un-preset-el-colors-pageBg:var(--el-bg-color-page);--un-preset-el-colors-baseBg:var(--el-bg-color);--un-preset-el-colors-overlayBg:var(--el-bg-color-overlay);}
      /* layer: default */
      .bg-base-bg{background-color:var(--un-preset-el-colors-baseBg);}
      .bg-overlay-bg{background-color:var(--un-preset-el-colors-overlayBg);}
      .bg-page-bg{background-color:var(--un-preset-el-colors-pageBg);}"
    `);
  });

  test('background colors with colors', async () => {
    const uno = createGenerator({
      presets: [presetUno({ preflight: false }), presetElementPlus({ preferCssVariables: false })],
    });
    const backgroundColors = ['page-bg', 'base-bg', 'overlay-bg'];
    const targets = backgroundColors.map((color) => `bg-${color}`);
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root{--un-preset-el-colors-pageBg:242 243 245;--un-preset-el-colors-baseBg:255 255 255;--un-preset-el-colors-overlayBg:255 255 255;}
      .dark{--un-preset-el-colors-pageBg:10 10 10;--un-preset-el-colors-baseBg:20 20 20;--un-preset-el-colors-overlayBg:29 30 31;}
      /* layer: default */
      .bg-base-bg{--un-bg-opacity:1;background-color:rgb(var(--un-preset-el-colors-baseBg) / var(--un-bg-opacity));}
      .bg-overlay-bg{--un-bg-opacity:1;background-color:rgb(var(--un-preset-el-colors-overlayBg) / var(--un-bg-opacity));}
      .bg-page-bg{--un-bg-opacity:1;background-color:rgb(var(--un-preset-el-colors-pageBg) / var(--un-bg-opacity));}"
    `);
  });
});
