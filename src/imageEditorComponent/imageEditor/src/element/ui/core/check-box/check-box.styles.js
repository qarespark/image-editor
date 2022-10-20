import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
var baseClassName = 'CheckBox';
var Input = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Input'),
  type: 'checkbox'
}).withConfig({
  componentId: "sc-1rkixul-0"
})(function () {
  return css(["position:absolute;top:0;left:0;width:100%;height:100%;margin:0;opacity:0;padding:0;cursor:inherit;z-index:1;"]);
});
var CheckBox = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1rkixul-1"
})(function (_ref) {
  var palette = _ref.theme.palette,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return css(["position:relative;display:inline-flex;cursor:pointer;color:", ";"], disabled ? palette[PColor.ButtonDisabledText] : palette[PColor.AccentPrimary]);
});
var Styled = applyDisplayNames({
  CheckBox: CheckBox,
  Input: Input
});
export default Styled;