import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import { colorButtonMixin, sizeButtonMixin, sizeButtonLabelMixin } from './button.mixin';
import { ButtonSize, ButtonColor } from '../../utils/types';
var baseClassName = 'Button';
var Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label')
}).withConfig({
  componentId: "sc-lxwit0-0"
})(["display:flex;"]);
var Badge = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Badge')
}).withConfig({
  componentId: "sc-lxwit0-1"
})(["display:flex;margin-left:5px;"]);
var Button = styled.button.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-lxwit0-2"
})(function (_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? ButtonColor.Secondary : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? ButtonSize.Md : _ref$size,
    theme = _ref.theme;
  return css(["display:inline-flex;flex-shrink:0;flex-direction:row;align-items:center;border-radius:", ";border:0;cursor:pointer;outline:none;", " ", " ", "{", "}"], theme.shape.borderRadius[BRSize.Sm], colorButtonMixin[color], sizeButtonMixin[size], Label, sizeButtonLabelMixin[size]);
});
var Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon')
}).withConfig({
  componentId: "sc-lxwit0-3"
})(function (_ref2) {
  var $loading = _ref2.$loading;
  return css(["display:flex;margin-right:4px;margin-left:1px;svg{animation:", ";}"], $loading ? 'spinner 1.2s linear infinite' : '1.2s');
});
var Styled = applyDisplayNames({
  Button: Button,
  Label: Label,
  Icon: Icon,
  Badge: Badge
});
export default Styled;