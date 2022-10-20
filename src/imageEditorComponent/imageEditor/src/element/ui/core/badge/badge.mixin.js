import _defineProperty from "@babel/runtime/helpers/defineProperty";


import { css } from 'styled-components';
import { Color as PaletteColor } from '../../utils/types/palette';
import { BadgeColor } from '../../utils/types';
var _colorBadgeMixin;
export var colorBadgeMixin = (_colorBadgeMixin = {}, _defineProperty(_colorBadgeMixin, BadgeColor.Primary, function (_ref) {
  var palette = _ref.theme.palette;
  return css(["background-color:", ";color:", ";"], palette[PaletteColor.AccentPrimary], palette[PaletteColor.ButtonPrimaryText]);
}), _defineProperty(_colorBadgeMixin, BadgeColor.White, function (_ref2) {
  var palette = _ref2.theme.palette;
  return css(["background-color:", ";color:", ";"], palette[PaletteColor.ButtonPrimaryText], palette[PaletteColor.AccentPrimary]);
}), _defineProperty(_colorBadgeMixin, BadgeColor.Secondary, function (_ref3) {
  var palette = _ref3.theme.palette;
  return css(["background-color:", ";color:#e9eef2;"], palette[PaletteColor.IconsPrimary]);
}), _colorBadgeMixin);