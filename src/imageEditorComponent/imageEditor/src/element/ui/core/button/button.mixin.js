import _defineProperty from "@babel/runtime/helpers/defineProperty";


import { css } from 'styled-components';
import StyledBadge from '../badge/badge.styles';
import { Color as PaletteColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';
import { ButtonSize, ButtonColor } from '../../utils/types';
var _colorButtonMixin, _sizeButtonMixin, _sizeButtonLabelMixin;
export var colorButtonMixin = (_colorButtonMixin = {}, _defineProperty(_colorButtonMixin, ButtonColor.Primary, function (_ref) {
  var palette = _ref.theme.palette;
  return css(["background-color:", ";color:", ";", "{background-color:", ";}&:hover{background-color:", ";}&:active{background-color:", ";}&:disabled{color:", ";background:", ";", "{background-color:", ";color:", ";}}"], palette[PaletteColor.AccentPrimary], palette[PaletteColor.ButtonPrimaryText], StyledBadge.Badge, palette[PaletteColor.ButtonPrimaryText], palette[PaletteColor.AccentPrimaryHover], palette[PaletteColor.AccentPrimaryActive], palette[PaletteColor.ButtonDisabledText], palette[PaletteColor.AccentPrimaryDisabled], StyledBadge.Badge, palette[PaletteColor.ButtonDisabledText], palette[PaletteColor.AccentPrimaryDisabled]);
}), _defineProperty(_colorButtonMixin, ButtonColor.Secondary, function (_ref2) {
  var palette = _ref2.theme.palette;
  return css(["background-color:", ";color:", ";&:hover{background-color:", ";}&:active{background-color:", ";}&:disabled{color:", ";background:", ";", "{background-color:", ";}}", "{background-color:", ";}"], palette[PaletteColor.ActiveSecondary], palette[PaletteColor.IconsPrimary], palette[PaletteColor.ActiveSecondaryHover], palette[PaletteColor.ActiveSecondaryActive], palette[PaletteColor.ButtonDisabledText], palette[PaletteColor.AccentPrimaryDisabled], StyledBadge.Badge, palette[PaletteColor.ButtonDisabledText], StyledBadge.Badge, palette[PaletteColor.IconsPrimary]);
}), _defineProperty(_colorButtonMixin, ButtonColor.Link, function (_ref3) {
  var palette = _ref3.theme.palette;
  return css(["background-color:transparent;color:", ";&:hover{color:", ";", "{background-color:", ";}}&:active{color:", ";", "{background-color:", ";}}&:disabled{color:", ";", "{background-color:", ";}}"], palette[PaletteColor.LinkPrimary], palette[PaletteColor.LinkHover], StyledBadge.Badge, palette[PaletteColor.LinkHover], palette[PaletteColor.LinkActive], StyledBadge.Badge, palette[PaletteColor.LinkActive], palette[PaletteColor.ButtonDisabledText], StyledBadge.Badge, palette[PaletteColor.ButtonDisabledText]);
}), _defineProperty(_colorButtonMixin, ButtonColor.Error, function (_ref4) {
  var palette = _ref4.theme.palette;
  return css(["background-color:", ";color:", ";", "{background-color:", ";}&:hover{background-color:rgba(224,81,44,1);}&:active{background-color:rgba(201,58,23,1);}&:disabled{color:", ";background:", ";", "{background-color:", ";color:", ";}}"], palette[PaletteColor.Error], palette[PaletteColor.ButtonPrimaryText], StyledBadge.Badge, palette[PaletteColor.ButtonPrimaryText], palette[PaletteColor.ButtonDisabledText], palette[PaletteColor.AccentPrimaryDisabled], StyledBadge.Badge, palette[PaletteColor.ButtonDisabledText], palette[PaletteColor.AccentPrimaryDisabled]);
}), _colorButtonMixin);
export var sizeButtonMixin = (_sizeButtonMixin = {}, _defineProperty(_sizeButtonMixin, ButtonSize.Xs, css(["padding:4px 8px;"])), _defineProperty(_sizeButtonMixin, ButtonSize.Sm, css(["padding:6px 10px;"])), _defineProperty(_sizeButtonMixin, ButtonSize.Md, css(["padding:8px 12px;"])), _defineProperty(_sizeButtonMixin, ButtonSize.Lg, css(["padding:10px 14px;"])), _defineProperty(_sizeButtonMixin, ButtonSize.Xl, css(["padding:12px 16px;"])), _sizeButtonMixin);
export var sizeButtonLabelMixin = (_sizeButtonLabelMixin = {}, _defineProperty(_sizeButtonLabelMixin, ButtonSize.Xs, function (_ref5) {
  var font = _ref5.theme.typography.font;
  return css(font[FontVariant.ButtonXs]);
}), _defineProperty(_sizeButtonLabelMixin, ButtonSize.Sm, function (_ref6) {
  var font = _ref6.theme.typography.font;
  return css(font[FontVariant.ButtonSm]);
}), _defineProperty(_sizeButtonLabelMixin, ButtonSize.Md, function (_ref7) {
  var font = _ref7.theme.typography.font;
  return css(font[FontVariant.ButtonMd]);
}), _defineProperty(_sizeButtonLabelMixin, ButtonSize.Lg, function (_ref8) {
  var font = _ref8.theme.typography.font;
  return css(font[FontVariant.ButtonLg]);
}), _defineProperty(_sizeButtonLabelMixin, ButtonSize.Xl, function (_ref9) {
  var font = _ref9.theme.typography.font;
  return css(font[FontVariant.ButtonXl]);
}), _sizeButtonLabelMixin);