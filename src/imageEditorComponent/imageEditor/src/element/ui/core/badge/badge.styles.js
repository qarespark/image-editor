import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { colorBadgeMixin } from './badge.mixin';
var baseClassName = 'Badge';
var defaultSize = 20;
var BadgeRoot = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1rfm40m-0"
})(["position:relative;display:inline-flex;flex-shrink:0;vertical-align:middle;"]);
var Badge = styled.span.attrs({
  className: generateClassNames(baseClassName)
}).withConfig({
  componentId: "sc-1rfm40m-1"
})(function (_ref) {
  var size = _ref.size,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'secondary' : _ref$color,
    _ref$fontSize = _ref.fontSize,
    fontSize = _ref$fontSize === void 0 ? '0.75rem' : _ref$fontSize,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? '0 6px' : _ref$padding,
    inline = _ref.inline;
  return css(["", " display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:center;align-content:center;height:", "px;min-width:", "px;line-height:1;padding:", ";font-size:", ";box-sizing:border-box;transition:transform 225ms cubic-bezier(0.4,0,0.2,1) 0ms;border-radius:", "px;z-index:1;", ""], inline ? '' : 'position: absolute;', size || defaultSize, size || defaultSize, typeof padding === 'number' ? "".concat(padding, "px") : padding, typeof fontSize === 'number' ? "".concat(fontSize, "px") : fontSize, (size || defaultSize) / 2, colorBadgeMixin[color]);
});
var Styled = applyDisplayNames({
  BadgeRoot: BadgeRoot,
  Badge: Badge
});
export default Styled;