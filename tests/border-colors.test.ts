import { createGenerator, presetUno } from 'unocss';
import { describe, expect, test } from 'vitest';
import { presetElementPlus } from '../src';

describe('theme', () => {
  test('border colors with css variables', async () => {
    const uno = createGenerator({
      presets: [presetUno(), presetElementPlus()],
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
      "/* layer: preflights */
      *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
      /* layer: default */
      .border-base-border{border-color:var(--el-border-color);}
      .border-dark-border{border-color:var(--el-border-color-dark);}
      .border-darker-border{border-color:var(--el-border-color-darker);}
      .border-extra-light-border{border-color:var(--el-border-color-extra-light);}
      .border-light-border{border-color:var(--el-border-color-light);}
      .border-lighter-border{border-color:var(--el-border-color-lighter);}"
    `);
  });

  test('border colors with colors', async () => {
    const uno = createGenerator({
      presets: [presetUno(), presetElementPlus({ preferCssVariables: false })],
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
      "/* layer: preflights */
      *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
      /* layer: theme */
      .dark{--un-preset-el-colors-baseBorder:76, 77, 79;--un-preset-el-colors-lightBorder:65, 66, 67;--un-preset-el-colors-lighterBorder:54, 54, 55;--un-preset-el-colors-extraLightBorder:43, 43, 44;--un-preset-el-colors-darkBorder:88, 88, 91;--un-preset-el-colors-darkerBorder:99, 100, 102;}
      :root{--un-preset-el-colors-baseBorder:220, 223, 230;--un-preset-el-colors-lightBorder:228, 231, 237;--un-preset-el-colors-lighterBorder:235, 238, 245;--un-preset-el-colors-extraLightBorder:242, 246, 252;--un-preset-el-colors-darkBorder:212, 215, 222;--un-preset-el-colors-darkerBorder:205, 208, 214;}
      /* layer: default */
      .border-base-border{--un-border-opacity:1;border-color:rgba(var(--un-preset-el-colors-baseBorder),var(--un-border-opacity));}
      .border-dark-border{--un-border-opacity:1;border-color:rgba(var(--un-preset-el-colors-darkBorder),var(--un-border-opacity));}
      .border-darker-border{--un-border-opacity:1;border-color:rgba(var(--un-preset-el-colors-darkerBorder),var(--un-border-opacity));}
      .border-extra-light-border{--un-border-opacity:1;border-color:rgba(var(--un-preset-el-colors-extraLightBorder),var(--un-border-opacity));}
      .border-light-border{--un-border-opacity:1;border-color:rgba(var(--un-preset-el-colors-lightBorder),var(--un-border-opacity));}
      .border-lighter-border{--un-border-opacity:1;border-color:rgba(var(--un-preset-el-colors-lighterBorder),var(--un-border-opacity));}"
    `);
  });
});
