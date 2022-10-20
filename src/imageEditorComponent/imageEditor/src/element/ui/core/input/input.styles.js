import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import { sizeInputMixin, errorMixin } from './input.mixin';
import { Background, Size } from './types';
var baseClassName = 'Input';
var Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon')
}).withConfig({
  componentId: "sc-150k0cz-0"
})(function (_ref) {
  var iconClickStart = _ref.iconClickStart,
    iconClickEnd = _ref.iconClickEnd,
    palette = _ref.theme.palette;
  return css(["display:flex;color:", ";cursor:", ";&:first-child{margin-right:7px;}&:last-child{margin-left:7px;}"], palette[PColor.IconsPrimary], iconClickStart || iconClickEnd ? 'pointer' : 'default');
});
var Input = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-150k0cz-1"
})(function (_ref2) {
  var _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? Size.Md : _ref2$size,
    _ref2$error = _ref2.error,
    error = _ref2$error === void 0 ? false : _ref2$error,
    _ref2$fullWidth = _ref2.fullWidth,
    fullWidth = _ref2$fullWidth === void 0 ? false : _ref2$fullWidth,
    theme = _ref2.theme,
    _ref2$background = _ref2.background,
    background = _ref2$background === void 0 ? Background.Primary : _ref2$background;
  return css(["position:relative;display:inline-flex;align-items:center;cursor:text;width:", ";background:", ";border:1px solid ", ";border-radius:", ";box-sizing:border-box;color:", ";", " &:focus-within{background-color:", "!important;border:1px solid ", ";}&:hover{background-color:", ";}", ""], fullWidth ? '100%' : '300px', background === 'primary' ? theme.palette[PColor.BackgroundPrimary] : theme.palette[PColor.BackgroundSecondary], theme.palette[PColor.BordersSecondary], theme.shape.borderRadius[BRSize.Sm], theme.palette[PColor.TextPrimary], sizeInputMixin[size], theme.palette[PColor.BackgroundSecondary], theme.palette[PColor.AccentPrimary], theme.palette[PColor.BackgroundPrimaryHover], error && errorMixin);
});
var Base = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Base')
}).withConfig({
  componentId: "sc-150k0cz-2"
})(function (_ref3) {
  var palette = _ref3.theme.palette;
  return css(["display:block;color:inherit;width:100%;min-width:0;margin:0;padding:0;border:0;background-color:transparent;outline:none;&::placeholder{color:", ";}"], palette[PColor.TextPlaceholder]);
});
var Styled = applyDisplayNames({
  Input: Input,
  Base: Base,
  Icon: Icon
});
export default Styled;