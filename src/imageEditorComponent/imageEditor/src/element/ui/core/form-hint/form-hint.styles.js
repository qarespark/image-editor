import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
var baseClassName = 'FormHint';
var FormHint = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1vu99sv-0"
})(function (_ref) {
  var _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error,
    theme = _ref.theme;
  return css(["display:flex;align-items:center;font-size:10px;line-height:12px;color:", ";"], error ? theme.palette[PColor.Error] : theme.palette[PColor.TextSecondary]);
});
var Styled = applyDisplayNames({
  FormHint: FormHint
});
export default Styled;