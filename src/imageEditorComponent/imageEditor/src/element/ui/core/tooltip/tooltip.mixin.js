import _defineProperty from "@babel/runtime/helpers/defineProperty";


// import type { WithTheme } from '../../theme/entity';
// import { Color as PaletteColor } from '../../utils/types/palette';
import { FontVariant as FV } from '../../utils/types/typography';
import { Size } from './types';
var _sizeTooltipMixin;
export var sizeTooltipMixin = (_sizeTooltipMixin = {}, _defineProperty(_sizeTooltipMixin, Size.Sm, function (_ref) {
  var font = _ref.theme.typography.font;
  return font[FV.LabelSmall];
}), _defineProperty(_sizeTooltipMixin, Size.Md, function (_ref2) {
  var font = _ref2.theme.typography.font;
  return font[FV.LabelNormal];
}), _sizeTooltipMixin);