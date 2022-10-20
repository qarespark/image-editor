import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "stroke", "size"];
export var CheckBoxUnchecked = intrinsicComponent(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#F8FAFB' : _ref$color,
    _ref$stroke = _ref.stroke,
    stroke = _ref$stroke === void 0 ? '#DFE7ED' : _ref$stroke,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 16 : _ref$size,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement("svg", _extends({
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "15",
    height: "15",
    rx: "0.5",
    fill: color,
    stroke: stroke
  }));
});
export default CheckBoxUnchecked;