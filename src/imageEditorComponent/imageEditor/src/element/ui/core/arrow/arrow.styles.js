import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { typeArrowMixin } from './arrow.mixin';
import { Position } from '../../utils/types';
var baseClassName = 'Arrow';
var Arrow = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1k3o6e1-0"
})(function (_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? Position.Right : _ref$type;
  return css(["display:inline-flex;transition:transform 0.15s;", ""], typeArrowMixin[type]);
});
var Styled = applyDisplayNames({
  Arrow: Arrow
});
export default Styled;