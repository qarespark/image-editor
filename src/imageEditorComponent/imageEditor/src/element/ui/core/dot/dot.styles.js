import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { activeDotMixin } from './dot.mixin';
var baseClassName = 'Dot';
var transitionDuration = 0.3;
var Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon')
}).withConfig({
  componentId: "sc-1d7d4t3-0"
})(function (_ref) {
  var _ref$visible = _ref.visible,
    visible = _ref$visible === void 0 ? false : _ref$visible,
    _ref$on = _ref.on,
    on = _ref$on === void 0 ? false : _ref$on,
    palette = _ref.theme.palette;
  return css(["position:absolute;top:0;left:0;display:inline-flex;align-items:center;justify-content:center;transition:opacity ", "s;opacity:", ";color:", ";"], transitionDuration, visible ? 1 : 0, palette[on ? PColor.AccentPrimary : PColor.BordersStrong]);
});
var Dot = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1d7d4t3-1"
})(function (_ref2) {
  var _ref2$active = _ref2.active,
    active = _ref2$active === void 0 ? false : _ref2$active;
  return css(["position:relative;display:inline-flex;align-items:center;justify-content:center;width:6px;height:6px;transition:background-color ", "s ease;border:1px solid transparent;border-radius:50%;", ""], transitionDuration, active && activeDotMixin);
});
var Styled = applyDisplayNames({
  Dot: Dot,
  Icon: Icon
});
export default Styled;