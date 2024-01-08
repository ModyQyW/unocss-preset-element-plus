import { createGenerator, presetUno } from 'unocss';
import { describe, expect, test } from 'vitest';
import { presetElementPlus } from '../src';

describe('theme', () => {
  test('breakpoints', async () => {
    const uno = createGenerator({
      presets: [presetUno({ preflight: false }), presetElementPlus()],
    });
    const targets = [
      'xs:text-xs',
      'sm:text-sm',
      'md:text-base',
      'lg:text-lg',
      'xl:text-xl',
      'xxl:text-2xl',
    ];
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      @media (min-width: 0px){
      .xs\\:text-xs{font-size:0.75rem;line-height:1rem;}
      }
      @media (min-width: 768px){
      .sm\\:text-sm{font-size:0.875rem;line-height:1.25rem;}
      }
      @media (min-width: 992px){
      .md\\:text-base{font-size:1rem;line-height:1.5rem;}
      }
      @media (min-width: 1200px){
      .lg\\:text-lg{font-size:1.125rem;line-height:1.75rem;}
      }
      @media (min-width: 1920px){
      .xl\\:text-xl{font-size:1.25rem;line-height:1.75rem;}
      }
      @media (min-width: 2560px){
      .xxl\\:text-2xl{font-size:1.5rem;line-height:2rem;}
      }"
    `);
  });
});
