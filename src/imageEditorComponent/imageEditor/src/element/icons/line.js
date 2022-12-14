import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var Line = intrinsicComponent(function (_ref, ref) {
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
    d: "M40.1901 7.27549L7.59689 39.8687C6.83412 40.6315 6.83412 41.8681 7.59689 42.6308C8.35965 43.3936 9.59626 43.3936 10.359 42.6308L42.9522 10.0376C43.715 9.27486 43.715 8.03825 42.9522 7.27549C42.1895 6.51272 40.9529 6.51272 40.1901 7.27549Z",
    fill: color
  }));
});
export default Line;