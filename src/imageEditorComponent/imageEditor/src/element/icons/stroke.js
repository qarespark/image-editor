import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var Stroke = intrinsicComponent(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 14 : _ref$size,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement("svg", _extends({
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 50 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.50015 7.9997C5.50015 6.61898 6.61944 5.49969 8.00015 5.49969H38.0002C39.3809 5.49969 40.5002 6.61898 40.5002 7.99969V37.9997C40.5002 39.3804 39.3809 40.4997 38.0002 40.4997H8.00015C6.61944 40.4997 5.50015 39.3804 5.50015 37.9997V7.9997ZM8.00015 7.99969H38.0002V37.9997H8.00015V7.99969Z",
    fill: color
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H43C44.3807 0.5 45.5 1.61929 45.5 3V43C45.5 44.3807 44.3807 45.5 43 45.5H3C1.61929 45.5 0.5 44.3807 0.5 43V3ZM3 3H43V43H3V3Z",
    fill: color
  }));
});
export default Stroke;