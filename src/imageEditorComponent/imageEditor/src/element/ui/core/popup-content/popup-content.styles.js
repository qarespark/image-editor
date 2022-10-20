import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
var baseClassName = 'PopupContent';
var LabelWrapper = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label')
}).withConfig({
  componentId: "sc-njbmnt-0"
})(function (_ref) {
  var _ref$theme = _ref.theme,
    palette = _ref$theme.palette,
    shape = _ref$theme.shape;
  return css(["display:flex;flex-grow:1;margin-left:31px;padding:8px 8px 8px 39px;background:", ";border-radius:", ";min-height:41px;"], palette[PColor.ButtonPrimaryText], shape.borderRadius[BRSize.Sm]);
});
var Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label')
}).withConfig({
  componentId: "sc-njbmnt-1"
})(function (_ref2) {
  var _ref2$theme = _ref2.theme,
    palette = _ref2$theme.palette,
    font = _ref2$theme.typography.font;
  return css(["display:flex;align-items:center;color:", ";", ""], palette[PColor.TextSecondary], font[FontVariant.LabelSmall]);
});
var PopupContent = styled.div.attrs({
  className: generateClassNames(baseClassName, 'PopupContent')
}).withConfig({
  componentId: "sc-njbmnt-2"
})(["position:relative;display:flex;align-items:center;width:256px;filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));"]);
var Robot = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Robot')
}).withConfig({
  componentId: "sc-njbmnt-3"
})(function (_ref3) {
  var palette = _ref3.theme.palette;
  return css(["position:absolute;left:0;display:flex;z-index:1;border-radius:50%;background:", ";border:1px solid ", ";box-sizing:border-box;"], palette[PColor.ButtonPrimaryText], palette[PColor.BackgroundSecondary]);
});
var Styled = applyDisplayNames({
  PopupContent: PopupContent,
  Robot: Robot,
  LabelWrapper: LabelWrapper,
  Label: Label
});
export default Styled;