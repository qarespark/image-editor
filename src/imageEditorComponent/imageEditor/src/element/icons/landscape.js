import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var Landscape = intrinsicComponent(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 14 : _ref$size,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement("svg", _extends({
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 51 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.11841 3.93805V32.063H47.8684V3.93805H4.11841ZM3.49341 0.813049C2.1127 0.813049 0.993408 1.91235 0.993408 3.26841V32.7327C0.993408 34.0887 2.1127 35.188 3.49341 35.188H48.4934C49.8741 35.188 50.9934 34.0887 50.9934 32.7327V3.26841C50.9934 1.91235 49.8741 0.813049 48.4934 0.813049H3.49341Z",
    fill: color
  }));
});
export default Landscape;