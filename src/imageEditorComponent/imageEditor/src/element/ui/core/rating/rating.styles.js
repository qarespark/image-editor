import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
var baseClassName = 'Rating';
var Rating = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1iz83el-0"
})(function () {
  return css(["display:inline-flex;align-items:center;"]);
});
var Item = styled.label.attrs({
  className: generateClassNames(baseClassName, 'Item')
}).withConfig({
  componentId: "sc-1iz83el-1"
})(function (_ref) {
  var _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly;
  return css(["position:relative;display:inline-flex;margin-left:3px;&:first-child{margin-left:0;}", " input{position:absolute;visibility:hidden;}"], !readOnly && css(["cursor:pointer;"]));
});
var Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon')
}).withConfig({
  componentId: "sc-1iz83el-2"
})(function (_ref2) {
  var _ref2$active = _ref2.active,
    active = _ref2$active === void 0 ? false : _ref2$active,
    palette = _ref2.theme.palette;
  return css(["display:inline-flex;color:", ";"], active ? palette[PColor.Warning] : palette[PColor.TextPrimary]);
});
var Styled = applyDisplayNames({
  Rating: Rating,
  Item: Item,
  Icon: Icon
});
export default Styled;