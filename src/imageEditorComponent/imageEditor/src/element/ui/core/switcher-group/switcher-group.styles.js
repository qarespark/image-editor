import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
// import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
var baseClassName = 'SwitcherGroup';
var Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
  type: 'checkbox'
}).withConfig({
  componentId: "sc-17pbydo-0"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["display:flex;align-items:center;font-size:12px;line-height:14px;margin-left:8px;color:", ";"], theme.palette[PColor.TextPrimary]);
});
var SwitcherGroup = styled.label.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-17pbydo-1"
})(function () {
  return css(["position:relative;display:inline-flex;cursor:pointer;"]);
});
var Styled = applyDisplayNames({
  SwitcherGroup: SwitcherGroup,
  Label: Label
});
export default Styled;