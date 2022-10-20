import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { css } from 'styled-components'; // import type { With } from '../../utils/types';
// import { Color as PaletteColor } from '../../utils/types/palette';
import { FontVariant as FV } from '../../utils/types/typography';
import { Size } from './types';
var _sizeMenuItemMixin;
export var sizeMenuItemMixin = (_sizeMenuItemMixin = {}, _defineProperty(_sizeMenuItemMixin, Size.Sm, function (_ref) {
  var font = _ref.theme.typography.font;
  return css(["padding:4px 8px;min-height:22px;", ""], font[FV.LabelSmall]);
}), _defineProperty(_sizeMenuItemMixin, Size.Md, function (_ref2) {
  var font = _ref2.theme.typography.font;
  return css(["padding:8px 12px;min-height:32px;", ""], font[FV.LabelNormal]);
}), _sizeMenuItemMixin);