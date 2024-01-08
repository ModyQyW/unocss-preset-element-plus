import { createGenerator, presetUno } from 'unocss';
import { describe, expect, test } from 'vitest';
import { presetElementPlus } from '../src';

describe('theme', () => {
  test('border colors with css variables', async () => {
    const uno = createGenerator({
      presets: [presetUno({ preflight: false }), presetElementPlus()],
    });
    const borderColors = [
      'base-border',
      'light-border',
      'lighter-border',
      'extra-light-border',
      'dark-border',
      'darker-border',
    ];
    const targets = borderColors.map((color) => `border-${color}`);
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      .dark,:root{--un-preset-el-colors-baseBorder:var(--el-border-color);--un-preset-el-colors-lightBorder:var(--el-border-color-light);--un-preset-el-colors-lighterBorder:var(--el-border-color-lighter);--un-preset-el-colors-extraLightBorder:var(--el-border-color-extra-light);--un-preset-el-colors-darkBorder:var(--el-border-color-dark);--un-preset-el-colors-darkerBorder:var(--el-border-color-darker);}
      /* layer: default */
      .border-base-border{border-color:var(--un-preset-el-colors-baseBorder);}
      .border-dark-border{border-color:var(--un-preset-el-colors-darkBorder);}
      .border-darker-border{border-color:var(--un-preset-el-colors-darkerBorder);}
      .border-extra-light-border{border-color:var(--un-preset-el-colors-extraLightBorder);}
      .border-light-border{border-color:var(--un-preset-el-colors-lightBorder);}
      .border-lighter-border{border-color:var(--un-preset-el-colors-lighterBorder);}"
    `);
  });

  test('border colors with colors', async () => {
    const uno = createGenerator({
      presets: [presetUno({ preflight: false }), presetElementPlus({ preferCssVariables: false })],
    });
    const borderColors = [
      'base-border',
      'light-border',
      'lighter-border',
      'extra-light-border',
      'dark-border',
      'darker-border',
    ];
    const targets = borderColors.map((color) => `border-${color}`);
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root{--un-preset-el-colors-baseBorder:220 223 230;--un-preset-el-colors-lightBorder:228 231 237;--un-preset-el-colors-lighterBorder:235 238 245;--un-preset-el-colors-extraLightBorder:242 246 252;--un-preset-el-colors-darkBorder:212 215 222;--un-preset-el-colors-darkerBorder:205 208 214;}
      .dark{--un-preset-el-colors-baseBorder:76 77 79;--un-preset-el-colors-lightBorder:65 66 67;--un-preset-el-colors-lighterBorder:54 54 55;--un-preset-el-colors-extraLightBorder:43 43 44;--un-preset-el-colors-darkBorder:88 88 91;--un-preset-el-colors-darkerBorder:99 100 102;}
      /* layer: default */
      .border-base-border{--un-border-opacity:1;border-color:rgb(var(--un-preset-el-colors-baseBorder) / var(--un-border-opacity));}
      .border-dark-border{--un-border-opacity:1;border-color:rgb(var(--un-preset-el-colors-darkBorder) / var(--un-border-opacity));}
      .border-darker-border{--un-border-opacity:1;border-color:rgb(var(--un-preset-el-colors-darkerBorder) / var(--un-border-opacity));}
      .border-extra-light-border{--un-border-opacity:1;border-color:rgb(var(--un-preset-el-colors-extraLightBorder) / var(--un-border-opacity));}
      .border-light-border{--un-border-opacity:1;border-color:rgb(var(--un-preset-el-colors-lightBorder) / var(--un-border-opacity));}
      .border-lighter-border{--un-border-opacity:1;border-color:rgb(var(--un-preset-el-colors-lighterBorder) / var(--un-border-opacity));}"
    `);
  });
});
