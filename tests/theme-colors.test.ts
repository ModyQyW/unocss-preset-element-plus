import { createGenerator, presetUno } from 'unocss';
import { describe, expect, test } from 'vitest';
import { presetElementPlus } from '../src';

describe('theme', () => {
  test('theme colors with css variables', async () => {
    const uno = createGenerator({
      presets: [presetUno({ preflight: false }), presetElementPlus()],
    });
    const themeColors = ['primary', 'success', 'warning', 'error', 'danger', 'info'];
    const steps = [
      '',
      ...Array.from({ length: 9 }).flatMap((_, index) => [
        `light-${index + 1}`,
        `dark-${index + 1}`,
      ]),
    ];
    const targets = themeColors.flatMap((color) =>
      steps.flatMap((step) => (step ? `text-${color}-${step}` : `text-${color}`)),
    );
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      .dark,:root{--un-preset-el-colors-primary-DEFAULT:var(--el-color-primary);--un-preset-el-colors-primary-dark-2:var(--el-color-primary-dark-2);--un-preset-el-colors-primary-light-3:var(--el-color-primary-light-3);--un-preset-el-colors-primary-light-5:var(--el-color-primary-light-5);--un-preset-el-colors-primary-light-7:var(--el-color-primary-light-7);--un-preset-el-colors-primary-light-8:var(--el-color-primary-light-8);--un-preset-el-colors-primary-light-9:var(--el-color-primary-light-9);--un-preset-el-colors-success-DEFAULT:var(--el-color-success);--un-preset-el-colors-success-dark-2:var(--el-color-success-dark-2);--un-preset-el-colors-success-light-3:var(--el-color-success-light-3);--un-preset-el-colors-success-light-5:var(--el-color-success-light-5);--un-preset-el-colors-success-light-7:var(--el-color-success-light-7);--un-preset-el-colors-success-light-8:var(--el-color-success-light-8);--un-preset-el-colors-success-light-9:var(--el-color-success-light-9);--un-preset-el-colors-warning-DEFAULT:var(--el-color-warning);--un-preset-el-colors-warning-dark-2:var(--el-color-warning-dark-2);--un-preset-el-colors-warning-light-3:var(--el-color-warning-light-3);--un-preset-el-colors-warning-light-5:var(--el-color-warning-light-5);--un-preset-el-colors-warning-light-7:var(--el-color-warning-light-7);--un-preset-el-colors-warning-light-8:var(--el-color-warning-light-8);--un-preset-el-colors-warning-light-9:var(--el-color-warning-light-9);--un-preset-el-colors-error-DEFAULT:var(--el-color-error);--un-preset-el-colors-error-dark-2:var(--el-color-error-dark-2);--un-preset-el-colors-error-light-3:var(--el-color-error-light-3);--un-preset-el-colors-error-light-5:var(--el-color-error-light-5);--un-preset-el-colors-error-light-7:var(--el-color-error-light-7);--un-preset-el-colors-error-light-8:var(--el-color-error-light-8);--un-preset-el-colors-error-light-9:var(--el-color-error-light-9);--un-preset-el-colors-danger-DEFAULT:var(--el-color-danger);--un-preset-el-colors-danger-dark-2:var(--el-color-danger-dark-2);--un-preset-el-colors-danger-light-3:var(--el-color-danger-light-3);--un-preset-el-colors-danger-light-5:var(--el-color-danger-light-5);--un-preset-el-colors-danger-light-7:var(--el-color-danger-light-7);--un-preset-el-colors-danger-light-8:var(--el-color-danger-light-8);--un-preset-el-colors-danger-light-9:var(--el-color-danger-light-9);--un-preset-el-colors-info-DEFAULT:var(--el-color-info);--un-preset-el-colors-info-dark-2:var(--el-color-info-dark-2);--un-preset-el-colors-info-light-3:var(--el-color-info-light-3);--un-preset-el-colors-info-light-5:var(--el-color-info-light-5);--un-preset-el-colors-info-light-7:var(--el-color-info-light-7);--un-preset-el-colors-info-light-8:var(--el-color-info-light-8);--un-preset-el-colors-info-light-9:var(--el-color-info-light-9);}
      /* layer: default */
      .text-danger{color:var(--un-preset-el-colors-danger-DEFAULT);}
      .text-danger-dark-2{color:var(--un-preset-el-colors-danger-dark-2);}
      .text-danger-light-3{color:var(--un-preset-el-colors-danger-light-3);}
      .text-danger-light-5{color:var(--un-preset-el-colors-danger-light-5);}
      .text-danger-light-7{color:var(--un-preset-el-colors-danger-light-7);}
      .text-danger-light-8{color:var(--un-preset-el-colors-danger-light-8);}
      .text-danger-light-9{color:var(--un-preset-el-colors-danger-light-9);}
      .text-error{color:var(--un-preset-el-colors-error-DEFAULT);}
      .text-error-dark-2{color:var(--un-preset-el-colors-error-dark-2);}
      .text-error-light-3{color:var(--un-preset-el-colors-error-light-3);}
      .text-error-light-5{color:var(--un-preset-el-colors-error-light-5);}
      .text-error-light-7{color:var(--un-preset-el-colors-error-light-7);}
      .text-error-light-8{color:var(--un-preset-el-colors-error-light-8);}
      .text-error-light-9{color:var(--un-preset-el-colors-error-light-9);}
      .text-info{color:var(--un-preset-el-colors-info-DEFAULT);}
      .text-info-dark-2{color:var(--un-preset-el-colors-info-dark-2);}
      .text-info-light-3{color:var(--un-preset-el-colors-info-light-3);}
      .text-info-light-5{color:var(--un-preset-el-colors-info-light-5);}
      .text-info-light-7{color:var(--un-preset-el-colors-info-light-7);}
      .text-info-light-8{color:var(--un-preset-el-colors-info-light-8);}
      .text-info-light-9{color:var(--un-preset-el-colors-info-light-9);}
      .text-primary{color:var(--un-preset-el-colors-primary-DEFAULT);}
      .text-primary-dark-2{color:var(--un-preset-el-colors-primary-dark-2);}
      .text-primary-light-3{color:var(--un-preset-el-colors-primary-light-3);}
      .text-primary-light-5{color:var(--un-preset-el-colors-primary-light-5);}
      .text-primary-light-7{color:var(--un-preset-el-colors-primary-light-7);}
      .text-primary-light-8{color:var(--un-preset-el-colors-primary-light-8);}
      .text-primary-light-9{color:var(--un-preset-el-colors-primary-light-9);}
      .text-success{color:var(--un-preset-el-colors-success-DEFAULT);}
      .text-success-dark-2{color:var(--un-preset-el-colors-success-dark-2);}
      .text-success-light-3{color:var(--un-preset-el-colors-success-light-3);}
      .text-success-light-5{color:var(--un-preset-el-colors-success-light-5);}
      .text-success-light-7{color:var(--un-preset-el-colors-success-light-7);}
      .text-success-light-8{color:var(--un-preset-el-colors-success-light-8);}
      .text-success-light-9{color:var(--un-preset-el-colors-success-light-9);}
      .text-warning{color:var(--un-preset-el-colors-warning-DEFAULT);}
      .text-warning-dark-2{color:var(--un-preset-el-colors-warning-dark-2);}
      .text-warning-light-3{color:var(--un-preset-el-colors-warning-light-3);}
      .text-warning-light-5{color:var(--un-preset-el-colors-warning-light-5);}
      .text-warning-light-7{color:var(--un-preset-el-colors-warning-light-7);}
      .text-warning-light-8{color:var(--un-preset-el-colors-warning-light-8);}
      .text-warning-light-9{color:var(--un-preset-el-colors-warning-light-9);}"
    `);
  });

  test('theme colors with colors', async () => {
    const uno = createGenerator({
      presets: [presetUno({ preflight: false }), presetElementPlus({ preferCssVariables: false })],
    });
    const themeColors = ['primary', 'success', 'warning', 'error', 'danger', 'info'];
    const steps = [
      '',
      ...Array.from({ length: 9 }).flatMap((_, index) => [
        `light-${index + 1}`,
        `dark-${index + 1}`,
      ]),
    ];
    const targets = themeColors.flatMap((color) =>
      steps.flatMap((step) => (step ? `text-${color}-${step}` : `text-${color}`)),
    );
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root{--un-preset-el-colors-primary-DEFAULT:64 158 255;--un-preset-el-colors-primary-light-1:83 168 255;--un-preset-el-colors-primary-dark-1:58 142 230;--un-preset-el-colors-primary-light-2:102 177 255;--un-preset-el-colors-primary-dark-2:51 126 204;--un-preset-el-colors-primary-light-3:121 187 255;--un-preset-el-colors-primary-dark-3:45 111 179;--un-preset-el-colors-primary-light-4:140 197 255;--un-preset-el-colors-primary-dark-4:38 95 153;--un-preset-el-colors-primary-light-5:160 207 255;--un-preset-el-colors-primary-dark-5:32 79 128;--un-preset-el-colors-primary-light-6:179 216 255;--un-preset-el-colors-primary-dark-6:26 63 102;--un-preset-el-colors-primary-light-7:198 226 255;--un-preset-el-colors-primary-dark-7:19 47 77;--un-preset-el-colors-primary-light-8:217 236 255;--un-preset-el-colors-primary-dark-8:13 32 51;--un-preset-el-colors-primary-light-9:236 245 255;--un-preset-el-colors-primary-dark-9:6 16 26;--un-preset-el-colors-success-DEFAULT:103 194 58;--un-preset-el-colors-success-light-1:118 200 78;--un-preset-el-colors-success-dark-1:93 175 52;--un-preset-el-colors-success-light-2:133 206 97;--un-preset-el-colors-success-dark-2:82 155 46;--un-preset-el-colors-success-light-3:149 212 117;--un-preset-el-colors-success-dark-3:72 136 41;--un-preset-el-colors-success-light-4:164 218 137;--un-preset-el-colors-success-dark-4:62 116 35;--un-preset-el-colors-success-light-5:179 225 157;--un-preset-el-colors-success-dark-5:52 97 29;--un-preset-el-colors-success-light-6:194 231 176;--un-preset-el-colors-success-dark-6:41 78 23;--un-preset-el-colors-success-light-7:209 237 196;--un-preset-el-colors-success-dark-7:31 58 17;--un-preset-el-colors-success-light-8:225 243 216;--un-preset-el-colors-success-dark-8:21 39 12;--un-preset-el-colors-success-light-9:240 249 235;--un-preset-el-colors-success-dark-9:10 19 6;--un-preset-el-colors-warning-DEFAULT:230 162 60;--un-preset-el-colors-warning-light-1:233 171 80;--un-preset-el-colors-warning-dark-1:207 146 54;--un-preset-el-colors-warning-light-2:235 181 99;--un-preset-el-colors-warning-dark-2:184 130 48;--un-preset-el-colors-warning-light-3:238 190 119;--un-preset-el-colors-warning-dark-3:161 113 42;--un-preset-el-colors-warning-light-4:240 199 138;--un-preset-el-colors-warning-dark-4:138 97 36;--un-preset-el-colors-warning-light-5:243 209 158;--un-preset-el-colors-warning-dark-5:115 81 30;--un-preset-el-colors-warning-light-6:245 218 177;--un-preset-el-colors-warning-dark-6:92 65 24;--un-preset-el-colors-warning-light-7:248 227 197;--un-preset-el-colors-warning-dark-7:69 49 18;--un-preset-el-colors-warning-light-8:250 236 216;--un-preset-el-colors-warning-dark-8:46 32 12;--un-preset-el-colors-warning-light-9:253 246 236;--un-preset-el-colors-warning-dark-9:23 16 6;--un-preset-el-colors-error-DEFAULT:245 108 108;--un-preset-el-colors-error-light-1:246 123 123;--un-preset-el-colors-error-dark-1:221 97 97;--un-preset-el-colors-error-light-2:247 137 137;--un-preset-el-colors-error-dark-2:196 86 86;--un-preset-el-colors-error-light-3:248 152 152;--un-preset-el-colors-error-dark-3:172 76 76;--un-preset-el-colors-error-light-4:249 167 167;--un-preset-el-colors-error-dark-4:147 65 65;--un-preset-el-colors-error-light-5:250 182 182;--un-preset-el-colors-error-dark-5:123 54 54;--un-preset-el-colors-error-light-6:251 196 196;--un-preset-el-colors-error-dark-6:98 43 43;--un-preset-el-colors-error-light-7:252 211 211;--un-preset-el-colors-error-dark-7:74 32 32;--un-preset-el-colors-error-light-8:253 226 226;--un-preset-el-colors-error-dark-8:49 22 22;--un-preset-el-colors-error-light-9:254 240 240;--un-preset-el-colors-error-dark-9:25 11 11;--un-preset-el-colors-danger-DEFAULT:245 108 108;--un-preset-el-colors-danger-light-1:246 123 123;--un-preset-el-colors-danger-dark-1:221 97 97;--un-preset-el-colors-danger-light-2:247 137 137;--un-preset-el-colors-danger-dark-2:196 86 86;--un-preset-el-colors-danger-light-3:248 152 152;--un-preset-el-colors-danger-dark-3:172 76 76;--un-preset-el-colors-danger-light-4:249 167 167;--un-preset-el-colors-danger-dark-4:147 65 65;--un-preset-el-colors-danger-light-5:250 182 182;--un-preset-el-colors-danger-dark-5:123 54 54;--un-preset-el-colors-danger-light-6:251 196 196;--un-preset-el-colors-danger-dark-6:98 43 43;--un-preset-el-colors-danger-light-7:252 211 211;--un-preset-el-colors-danger-dark-7:74 32 32;--un-preset-el-colors-danger-light-8:253 226 226;--un-preset-el-colors-danger-dark-8:49 22 22;--un-preset-el-colors-danger-light-9:254 240 240;--un-preset-el-colors-danger-dark-9:25 11 11;--un-preset-el-colors-info-DEFAULT:144 147 153;--un-preset-el-colors-info-light-1:155 158 163;--un-preset-el-colors-info-dark-1:130 132 138;--un-preset-el-colors-info-light-2:166 169 173;--un-preset-el-colors-info-dark-2:115 118 122;--un-preset-el-colors-info-light-3:177 179 184;--un-preset-el-colors-info-dark-3:101 103 107;--un-preset-el-colors-info-light-4:188 190 194;--un-preset-el-colors-info-dark-4:86 88 92;--un-preset-el-colors-info-light-5:200 201 204;--un-preset-el-colors-info-dark-5:72 74 77;--un-preset-el-colors-info-light-6:211 212 214;--un-preset-el-colors-info-dark-6:58 59 61;--un-preset-el-colors-info-light-7:222 223 224;--un-preset-el-colors-info-dark-7:43 44 46;--un-preset-el-colors-info-light-8:233 233 235;--un-preset-el-colors-info-dark-8:29 29 31;--un-preset-el-colors-info-light-9:244 244 245;--un-preset-el-colors-info-dark-9:14 15 15;}
      .dark{--un-preset-el-colors-primary-DEFAULT:64 158 255;--un-preset-el-colors-primary-light-1:60 144 232;--un-preset-el-colors-primary-dark-1:83 168 255;--un-preset-el-colors-primary-light-2:55 130 208;--un-preset-el-colors-primary-dark-2:102 177 255;--un-preset-el-colors-primary-light-3:51 117 185;--un-preset-el-colors-primary-dark-3:121 187 255;--un-preset-el-colors-primary-light-4:46 103 161;--un-preset-el-colors-primary-dark-4:140 197 255;--un-preset-el-colors-primary-light-5:42 89 138;--un-preset-el-colors-primary-dark-5:160 207 255;--un-preset-el-colors-primary-light-6:38 75 114;--un-preset-el-colors-primary-dark-6:179 216 255;--un-preset-el-colors-primary-light-7:33 61 91;--un-preset-el-colors-primary-dark-7:198 226 255;--un-preset-el-colors-primary-light-8:29 48 67;--un-preset-el-colors-primary-dark-8:217 236 255;--un-preset-el-colors-primary-light-9:24 34 44;--un-preset-el-colors-primary-dark-9:236 245 255;--un-preset-el-colors-success-DEFAULT:103 194 58;--un-preset-el-colors-success-light-1:95 177 54;--un-preset-el-colors-success-dark-1:118 200 78;--un-preset-el-colors-success-light-2:86 159 50;--un-preset-el-colors-success-dark-2:133 206 97;--un-preset-el-colors-success-light-3:78 142 47;--un-preset-el-colors-success-dark-3:149 212 117;--un-preset-el-colors-success-light-4:70 124 43;--un-preset-el-colors-success-dark-4:164 218 137;--un-preset-el-colors-success-light-5:62 107 39;--un-preset-el-colors-success-dark-5:179 225 157;--un-preset-el-colors-success-light-6:53 90 35;--un-preset-el-colors-success-dark-6:194 231 176;--un-preset-el-colors-success-light-7:45 72 31;--un-preset-el-colors-success-dark-7:209 237 196;--un-preset-el-colors-success-light-8:37 55 28;--un-preset-el-colors-success-dark-8:225 243 216;--un-preset-el-colors-success-light-9:28 37 24;--un-preset-el-colors-success-dark-9:240 249 235;--un-preset-el-colors-warning-DEFAULT:230 162 60;--un-preset-el-colors-warning-light-1:209 148 56;--un-preset-el-colors-warning-dark-1:233 171 80;--un-preset-el-colors-warning-light-2:188 134 52;--un-preset-el-colors-warning-dark-2:235 181 99;--un-preset-el-colors-warning-light-3:167 119 48;--un-preset-el-colors-warning-dark-3:238 190 119;--un-preset-el-colors-warning-light-4:146 105 44;--un-preset-el-colors-warning-dark-4:240 199 138;--un-preset-el-colors-warning-light-5:125 91 40;--un-preset-el-colors-warning-dark-5:243 209 158;--un-preset-el-colors-warning-light-6:104 77 36;--un-preset-el-colors-warning-dark-6:245 218 177;--un-preset-el-colors-warning-light-7:83 63 32;--un-preset-el-colors-warning-dark-7:248 227 197;--un-preset-el-colors-warning-light-8:62 48 28;--un-preset-el-colors-warning-dark-8:250 236 216;--un-preset-el-colors-warning-light-9:41 34 24;--un-preset-el-colors-warning-dark-9:253 246 236;--un-preset-el-colors-error-DEFAULT:245 108 108;--un-preset-el-colors-error-light-1:223 99 99;--un-preset-el-colors-error-dark-1:246 123 123;--un-preset-el-colors-error-light-2:200 90 90;--un-preset-el-colors-error-dark-2:247 137 137;--un-preset-el-colors-error-light-3:178 82 82;--un-preset-el-colors-error-dark-3:248 152 152;--un-preset-el-colors-error-light-4:155 73 73;--un-preset-el-colors-error-dark-4:249 167 167;--un-preset-el-colors-error-light-5:133 64 64;--un-preset-el-colors-error-dark-5:250 182 182;--un-preset-el-colors-error-light-6:110 55 55;--un-preset-el-colors-error-dark-6:251 196 196;--un-preset-el-colors-error-light-7:88 46 46;--un-preset-el-colors-error-dark-7:252 211 211;--un-preset-el-colors-error-light-8:65 38 38;--un-preset-el-colors-error-dark-8:253 226 226;--un-preset-el-colors-error-light-9:43 29 29;--un-preset-el-colors-error-dark-9:254 240 240;--un-preset-el-colors-danger-DEFAULT:245 108 108;--un-preset-el-colors-danger-light-1:223 99 99;--un-preset-el-colors-danger-dark-1:246 123 123;--un-preset-el-colors-danger-light-2:200 90 90;--un-preset-el-colors-danger-dark-2:247 137 137;--un-preset-el-colors-danger-light-3:178 82 82;--un-preset-el-colors-danger-dark-3:248 152 152;--un-preset-el-colors-danger-light-4:155 73 73;--un-preset-el-colors-danger-dark-4:249 167 167;--un-preset-el-colors-danger-light-5:133 64 64;--un-preset-el-colors-danger-dark-5:250 182 182;--un-preset-el-colors-danger-light-6:110 55 55;--un-preset-el-colors-danger-dark-6:251 196 196;--un-preset-el-colors-danger-light-7:88 46 46;--un-preset-el-colors-danger-dark-7:252 211 211;--un-preset-el-colors-danger-light-8:65 38 38;--un-preset-el-colors-danger-dark-8:253 226 226;--un-preset-el-colors-danger-light-9:43 29 29;--un-preset-el-colors-danger-dark-9:254 240 240;--un-preset-el-colors-info-DEFAULT:144 147 153;--un-preset-el-colors-info-light-1:132 134 140;--un-preset-el-colors-info-dark-1:155 158 163;--un-preset-el-colors-info-light-2:119 122 126;--un-preset-el-colors-info-dark-2:166 169 173;--un-preset-el-colors-info-light-3:107 109 113;--un-preset-el-colors-info-dark-3:177 179 184;--un-preset-el-colors-info-light-4:94 96 100;--un-preset-el-colors-info-dark-4:188 190 194;--un-preset-el-colors-info-light-5:82 84 87;--un-preset-el-colors-info-dark-5:200 201 204;--un-preset-el-colors-info-light-6:70 71 73;--un-preset-el-colors-info-dark-6:211 212 214;--un-preset-el-colors-info-light-7:57 58 60;--un-preset-el-colors-info-dark-7:222 223 224;--un-preset-el-colors-info-light-8:45 45 47;--un-preset-el-colors-info-dark-8:233 233 235;--un-preset-el-colors-info-light-9:32 33 33;--un-preset-el-colors-info-dark-9:244 244 245;}
      /* layer: default */
      .text-danger{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-DEFAULT) / var(--un-text-opacity));}
      .text-danger-dark-1{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-dark-1) / var(--un-text-opacity));}
      .text-danger-dark-2{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-dark-2) / var(--un-text-opacity));}
      .text-danger-dark-3{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-dark-3) / var(--un-text-opacity));}
      .text-danger-dark-4{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-dark-4) / var(--un-text-opacity));}
      .text-danger-dark-5{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-dark-5) / var(--un-text-opacity));}
      .text-danger-dark-6{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-dark-6) / var(--un-text-opacity));}
      .text-danger-dark-7{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-dark-7) / var(--un-text-opacity));}
      .text-danger-dark-8{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-dark-8) / var(--un-text-opacity));}
      .text-danger-dark-9{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-dark-9) / var(--un-text-opacity));}
      .text-danger-light-1{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-light-1) / var(--un-text-opacity));}
      .text-danger-light-2{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-light-2) / var(--un-text-opacity));}
      .text-danger-light-3{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-light-3) / var(--un-text-opacity));}
      .text-danger-light-4{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-light-4) / var(--un-text-opacity));}
      .text-danger-light-5{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-light-5) / var(--un-text-opacity));}
      .text-danger-light-6{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-light-6) / var(--un-text-opacity));}
      .text-danger-light-7{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-light-7) / var(--un-text-opacity));}
      .text-danger-light-8{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-light-8) / var(--un-text-opacity));}
      .text-danger-light-9{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-danger-light-9) / var(--un-text-opacity));}
      .text-error{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-DEFAULT) / var(--un-text-opacity));}
      .text-error-dark-1{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-dark-1) / var(--un-text-opacity));}
      .text-error-dark-2{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-dark-2) / var(--un-text-opacity));}
      .text-error-dark-3{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-dark-3) / var(--un-text-opacity));}
      .text-error-dark-4{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-dark-4) / var(--un-text-opacity));}
      .text-error-dark-5{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-dark-5) / var(--un-text-opacity));}
      .text-error-dark-6{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-dark-6) / var(--un-text-opacity));}
      .text-error-dark-7{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-dark-7) / var(--un-text-opacity));}
      .text-error-dark-8{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-dark-8) / var(--un-text-opacity));}
      .text-error-dark-9{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-dark-9) / var(--un-text-opacity));}
      .text-error-light-1{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-light-1) / var(--un-text-opacity));}
      .text-error-light-2{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-light-2) / var(--un-text-opacity));}
      .text-error-light-3{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-light-3) / var(--un-text-opacity));}
      .text-error-light-4{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-light-4) / var(--un-text-opacity));}
      .text-error-light-5{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-light-5) / var(--un-text-opacity));}
      .text-error-light-6{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-light-6) / var(--un-text-opacity));}
      .text-error-light-7{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-light-7) / var(--un-text-opacity));}
      .text-error-light-8{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-light-8) / var(--un-text-opacity));}
      .text-error-light-9{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-error-light-9) / var(--un-text-opacity));}
      .text-info{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-DEFAULT) / var(--un-text-opacity));}
      .text-info-dark-1{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-dark-1) / var(--un-text-opacity));}
      .text-info-dark-2{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-dark-2) / var(--un-text-opacity));}
      .text-info-dark-3{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-dark-3) / var(--un-text-opacity));}
      .text-info-dark-4{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-dark-4) / var(--un-text-opacity));}
      .text-info-dark-5{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-dark-5) / var(--un-text-opacity));}
      .text-info-dark-6{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-dark-6) / var(--un-text-opacity));}
      .text-info-dark-7{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-dark-7) / var(--un-text-opacity));}
      .text-info-dark-8{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-dark-8) / var(--un-text-opacity));}
      .text-info-dark-9{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-dark-9) / var(--un-text-opacity));}
      .text-info-light-1{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-light-1) / var(--un-text-opacity));}
      .text-info-light-2{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-light-2) / var(--un-text-opacity));}
      .text-info-light-3{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-light-3) / var(--un-text-opacity));}
      .text-info-light-4{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-light-4) / var(--un-text-opacity));}
      .text-info-light-5{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-light-5) / var(--un-text-opacity));}
      .text-info-light-6{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-light-6) / var(--un-text-opacity));}
      .text-info-light-7{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-light-7) / var(--un-text-opacity));}
      .text-info-light-8{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-light-8) / var(--un-text-opacity));}
      .text-info-light-9{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-info-light-9) / var(--un-text-opacity));}
      .text-primary{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-DEFAULT) / var(--un-text-opacity));}
      .text-primary-dark-1{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-dark-1) / var(--un-text-opacity));}
      .text-primary-dark-2{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-dark-2) / var(--un-text-opacity));}
      .text-primary-dark-3{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-dark-3) / var(--un-text-opacity));}
      .text-primary-dark-4{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-dark-4) / var(--un-text-opacity));}
      .text-primary-dark-5{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-dark-5) / var(--un-text-opacity));}
      .text-primary-dark-6{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-dark-6) / var(--un-text-opacity));}
      .text-primary-dark-7{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-dark-7) / var(--un-text-opacity));}
      .text-primary-dark-8{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-dark-8) / var(--un-text-opacity));}
      .text-primary-dark-9{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-dark-9) / var(--un-text-opacity));}
      .text-primary-light-1{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-light-1) / var(--un-text-opacity));}
      .text-primary-light-2{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-light-2) / var(--un-text-opacity));}
      .text-primary-light-3{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-light-3) / var(--un-text-opacity));}
      .text-primary-light-4{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-light-4) / var(--un-text-opacity));}
      .text-primary-light-5{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-light-5) / var(--un-text-opacity));}
      .text-primary-light-6{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-light-6) / var(--un-text-opacity));}
      .text-primary-light-7{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-light-7) / var(--un-text-opacity));}
      .text-primary-light-8{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-light-8) / var(--un-text-opacity));}
      .text-primary-light-9{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-primary-light-9) / var(--un-text-opacity));}
      .text-success{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-DEFAULT) / var(--un-text-opacity));}
      .text-success-dark-1{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-dark-1) / var(--un-text-opacity));}
      .text-success-dark-2{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-dark-2) / var(--un-text-opacity));}
      .text-success-dark-3{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-dark-3) / var(--un-text-opacity));}
      .text-success-dark-4{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-dark-4) / var(--un-text-opacity));}
      .text-success-dark-5{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-dark-5) / var(--un-text-opacity));}
      .text-success-dark-6{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-dark-6) / var(--un-text-opacity));}
      .text-success-dark-7{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-dark-7) / var(--un-text-opacity));}
      .text-success-dark-8{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-dark-8) / var(--un-text-opacity));}
      .text-success-dark-9{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-dark-9) / var(--un-text-opacity));}
      .text-success-light-1{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-light-1) / var(--un-text-opacity));}
      .text-success-light-2{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-light-2) / var(--un-text-opacity));}
      .text-success-light-3{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-light-3) / var(--un-text-opacity));}
      .text-success-light-4{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-light-4) / var(--un-text-opacity));}
      .text-success-light-5{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-light-5) / var(--un-text-opacity));}
      .text-success-light-6{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-light-6) / var(--un-text-opacity));}
      .text-success-light-7{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-light-7) / var(--un-text-opacity));}
      .text-success-light-8{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-light-8) / var(--un-text-opacity));}
      .text-success-light-9{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-success-light-9) / var(--un-text-opacity));}
      .text-warning{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-DEFAULT) / var(--un-text-opacity));}
      .text-warning-dark-1{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-dark-1) / var(--un-text-opacity));}
      .text-warning-dark-2{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-dark-2) / var(--un-text-opacity));}
      .text-warning-dark-3{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-dark-3) / var(--un-text-opacity));}
      .text-warning-dark-4{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-dark-4) / var(--un-text-opacity));}
      .text-warning-dark-5{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-dark-5) / var(--un-text-opacity));}
      .text-warning-dark-6{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-dark-6) / var(--un-text-opacity));}
      .text-warning-dark-7{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-dark-7) / var(--un-text-opacity));}
      .text-warning-dark-8{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-dark-8) / var(--un-text-opacity));}
      .text-warning-dark-9{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-dark-9) / var(--un-text-opacity));}
      .text-warning-light-1{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-light-1) / var(--un-text-opacity));}
      .text-warning-light-2{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-light-2) / var(--un-text-opacity));}
      .text-warning-light-3{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-light-3) / var(--un-text-opacity));}
      .text-warning-light-4{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-light-4) / var(--un-text-opacity));}
      .text-warning-light-5{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-light-5) / var(--un-text-opacity));}
      .text-warning-light-6{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-light-6) / var(--un-text-opacity));}
      .text-warning-light-7{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-light-7) / var(--un-text-opacity));}
      .text-warning-light-8{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-light-8) / var(--un-text-opacity));}
      .text-warning-light-9{--un-text-opacity:1;color:rgb(var(--un-preset-el-colors-warning-light-9) / var(--un-text-opacity));}"
    `);
  });
});
