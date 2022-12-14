import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var Portrait = intrinsicComponent(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 14 : _ref$size,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement("svg", _extends({
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 36 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.0559 46.8755L32.0559 3.12555L3.93091 3.12555L3.93091 46.8755H32.0559ZM35.1809 3.12555C35.1809 1.39966 33.7818 0.000549316 32.0559 0.000549316H3.93091C2.20502 0.000549316 0.805908 1.39966 0.805908 3.12555V46.8755C0.805908 48.6014 2.20502 50.0005 3.93091 50.0005H32.0559C33.7818 50.0005 35.1809 48.6014 35.1809 46.8755L35.1809 3.12555Z",
    fill: color
  }));
});
export default Portrait;