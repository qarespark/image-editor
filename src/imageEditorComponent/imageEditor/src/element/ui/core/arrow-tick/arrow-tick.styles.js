import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { typeArrowTickMixin } from './arrow-tick.mixin';
import { Position } from '../../utils/types';
var baseClassName = 'ArrowTick';
var ArrowTick = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-tlypde-0"
})(function (_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? Position.Right : _ref$type;
  return css(["display:inline-flex;", ""], typeArrowTickMixin[type]);
});
var Styled = applyDisplayNames({
  ArrowTick: ArrowTick
});
export default Styled;