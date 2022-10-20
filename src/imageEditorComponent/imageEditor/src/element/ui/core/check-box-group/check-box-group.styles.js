import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
var baseClassName = 'CheckBoxGroup';
var Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
  type: 'checkbox'
}).withConfig({
  componentId: "sc-gshoib-0"
})(function (_ref) {
  var theme = _ref.theme,
    _ref$labelPosition = _ref.labelPosition,
    labelPosition = _ref$labelPosition === void 0 ? 'after' : _ref$labelPosition,
    disabled = _ref.disabled;
  return css(["display:flex;align-items:center;font-size:12px;line-height:14px;", ":8px;color:", ";"], "margin-".concat(labelPosition === 'after' ? 'left' : 'right'), disabled ? theme.palette[PColor.ButtonDisabledText] : theme.palette[PColor.TextPrimary]);
});
var CheckBoxGroup = styled.label.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-gshoib-1"
})(function () {
  return css(["position:relative;display:inline-flex;cursor:pointer;"]);
});
var Styled = applyDisplayNames({
  CheckBoxGroup: CheckBoxGroup,
  Label: Label
});
export default Styled;