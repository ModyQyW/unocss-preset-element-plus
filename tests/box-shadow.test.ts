import { createGenerator, presetUno } from 'unocss';
import { describe, expect, test } from 'vitest';
import { presetElementPlus } from '../src';

describe('theme', () => {
  test('box shadow with css variables', async () => {
    const uno = createGenerator({
      presets: [presetUno({ preflight: false }), presetElementPlus()],
    });
    const targets = ['shadow-base'];
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      .dark,:root{--un-preset-el-boxShadow-base:var(--el-box-shadow);}
      /* layer: default */
      .shadow-base{--un-shadow:var(--un-preset-el-boxShadow-base);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}"
    `);
  });

  test('box shadow with colors', async () => {
    const uno = createGenerator({
      presets: [presetUno({ preflight: false }), presetElementPlus({ preferCssVariables: false })],
    });
    const targets = ['shadow-base'];
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root{--un-preset-el-boxShadow-base-0:0px 12px 32px 4px rgba(0,0,0,.04);}
      .dark{--un-preset-el-boxShadow-base-0:0px 12px 32px rgba(0,0,0,.36);}
      /* layer: default */
      .shadow-base{--un-shadow:var(--un-preset-el-boxShadow-base-0),var(--un-preset-el-boxShadow-base-1);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}"
    `);
  });

  test('override all box shadow', async () => {
    const uno = createGenerator({
      presets: [presetUno({ preflight: false }), presetElementPlus({ overrideShadow: true })],
    });
    const targets = [
      'shadow-base',
      'shadow-light',
      'shadow-lighter',
      'shadow-dark',
      'shadow-xs',
      'shadow-sm',
      'shadow-md',
      'shadow-lg',
    ];
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      .dark,:root{--un-preset-el-boxShadow-base:var(--el-box-shadow);--un-preset-el-boxShadow-light:var(--el-box-shadow-light);--un-preset-el-boxShadow-lighter:var(--el-box-shadow-lighter);--un-preset-el-boxShadow-dark:var(--el-box-shadow-dark);--un-preset-el-boxShadow-xs:var(--el-box-shadow-lighter);--un-preset-el-boxShadow-sm:var(--el-box-shadow-light);--un-preset-el-boxShadow-md:var(--el-box-shadow);--un-preset-el-boxShadow-lg:var(--el-box-shadow-dark);}
      /* layer: default */
      .shadow-base{--un-shadow:var(--un-preset-el-boxShadow-base);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
      .shadow-dark{--un-shadow:var(--un-preset-el-boxShadow-dark);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
      .shadow-lg{--un-shadow:var(--un-preset-el-boxShadow-lg);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
      .shadow-light{--un-shadow:var(--un-preset-el-boxShadow-light);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
      .shadow-lighter{--un-shadow:var(--un-preset-el-boxShadow-lighter);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
      .shadow-md{--un-shadow:var(--un-preset-el-boxShadow-md);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
      .shadow-sm{--un-shadow:var(--un-preset-el-boxShadow-sm);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
      .shadow-xs{--un-shadow:var(--un-preset-el-boxShadow-xs);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}"
    `);
  });

  test('override some box shadow', async () => {
    const uno = createGenerator({
      presets: [
        presetUno({ preflight: false }),
        presetElementPlus({ overrideShadow: ['xs', 'sm', 'md', 'lg'] }),
      ],
    });
    const targets = ['shadow-base', 'shadow-xs', 'shadow-sm', 'shadow-md', 'shadow-lg'];
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      .dark,:root{--un-preset-el-boxShadow-base:var(--el-box-shadow);--un-preset-el-boxShadow-xs:var(--el-box-shadow-lighter);--un-preset-el-boxShadow-sm:var(--el-box-shadow-light);--un-preset-el-boxShadow-md:var(--el-box-shadow);--un-preset-el-boxShadow-lg:var(--el-box-shadow-dark);}
      /* layer: default */
      .shadow-base{--un-shadow:var(--un-preset-el-boxShadow-base);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
      .shadow-lg{--un-shadow:var(--un-preset-el-boxShadow-lg);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
      .shadow-md{--un-shadow:var(--un-preset-el-boxShadow-md);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
      .shadow-sm{--un-shadow:var(--un-preset-el-boxShadow-sm);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
      .shadow-xs{--un-shadow:var(--un-preset-el-boxShadow-xs);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}"
    `);
  });
});
