import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { css } from 'styled-components';
import { Position } from '../../utils/types';
var _typeArrowMixin;
export var typeArrowMixin = (_typeArrowMixin = {}, _defineProperty(_typeArrowMixin, Position.Right, css([""])), _defineProperty(_typeArrowMixin, Position.Left, css(["transform:rotate(180deg);"])), _defineProperty(_typeArrowMixin, Position.Top, css(["transform:rotate(-90deg);"])), _defineProperty(_typeArrowMixin, Position.Bottom, css(["transform:rotate(90deg);"])), _typeArrowMixin);