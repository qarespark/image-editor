import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
var baseClassName = 'Menu';
var Overlay = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Overlay')
}).withConfig({
  componentId: "sc-10okxhw-0"
})(function () {
  return css(["position:fixed;right:0px;bottom:0px;top:0px;left:0px;background-color:transparent;z-index:-1;"]);
});
var Menu = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-10okxhw-1"
})(function (_ref) {
  var rect = _ref.rect,
    theme = _ref.theme,
    _ref$maxHeight = _ref.maxHeight,
    maxHeight = _ref$maxHeight === void 0 ? '' : _ref$maxHeight;
  return css(["min-width:", "px;min-height:16px;overflow-x:hidden;overflow-y:auto;transition:opacity 251ms cubic-bezier(0.4,0,0.2,1) 0ms,transform 167ms cubic-bezier(0.4,0,0.2,1) 0ms;outline:0;box-shadow:0 2px 4px ", ";border-radius:", ";", "::-webkit-scrollbar{width:6px;}::-webkit-scrollbar-track{background:#f1f1f1;}::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.35);border-radius:2px;}::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,0.5);}"], rect.width, theme.palette[PColor.LightShadow], theme.shape.borderRadius[BRSize.Md], maxHeight && css(["max-height:", ";"], Number.isNaN(+maxHeight) ? maxHeight : "".concat(maxHeight, "px")));
});
var Styled = applyDisplayNames({
  Menu: Menu,
  Overlay: Overlay
});
export default Styled;