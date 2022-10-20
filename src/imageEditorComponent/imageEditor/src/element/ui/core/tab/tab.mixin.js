import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { css } from 'styled-components';
import { FontVariant as FV } from '../../utils/types/typography/font-variant';
import { Size } from './types';
var _tabSizeMixin, _iconSizeMixin;
export var tabSizeMixin = (_tabSizeMixin = {}, _defineProperty(_tabSizeMixin, Size.Md, function (_ref) {
  var font = _ref.theme.typography.font;
  return css(["", " padding:8px 0px;"], font[FV.LabelSmall]);
}), _defineProperty(_tabSizeMixin, Size.Lg, function (_ref2) {
  var font = _ref2.theme.typography.font;
  return css(["", " padding:15px 0px;"], font[FV.LabelNormal]);
}), _tabSizeMixin);
export var iconSizeMixin = (_iconSizeMixin = {}, _defineProperty(_iconSizeMixin, Size.Md, css(["width:12px;height:12px;"])), _defineProperty(_iconSizeMixin, Size.Lg, css(["width:16px;height:16px;"])), _iconSizeMixin);