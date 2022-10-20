import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { errorMixin } from './label.mixin';
var baseClassName = 'Label';
var Label = styled.label.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-16k2ql4-0"
})(function (_ref) {
  var _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error,
    htmlFor = _ref.htmlFor,
    theme = _ref.theme;
  return css(["display:flex;align-items:center;color:", ";font-style:normal;font-weight:normal;font-size:12px;line-height:14px;cursor:", ";", ";"], theme.palette[PColor.TextSecondary], htmlFor && 'pointer', error && errorMixin);
});
var Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon')
}).withConfig({
  componentId: "sc-16k2ql4-1"
})(function (_ref2) {
  var _ref2$error = _ref2.error,
    error = _ref2$error === void 0 ? false : _ref2$error,
    palette = _ref2.theme.palette,
    _ref2$$end = _ref2.$end,
    $end = _ref2$$end === void 0 ? false : _ref2$$end;
  return css(["display:flex;", ";color:", ";", ""], $end ? 'margin-left: 4px' : 'margin-right: 4px', palette[PColor.IconsPrimary], error ? "color: ".concat(palette[PColor.Error], ";") : '');
});
var Styled = applyDisplayNames({
  Label: Label,
  Icon: Icon
});
export default Styled;