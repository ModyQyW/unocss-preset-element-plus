import { createGenerator, presetUno } from 'unocss';
import { describe, expect, test } from 'vitest';
import { presetElementPlus } from '../src';

describe('theme', () => {
  test('text colors with css variables', async () => {
    const uno = createGenerator({
      presets: [presetUno({ preflight: false }), presetElementPlus()],
    });
    const textColors = [
      'primary-text',
      'regular-text',
      'secondary-text',
      'placeholder-text',
      'disabled-text',
    ];
    const targets = textColors.map((color) => `text-${color}`);
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      .dark,:root{--un-preset-el-colors-primaryText:var(--el-text-color-primary);--un-preset-el-colors-regularText:var(--el-text-color-regular);--un-preset-el-colors-secondaryText:var(--el-text-color-secondary);--un-preset-el-colors-placeholderText:var(--el-text-color-placeholder);--un-preset-el-colors-disabledText:var(--el-text-color-disabled);}
      /* layer: default */
      .text-disabled-text{color:var(--un-preset-el-colors-disabledText);}
      .text-placeholder-text{color:var(--un-preset-el-colors-placeholderText);}
      .text-primary-text{color:var(--un-preset-el-colors-primaryText);}
      .text-regular-text{color:var(--un-preset-el-colors-regularText);}
      .text-secondary-text{color:var(--un-preset-el-colors-secondaryText);}"
    `);
  });

  test('text colors with colors', async () => {
    const uno = createGenerator({
      presets: [presetUno({ preflight: false }), presetElementPlus({ preferCssVariables: false })],
    });
    const textColors = [
      'primary-text',
      'regular-text',
      'secondary-text',
      'placeholder-text',
      'disabled-text',
    ];
    const targets = textColors.map((color) => `text-${color}`);
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root{--un-preset-el-colors-primaryText:48 49 51;--un-preset-el-colors-regularText:96 98 102;--un-preset-el-colors-secondaryText:144 147 153;--un-preset-el-colors-placeholderText:168 171 178;--un-preset-el-colors-disabledText:192 196 204;}
      .dark{--un-preset-el-colors-primaryText:229 234 243;--un-preset-el-colors-regularText:207 211 220;--un-preset-el-colors-secondaryText:163 166 173;--un-preset-el-colors-placeholderText:141 144 149;--un-preset-el-colors-disabledText:108 110 114;}
      /* layer: default */
      .text-disabled-text{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-disabledText) / var(--un-text-opacity));}
      .text-placeholder-text{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-placeholderText) / var(--un-text-opacity));}
      .text-primary-text{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primaryText) / var(--un-text-opacity));}
      .text-regular-text{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-regularText) / var(--un-text-opacity));}
      .text-secondary-text{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-secondaryText) / var(--un-text-opacity));}"
    `);
  });
});
