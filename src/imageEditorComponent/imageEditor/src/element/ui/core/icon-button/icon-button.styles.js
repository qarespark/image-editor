import _defineProperty from "@babel/runtime/helpers/defineProperty";


import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import ButtonStyled from '../button/button.styles';
import { ButtonSize } from '../../utils/types';
var _squarePaddingMixin;
var baseClassName = 'IconButton';
var squarePaddingMixin = (_squarePaddingMixin = {}, _defineProperty(_squarePaddingMixin, ButtonSize.Xs, css(["padding:6px;"])), _defineProperty(_squarePaddingMixin, ButtonSize.Sm, css(["padding:8px;"])), _defineProperty(_squarePaddingMixin, ButtonSize.Md, css(["padding:8px;"])), _defineProperty(_squarePaddingMixin, ButtonSize.Lg, css(["padding:10px;"])), _defineProperty(_squarePaddingMixin, ButtonSize.Xl, css(["padding:11px;"])), _squarePaddingMixin);
var IconButton = styled(ButtonStyled.Button).attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-10edh45-0"
})(function (_ref) {
  var _ref$square = _ref.square,
    square = _ref$square === void 0 ? false : _ref$square,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? ButtonSize.Md : _ref$size;
  return css(["", ""], square && squarePaddingMixin[size]);
});
var Styled = applyDisplayNames({
  IconButton: IconButton
});
export default Styled;