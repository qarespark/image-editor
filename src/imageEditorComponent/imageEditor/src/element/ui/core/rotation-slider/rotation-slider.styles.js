import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PC } from '../../utils/types/palette';
var baseClassName = 'RotationSlider';
var RotationSliderList = styled.ul.attrs({
  className: generateClassNames(baseClassName, 'list')
}).withConfig({
  componentId: "sc-1xuruq0-0"
})(["display:flex;align-items:center;position:relative;padding:0;width:100%;list-style:none;"]);
var RotationSliderBigDot = styled.li.attrs({
  className: generateClassNames(baseClassName, 'big-dot')
}).withConfig({
  componentId: "sc-1xuruq0-1"
})(function (_ref) {
  var palette = _ref.theme.palette;
  return css(["width:8px;height:8px;border-radius:50%;background-color:", ";cursor:pointer;"], palette[PC.LinkPrimary]);
});
var RotationSliderSmallDotWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'small-dot-wrapper')
}).withConfig({
  componentId: "sc-1xuruq0-2"
})(["padding:2px;"]);
var RotationSliderSmallDot = styled.li.attrs({
  className: generateClassNames(baseClassName, 'small-dot')
}).withConfig({
  componentId: "sc-1xuruq0-3"
})(function (_ref2) {
  var palette = _ref2.theme.palette;
  return css(["width:2px;height:2px;border-radius:50%;background-color:", ";cursor:pointer;"], palette[PC.LinkPrimary]);
});
var RotationSliderControl = styled.span.attrs({
  className: generateClassNames(baseClassName, 'control')
}).withConfig({
  componentId: "sc-1xuruq0-4"
})(function (_ref3) {
  var palette = _ref3.theme.palette;
  return css(["display:flex;justify-content:center;align-items:center;position:absolute;height:18px;width:2px;transform:translate(-50%,-50%);top:50%;background-color:", ";& > input{border:0px;clip:rect(0px,0px,0px,0px);height:100%;margin:-1px;overflow:hidden;padding:0px;position:absolute;white-space:nowrap;width:100%;direction:ltr;}&::before{position:absolute;content:'';border-radius:inherit;width:100%;height:100%;box-shadow:0px 3px 1px -2px rgb(0 0 0 / 20%),0px 2px 2px 0px rgb(0 0 0 / 14%),0px 1px 5px 0px rgb(0 0 0 / 12%);}&::after{position:absolute;content:'';border-radius:50%;width:42px;height:42px;top:50%;left:50%;transform:translate(-50%,-50%);}"], palette[PC.LinkActive]);
});
var RotationSliderMark = styled.div.attrs({
  className: generateClassNames(baseClassName, 'mark')
}).withConfig({
  componentId: "sc-1xuruq0-5"
})(["padding:4px;"]);
var RotationSliderMarkText = styled.span.attrs({
  className: generateClassNames(baseClassName, 'mark-text')
}).withConfig({
  componentId: "sc-1xuruq0-6"
})(function (_ref4) {
  var palette = _ref4.theme.palette;
  return css(["position:absolute;top:20px;font-size:14px;transform:translateX(-10%);color:", ";"], palette[PC.TextPrimary]);
});
var Styled = applyDisplayNames({
  RotationSliderList: RotationSliderList,
  RotationSliderBigDot: RotationSliderBigDot,
  RotationSliderSmallDotWrapper: RotationSliderSmallDotWrapper,
  RotationSliderSmallDot: RotationSliderSmallDot,
  RotationSliderControl: RotationSliderControl,
  RotationSliderMark: RotationSliderMark,
  RotationSliderMarkText: RotationSliderMarkText
});
export default Styled;