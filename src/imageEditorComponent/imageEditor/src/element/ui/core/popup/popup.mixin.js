import _defineProperty from "@babel/runtime/helpers/defineProperty";

import { css } from 'styled-components'; // import type { WithTheme } from '../../theme/entity';
// import { Color as PaletteColor } from '../../utils/types/palette';

import { Horizontal, Vertical } from './types';

var _positionHorizontalMi, _positionVerticalMixi;
export var positionHorizontalMixin = (_positionHorizontalMi = {}, _defineProperty(_positionHorizontalMi, Horizontal.Left, css(["left:25px;right:auto;"])), _defineProperty(_positionHorizontalMi, Horizontal.Center, css(["left:50%;right:auto;transform:translateX(-50%);"])), _defineProperty(_positionHorizontalMi, Horizontal.Right, css(["left:auto;right:25px;"])), _positionHorizontalMi);
export var positionVerticalMixin = (_positionVerticalMixi = {}, _defineProperty(_positionVerticalMixi, Vertical.Top, css(["top:25px;bottom:auto;"])), _defineProperty(_positionVerticalMixi, Vertical.Bottom, css(["top:auto;bottom:25px;"])), _positionVerticalMixi); // export const errorMixin = ({ theme: { palette } }: WithTheme) => css`
//   background: ${palette[PaletteColor.BackgroundSecondary]} !important;
//   border: 1px solid ${palette[PaletteColor.Error]} !important;
// `;