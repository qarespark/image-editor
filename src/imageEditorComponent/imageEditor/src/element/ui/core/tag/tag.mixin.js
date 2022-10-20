import _defineProperty from "@babel/runtime/helpers/defineProperty";


import { css } from 'styled-components'; // import type { WithTheme } from '../../theme/entity';
// import { Color as PaletteColor } from '../../utils/types/palette';

import { Size } from './types';
var _sizeTagLabelMixin, _sizeTagCrossMixin;
export var sizeTagLabelMixin = (_sizeTagLabelMixin = {}, _defineProperty(_sizeTagLabelMixin, Size.Sm, css(["font-weight:normal;font-size:12px;line-height:14px;padding:4px 8px;"])), _defineProperty(_sizeTagLabelMixin, Size.Md, css(["font-weight:normal;font-size:14px;line-height:16px;padding:4px 12px;"])), _defineProperty(_sizeTagLabelMixin, Size.Lg, css(["font-weight:500;font-size:15px;line-height:18px;padding:6px 16px;"])), _sizeTagLabelMixin);
export var sizeTagCrossMixin = (_sizeTagCrossMixin = {}, _defineProperty(_sizeTagCrossMixin, Size.Sm, css(["right:1px;top:1px;"])), _defineProperty(_sizeTagCrossMixin, Size.Md, css(["right:3px;top:3px;"])), _defineProperty(_sizeTagCrossMixin, Size.Lg, css(["right:3px;top:3px;"])), _sizeTagCrossMixin);