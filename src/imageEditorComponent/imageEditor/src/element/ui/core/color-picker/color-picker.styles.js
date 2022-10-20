import _defineProperty from "@babel/runtime/helpers/defineProperty";

import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var baseClassName = 'ColorPicker';
var colorItemClassName = 'ColorItem'; // const ColorPicker = styled.div.attrs({
//   className: generateClassNames(baseClassName, 'root'),
// })`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

var ColorPickerWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-qj4xo5-0"
})(["background-color:", ";box-shadow:0px 1px 2px rgba(78,77,77,0.15);border-radius:2px;padding:12px;max-width:200px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette[PColor.BackgroundSecondary];
});
var ColorPickerIcon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'icon')
}).withConfig({
  componentId: "sc-qj4xo5-1"
})(["display:flex;justify-content:space-between;align-items:center;cursor:pointer;"]);
var RangePickerWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'range-picker')
}).withConfig({
  componentId: "sc-qj4xo5-2"
})(function (_ref2) {
  var color = _ref2.color;
  return css(["position:relative;border-radius:2px;width:186px;height:180px;user-select:none;cursor:crosshair;background-color:", ";"], color);
});
var WhiteGradient = styled.div.attrs({
  className: generateClassNames(baseClassName, 'white-gradient')
}).withConfig({
  componentId: "sc-qj4xo5-3"
})(["background:linear-gradient(to right,white 0%,rgba(255,255,255,0) 100%);z-index:0;position:absolute;width:100%;height:100%;border-radius:2px;user-select:none;pointer-events:none;top:-1px;"]);
var BlackGradient = styled.div.attrs({
  className: generateClassNames(baseClassName, 'black-gradient')
}).withConfig({
  componentId: "sc-qj4xo5-4"
})(["background:linear-gradient(to bottom,rgba(0,0,0,0) 0%,black 100%);z-index:1;position:absolute;width:100%;height:100%;border-radius:2px;user-select:none;pointer-events:none;"]);
var ColorPointer = styled.span.attrs(function (_ref3) {
  var _ref3$left = _ref3.left,
    left = _ref3$left === void 0 ? 0 : _ref3$left,
    _ref3$top = _ref3.top,
    top = _ref3$top === void 0 ? 0 : _ref3$top,
    _ref3$considerTopWidt = _ref3.considerTopWidth,
    considerTopWidth = _ref3$considerTopWidt === void 0 ? false : _ref3$considerTopWidt,
    style = _ref3.style;
  return {
    className: generateClassNames(baseClassName, 'pointer'),
    style: _objectSpread({
      left: left - 7,
      // 7
      top: top - (considerTopWidth ? 7 : 0)
    }, style)
  };
}).withConfig({
  componentId: "sc-qj4xo5-5"
})(function (_ref4) {
  var theme = _ref4.theme;
  return css(["display:inline-block;box-sizing:border-box;width:15px;height:15px;border-radius:20px;box-shadow:0px 1px 2px rgba(78,77,77,0.15);border:2px solid ", ";background-color:", ";position:absolute;cursor:pointer;z-index:11;user-select:none;outline:none;"], theme.palette[PColor.BackgroundSecondary], theme.palette[PColor.AccentPrimary]);
});
var BarWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'bar-wrapper')
}).withConfig({
  componentId: "sc-qj4xo5-6"
})(["margin-top:8px;position:relative;width:186px;height:12px;"]);
var Bar = styled.table.attrs({
  className: generateClassNames(baseClassName, 'bar')
}).withConfig({
  componentId: "sc-qj4xo5-7"
})(["border-radius:4px;width:100%;height:8px;border-collapse:collapse;"]);
var BarColorStop = styled.td.attrs(function (_ref5) {
  var $color = _ref5.$color;
  return {
    className: generateClassNames(baseClassName, 'stop'),
    style: {
      backgroundColor: $color
    }
  };
}).withConfig({
  componentId: "sc-qj4xo5-8"
})(["padding:0;user-select:none;pointer-events:none;&:first-child{width:4px;border-top-left-radius:4px;border-bottom-left-radius:4px;}&:last-child{width:4px;border-top-right-radius:4px;border-bottom-right-radius:4px;}"]);
var ColorPickerAction = styled.div.attrs({
  className: generateClassNames(baseClassName, 'action')
}).withConfig({
  componentId: "sc-qj4xo5-9"
})(["display:flex;justify-content:space-between;align-items:center;"]);
var ColorItemWrapper = styled.label.attrs({
  className: generateClassNames(colorItemClassName, 'label')
}).withConfig({
  componentId: "sc-qj4xo5-10"
})(function (_ref6) {
  var theme = _ref6.theme,
    size = _ref6.size,
    color = _ref6.color,
    stroke = _ref6.stroke,
    value = _ref6.value;
  return css(["border-radius:2px;border:", ";box-sizing:border-box;width:", "px;height:", "px;background-color:", ";user-select:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 300ms;margin-bottom:8px;background:", ";input{display:none;}"], "1px solid ".concat(stroke), size, size, color, value === 'rgba(0,0,0,0)' && "repeating-conic-gradient(".concat(theme.palette[PColor.LinkPrimary], " 0% 25%, transparent 0% 50%) 50% / 8px 8px"));
});
var ColorItemsContainer = styled.div.withConfig({
  componentId: "sc-qj4xo5-11"
})(["display:flex;flex-wrap:wrap;align-content:space-between;margin-top:14px;margin-bottom:12px;margin-left:12px;& > .item{margin-right:8px;display:flex;justify-content:center;}"]);
var Select = styled.div.attrs({
  className: generateClassNames(baseClassName, 'select')
}).withConfig({
  componentId: "sc-qj4xo5-12"
})(function (_ref7) {
  var value = _ref7.value;
  return css(["width:", ";"], value === 'rgb' ? '25%' : '35%');
});
var Styled = applyDisplayNames({
  ColorPickerWrapper: ColorPickerWrapper,
  RangePickerWrapper: RangePickerWrapper,
  WhiteGradient: WhiteGradient,
  BlackGradient: BlackGradient,
  ColorPointer: ColorPointer,
  BarWrapper: BarWrapper,
  Bar: Bar,
  BarColorStop: BarColorStop,
  ColorPickerAction: ColorPickerAction,
  ColorPickerIcon: ColorPickerIcon,
  ColorItemsContainer: ColorItemsContainer,
  ColorItemWrapper: ColorItemWrapper,
  Select: Select
});
export default Styled;