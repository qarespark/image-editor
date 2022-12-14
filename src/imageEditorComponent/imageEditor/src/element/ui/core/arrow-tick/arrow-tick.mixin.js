import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { Position } from '../../utils/types';
import { css } from 'styled-components'; // import type { WithTheme } from '../../theme/entity';
var _typeArrowTickMixin;
// import { Color as PaletteColor } from '../../utils/types/palette';

export var typeArrowTickMixin = (_typeArrowTickMixin = {}, _defineProperty(_typeArrowTickMixin, Position.Right, css(["svg{transform:rotate(0);transition:transform 150ms;}"])), _defineProperty(_typeArrowTickMixin, Position.Left, css(["svg{transform:rotate(180deg);transition:transform 150ms;}"])), _defineProperty(_typeArrowTickMixin, Position.Top, css(["svg{transform:rotate(-90deg);transition:transform 150ms;}"])), _defineProperty(_typeArrowTickMixin, Position.Bottom, css(["svg{transform:rotate(90deg);transition:transform 150ms;}"])), _typeArrowTickMixin);