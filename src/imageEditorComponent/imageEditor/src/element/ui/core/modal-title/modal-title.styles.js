import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import { Variant } from './types';
var baseClassName = 'ModalTitle';
var Icon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Icon')
}).withConfig({
  componentId: "sc-l3tf49-0"
})(function (_ref) {
  var palette = _ref.theme.palette;
  return css(["display:flex;margin-bottom:8px;padding:12.5px;border-radius:50%;background:", ";color:", ";"], palette[PColor.BackgroundPrimary], palette[PColor.AccentPrimary]);
});
var LabelPrimary = styled.div.attrs({
  className: generateClassNames(baseClassName, 'LabelPrimary')
}).withConfig({
  componentId: "sc-l3tf49-1"
})(function () {
  return css(["font-size:16px;line-height:18px;"]);
});
var LabelSecondary = styled.div.attrs({
  className: generateClassNames(baseClassName, 'LabelSecondary')
}).withConfig({
  componentId: "sc-l3tf49-2"
})(["font-size:12px;line-height:14px;margin-top:4px;"]);
var Close = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Close')
}).withConfig({
  componentId: "sc-l3tf49-3"
})(function (_ref2) {
  var _ref2$variant = _ref2.variant,
    variant = _ref2$variant === void 0 ? Variant.Default : _ref2$variant,
    palette = _ref2.theme.palette;
  return css(["position:absolute;display:flex;top:", "px;right:", "px;color:", ";&:hover{color:", ";}cursor:pointer;"], variant === Variant.WithIcon ? 12 : 16, variant === Variant.WithIcon ? 12 : 16, palette[PColor.IconsSecondary], palette[PColor.IconsPrimary]);
});
var ModalTitle = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-l3tf49-4"
})(function (_ref3) {
  var _ref3$variant = _ref3.variant,
    variant = _ref3$variant === void 0 ? Variant.Default : _ref3$variant,
    _ref3$theme = _ref3.theme,
    palette = _ref3$theme.palette,
    borderRadius = _ref3$theme.shape.borderRadius;
  return css(["position:relative;color:", ";border-radius:", "px ", "px 0px 0px;", " ", " ", ""], palette[PColor.TextPrimary], borderRadius[BRSize.Md], borderRadius[BRSize.Md], function () {
    var paddingY = variant === Variant.WithIcon ? 12 : 11;
    var paddingLeft = 18;
    var paddingRight = variant === Variant.WithIcon ? paddingLeft : 40;
    return css(["padding:", "px ", "px ", "px ", "px;"], paddingY, paddingRight, paddingY, paddingLeft);
  }, variant === Variant.Default && css(["background:", ";border-bottom:1px solid ", ";"], palette[PColor.BackgroundPrimary], palette[PColor.BordersSecondary]), variant === Variant.WithIcon && css(["display:flex;align-items:center;flex-direction:column;"]));
});
var Styled = applyDisplayNames({
  ModalTitle: ModalTitle,
  LabelPrimary: LabelPrimary,
  LabelSecondary: LabelSecondary,
  Close: Close,
  Icon: Icon
});
export default Styled;