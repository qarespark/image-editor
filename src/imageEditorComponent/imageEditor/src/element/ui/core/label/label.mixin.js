import { css } from 'styled-components';
import { Color as PaletteColor } from '../../utils/types/palette'; // import { Type } from './types';
// export const sizeInputMixin = {
//   [Size.Sm]: css`
//     height: 24px;
//   `,
//   [Size.Md]: css`
//     height: 30px;
//   `,
// };

export var errorMixin = function errorMixin(_ref) {
  var palette = _ref.theme.palette;
  return css(["color:", " !important;"], palette[PaletteColor.Error]);
};