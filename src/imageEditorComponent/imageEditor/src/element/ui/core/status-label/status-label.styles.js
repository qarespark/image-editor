import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import { sizeStatusLabelMixin } from './status-label.mixin';
import { Size, Type } from './types';
var baseClassName = 'StatusLabel';
var StatusLabel = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label')
}).withConfig({
  componentId: "sc-2nnq4u-0"
})(function (_ref) {
  var theme = _ref.theme;
  return "\n  display: flex;\n  align-items: center;\n  color: ".concat(theme.palette[PColor.BackgroundSecondary], ";\n  padding: 6px 16px;\n  border-radius: inherit;\n");
});
var StatusLabelWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-2nnq4u-1"
})(function (_ref2) {
  var _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? Size.Md : _ref2$size,
    _ref2$type = _ref2.type,
    type = _ref2$type === void 0 ? Type.Default : _ref2$type,
    theme = _ref2.theme;
  return css(["position:relative;display:inline-flex;justify-content:center;align-items:center;background-color:", ";border-radius:", ";box-sizing:border-box;", "{border:1px solid ", ";", "}"], type === 'default' ? theme.palette[PColor.Tag] : theme.palette[type], theme.shape.borderRadius[BRSize.Sm], StatusLabel, type === 'default' ? theme.palette[PColor.Tag] : theme.palette[type], sizeStatusLabelMixin[size]);
});
var Styled = applyDisplayNames({
  StatusLabel: StatusLabel,
  StatusLabelWrapper: StatusLabelWrapper
});
export default Styled;