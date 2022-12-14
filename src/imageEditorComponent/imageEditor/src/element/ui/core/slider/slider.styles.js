import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PC } from '../../utils/types/palette';
var baseClassName = 'Slider';
var Slider = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-jjink6-0"
})(function (_ref) {
  var theme = _ref.theme,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return css(["display:inline-block;border-radius:2px;position:relative;cursor:pointer;touch-action:none;color:", ";height:4px;width:100%;padding:12px 0;"], disabled ? theme.palette[PC.AccentPrimaryDisabled] : theme.palette[PC.BorderActiveBottom]);
});
var Rail = styled.span.attrs({
  className: generateClassNames(baseClassName, 'rail')
}).withConfig({
  componentId: "sc-jjink6-1"
})(["display:block;position:absolute;border-radius:inherit;background-color:currentColor;opacity:0.38;width:100%;height:inherit;top:50%;transform:translateY(-50%);"]);
var Track = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Track')
}).withConfig({
  componentId: "sc-jjink6-2"
})(["display:block;position:absolute;border-radius:inherit;border:1px solid currentColor;background-color:currentColor;height:inherit;top:50%;transform:translateY(-50%);"]);
var Thumb = styled.span.attrs({
  className: generateClassNames(baseClassName, 'thumb')
}).withConfig({
  componentId: "sc-jjink6-3"
})(["position:absolute;width:15px;height:15px;box-sizing:border-box;border-radius:50%;outline:0;background-color:currentColor;display:flex;align-items:center;justify-content:center;top:50%;transform:translate(-50%,-50%);& > input{border:0px;clip:rect(0px,0px,0px,0px);height:100%;margin:-1px;overflow:hidden;padding:0px;position:absolute;white-space:nowrap;width:100%;direction:ltr;}&::before{position:absolute;content:'';border-radius:inherit;width:100%;height:100%;box-shadow:0px 3px 1px -2px rgb(0 0 0 / 20%),0px 2px 2px 0px rgb(0 0 0 / 14%),0px 1px 5px 0px rgb(0 0 0 / 12%);}&::after{position:absolute;content:'';border-radius:50%;width:42px;height:42px;top:50%;left:50%;transform:translate(-50%,-50%);}"]);
var LabelTooltip = styled.span.attrs({
  className: generateClassNames(baseClassName, 'label')
}).withConfig({
  componentId: "sc-jjink6-4"
})(function (_ref2) {
  var theme = _ref2.theme,
    _ref2$open = _ref2.open,
    open = _ref2$open === void 0 ? false : _ref2$open,
    _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? false : _ref2$disabled;
  return css(["display:flex;align-items:center;justify-content:center;padding:6px 6px;border-radius:2px;position:absolute;top:-10px;font-size:10px;z-index:1;white-space:nowrap;transition:transform 150ms cubic-bezier(0.4,0,0.2,1) 0ms;transform-origin:bottom center;transform:", ";background-color:", ";color:#fff;cursor:pointer;&::before{position:absolute;content:'';background-color:inherit;width:8px;height:8px;bottom:0px;left:50%;transform:translate(-50%,50%) rotate(45deg);}"], open ? 'translateY(-100%) scale(1)' : 'translateY(-100%) scale(0)', disabled ? theme.palette[PC.AccentPrimaryDisabled] : theme.palette[PC.LinkHover]);
});
var SliderAnnotation = styled.div.attrs({
  className: generateClassNames(baseClassName, 'annotation')
}).withConfig({
  componentId: "sc-jjink6-5"
})(function (_ref3) {
  var theme = _ref3.theme;
  return css(["display:flex;justify-content:space-between;margin-top:12px;color:", ";"], theme.palette[PC.TextSecondary]);
});
var Styled = applyDisplayNames({
  Slider: Slider,
  Rail: Rail,
  Track: Track,
  Thumb: Thumb,
  SliderAnnotation: SliderAnnotation,
  LabelTooltip: LabelTooltip
});
export default Styled;