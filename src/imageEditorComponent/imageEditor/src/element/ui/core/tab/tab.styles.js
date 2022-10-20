import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { Size } from './types';
import { tabSizeMixin, iconSizeMixin } from './tab.mixin';
var baseClassName = 'Tab';
var Tab = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-8f1lki-0"
})(function (_ref) {
  var palette = _ref.theme.palette,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? Size.Md : _ref$size;
  return css(["", " position:relative;display:inline-flex;align-items:center;text-align:center;color:", ";cursor:pointer;&:hover,&:focus,&.active{color:", ";}&.active{color:", ";box-shadow:inset 0px -1px 0px ", ";}"], tabSizeMixin[size], palette[PColor.TextPrimary], palette[PColor.AccentPrimary], palette[PColor.AccentPrimary], palette[PColor.BorderActiveBottom]);
});
var Icon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Icon')
}).withConfig({
  componentId: "sc-8f1lki-1"
})(function (_ref2) {
  var _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? Size.Md : _ref2$size;
  return css(["display:flex;margin-right:8px;svg{", "}"], iconSizeMixin[size]);
});
var Label = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Label')
}).withConfig({
  componentId: "sc-8f1lki-2"
})(function () {
  return css([""]);
});
var Styled = applyDisplayNames({
  Tab: Tab,
  Icon: Icon,
  Label: Label
});
export default Styled;