import { TinyColor, type ColorInput } from '@ctrl/tinycolor';

export const generate = (color: ColorInput, lightenColor: ColorInput, darkenColor: ColorInput) => {
  const c = new TinyColor(color);
  const lc = new TinyColor(lightenColor || 'white');
  const dc = new TinyColor(darkenColor || 'black');
  return {
    DEFAULT: c.toHexString(),
    light: Object.fromEntries(
      Array.from({ length: 9 }).map((_, index) => [
        index + 1,
        c.mix(lc, 10 * (index + 1)).toHexString(),
      ]),
    ),
    dark: Object.fromEntries(
      Array.from({ length: 9 }).map((_, index) => [
        index + 1,
        c.mix(dc, 10 * (index + 1)).toHexString(),
      ]),
    ),
  };
};
