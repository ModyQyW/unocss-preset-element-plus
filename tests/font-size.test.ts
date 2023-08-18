import { createGenerator, presetUno } from 'unocss';
import { describe, expect, test } from 'vitest';
import { presetElementPlus } from '../src';

describe('theme', () => {
  test('font size with css variables', async () => {
    const uno = createGenerator({
      presets: [presetUno(), presetElementPlus()],
    });
    const targets = [
      'text-extra-large',
      'text-large',
      'text-medium',
      'text-basis',
      'text-small',
      'text-extra-small',
    ];
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: preflights */
      *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
      /* layer: theme */
      .dark,:root{--un-preset-el-fontSize-extra-large:var(--el-font-size-extra-large);--un-preset-el-fontSize-large:var(--el-font-size-large);--un-preset-el-fontSize-medium:var(--el-font-size-medium);--un-preset-el-fontSize-basis:var(--el-font-size-base);--un-preset-el-fontSize-small:var(--el-font-size-small);--un-preset-el-fontSize-extra-small:var(--el-font-size-extra-small);}
      /* layer: default */
      .text-basis{font-size:var(--un-preset-el-fontSize-basis);line-height:1;}
      .text-extra-large{font-size:var(--un-preset-el-fontSize-extra-large);line-height:1;}
      .text-extra-small{font-size:var(--un-preset-el-fontSize-extra-small);line-height:1;}
      .text-large{font-size:var(--un-preset-el-fontSize-large);line-height:1;}
      .text-medium{font-size:var(--un-preset-el-fontSize-medium);line-height:1;}
      .text-small{font-size:var(--un-preset-el-fontSize-small);line-height:1;}"
    `);
  });

  test('font size with colors', async () => {
    const uno = createGenerator({
      presets: [presetUno(), presetElementPlus({ preferCssVariables: false })],
    });
    const targets = [
      'text-extra-large',
      'text-large',
      'text-medium',
      'text-basis',
      'text-small',
      'text-extra-small',
    ];
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: preflights */
      *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
      /* layer: theme */
      .dark,:root{--un-preset-el-fontSize-extra-large:20px;--un-preset-el-fontSize-large:18px;--un-preset-el-fontSize-medium:16px;--un-preset-el-fontSize-basis:14px;--un-preset-el-fontSize-small:13px;--un-preset-el-fontSize-extra-small:12px;}
      /* layer: default */
      .text-basis{font-size:var(--un-preset-el-fontSize-basis);line-height:1;}
      .text-extra-large{font-size:var(--un-preset-el-fontSize-extra-large);line-height:1;}
      .text-extra-small{font-size:var(--un-preset-el-fontSize-extra-small);line-height:1;}
      .text-large{font-size:var(--un-preset-el-fontSize-large);line-height:1;}
      .text-medium{font-size:var(--un-preset-el-fontSize-medium);line-height:1;}
      .text-small{font-size:var(--un-preset-el-fontSize-small);line-height:1;}"
    `);
  });

  test('override all font size', async () => {
    const uno = createGenerator({
      presets: [presetUno(), presetElementPlus({ overrideFontSize: true })],
    });
    const targets = [
      'text-extra-large',
      'text-large',
      'text-medium',
      'text-basis',
      'text-small',
      'text-extra-small',
      'text-xl',
      'text-lg',
      'text-md',
      'text-base',
      'text-sm',
      'text-xs',
    ];
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: preflights */
      *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
      /* layer: theme */
      .dark,:root{--un-preset-el-fontSize-extra-large:var(--el-font-size-extra-large);--un-preset-el-fontSize-large:var(--el-font-size-large);--un-preset-el-fontSize-medium:var(--el-font-size-medium);--un-preset-el-fontSize-basis:var(--el-font-size-base);--un-preset-el-fontSize-small:var(--el-font-size-small);--un-preset-el-fontSize-extra-small:var(--el-font-size-extra-small);--un-preset-el-fontSize-xl:var(--el-font-size-extra-large);--un-preset-el-fontSize-lg:var(--el-font-size-large);--un-preset-el-fontSize-md:var(--el-font-size-medium);--un-preset-el-fontSize-base:var(--el-font-size-base);--un-preset-el-fontSize-sm:var(--el-font-size-small);--un-preset-el-fontSize-xs:var(--el-font-size-extra-small);}
      /* layer: default */
      .text-base{font-size:var(--un-preset-el-fontSize-base);line-height:1;}
      .text-basis{font-size:var(--un-preset-el-fontSize-basis);line-height:1;}
      .text-extra-large{font-size:var(--un-preset-el-fontSize-extra-large);line-height:1;}
      .text-extra-small{font-size:var(--un-preset-el-fontSize-extra-small);line-height:1;}
      .text-large{font-size:var(--un-preset-el-fontSize-large);line-height:1;}
      .text-lg{font-size:var(--un-preset-el-fontSize-lg);line-height:1;}
      .text-md{font-size:var(--un-preset-el-fontSize-md);line-height:1;}
      .text-medium{font-size:var(--un-preset-el-fontSize-medium);line-height:1;}
      .text-sm{font-size:var(--un-preset-el-fontSize-sm);line-height:1;}
      .text-small{font-size:var(--un-preset-el-fontSize-small);line-height:1;}
      .text-xl{font-size:var(--un-preset-el-fontSize-xl);line-height:1;}
      .text-xs{font-size:var(--un-preset-el-fontSize-xs);line-height:1;}"
    `);
  });
});
