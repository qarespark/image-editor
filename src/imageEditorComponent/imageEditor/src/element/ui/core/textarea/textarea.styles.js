import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import { errorMixin } from './textarea.mixin';
import { Background } from '../input/types';
var baseClassName = 'Textarea';
var Textarea = styled.textarea.attrs({
  className: generateClassNames(baseClassName, 'root'),
  rows: 3
}).withConfig({
  componentId: "sc-1usif6k-0"
})(function (_ref) {
  var _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error,
    _ref$background = _ref.background,
    background = _ref$background === void 0 ? Background.Primary : _ref$background,
    theme = _ref.theme;
  return css(["position:relative;display:inline-flex;align-items:center;cursor:text;width:300px;padding:7px 12px;background:", ";border:1px solid ", ";border-radius:", ";box-sizing:border-box;font-family:", ";font-size:1rem;font-style:normal;font-weight:normal;line-height:16px;color:", ";outline:none;resize:none;&:focus-within{background-color:", " !important;border:1px solid ", ";}&:hover{background-color:", ";}", ""], background === 'primary' ? theme.palette[PColor.BackgroundPrimary] : theme.palette[PColor.BackgroundSecondary], theme.palette[PColor.BordersSecondary], theme.shape.borderRadius[BRSize.Sm], theme.typography.fontFamily, theme.palette[PColor.TextPrimary], theme.palette[PColor.BackgroundSecondary], theme.palette[PColor.AccentPrimary], theme.palette[PColor.BackgroundPrimaryHover], error && errorMixin);
});
var Styled = applyDisplayNames({
  Textarea: Textarea
});
export default Styled;