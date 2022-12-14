import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["stroke", "size"];
export var Arrow = intrinsicComponent(function (_ref, ref) {
  var _ref$stroke = _ref.stroke,
    stroke = _ref$stroke === void 0 ? 'currentColor' : _ref$stroke,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 10 : _ref$size,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement("svg", _extends({
    ref: ref,
    width: size * (51 / 56),
    height: size,
    viewBox: "0 0 51 56",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), React.createElement("path", {
    d: "M12.2754 3L37.2754 27.0741L12.2754 53",
    stroke: stroke,
    strokeWidth: "5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
});
export default Arrow;