import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { css } from 'styled-components';
import { Color as PaletteColor } from '../../utils/types/palette';
import { FontVariant as FV } from '../../utils/types/typography';
import { Size } from './types';
var _sizeInputMixin;
export var sizeInputMixin = (_sizeInputMixin = {}, _defineProperty(_sizeInputMixin, Size.Sm, function (_ref) {
  var font = _ref.theme.typography.font;
  return css(["padding:4px 8px;height:24px;", ""], font[FV.InputSm]);
}), _defineProperty(_sizeInputMixin, Size.Md, function (_ref2) {
  var font = _ref2.theme.typography.font;
  return css(["padding:8px 12px;height:30px;", ""], font[FV.InputMd]);
}), _sizeInputMixin);
export var errorMixin = function errorMixin(_ref3) {
  var palette = _ref3.theme.palette;
  return css(["background:", " !important;border:1px solid ", " !important;"], palette[PaletteColor.BackgroundSecondary], palette[PaletteColor.Error]);
};