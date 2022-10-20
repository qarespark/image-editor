import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import { sizeTagLabelMixin, sizeTagCrossMixin } from './tag.mixin';
import { Size, Type } from './types';
var baseClassName = 'Tag';
var Cross = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon')
}).withConfig({
  componentId: "sc-d1zfus-0"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["position:absolute;display:none;width:6px;height:6px;right:3px;top:3px;color:", ";cursor:pointer;"], theme.palette[PColor.TextPrimaryInvert]);
});
var Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label')
}).withConfig({
  componentId: "sc-d1zfus-1"
})(function (_ref2) {
  var theme = _ref2.theme;
  return "\n  display: flex;\n  align-items: center;\n  color: ".concat(theme.palette[PColor.BackgroundSecondary], ";\n  padding: 6px 16px;\n  border-radius: inherit;\n  outline: none;\n");
});
var Tag = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-d1zfus-2"
})(function (_ref3) {
  var _ref3$size = _ref3.size,
    size = _ref3$size === void 0 ? Size.Md : _ref3$size,
    _ref3$type = _ref3.type,
    type = _ref3$type === void 0 ? Type.Default : _ref3$type,
    onSelect = _ref3.onSelect,
    hasRemoveHandler = _ref3.hasRemoveHandler,
    theme = _ref3.theme;
  return css(["position:relative;display:inline-flex;justify-content:center;align-items:center;background-color:", ";border-radius:", ";box-sizing:border-box;&:hover{background-color:", ";", "{border-color:", ";}", " ", "}&:not(:hover){", "}", "{border:1px solid ", ";", " &:hover{background-color:", ";border-color:", ";}}", "{", "}"], theme.palette[PColor.Tag], theme.shape.borderRadius[BRSize.Sm], theme.palette[PColor.Error], Label, theme.palette[PColor.Error], type === Type.Default && hasRemoveHandler && css(["", "{display:inline-flex;}"], Cross), type === Type.Suggested && onSelect && css(["cursor:pointer;"]), type === Type.Suggested && css(["background-color:", ";", "{border:1px dashed ", ";color:", ";}"], theme.palette[PColor.BackgroundSecondary], Label, theme.palette[PColor.BackgroundPrimaryActive], theme.palette[PColor.TextSecondary]), Label, theme.palette[PColor.Tag], sizeTagLabelMixin[size], theme.palette[PColor.BackgroundPrimaryActive], theme.palette[PColor.BackgroundPrimaryActive], Cross, sizeTagCrossMixin[size]);
});
var Styled = applyDisplayNames({
  Tag: Tag,
  Label: Label,
  Cross: Cross
});
export default Styled;