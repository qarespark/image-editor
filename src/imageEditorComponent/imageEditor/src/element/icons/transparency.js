import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var Transparency = intrinsicComponent(function (_ref, ref) {
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
    d: "M0.166672 0.166664H8.50001V8.5H0.166672V0.166664Z",
    fill: color
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.8333 8.5H8.50001V16.8333H0.166672V25.1667H8.50001V33.5H0.166672V41.8333H8.50001V33.5H16.8333V41.8333H25.1667V33.5H33.5V41.8333H41.8333V33.5H33.5V25.1667H41.8333V16.8333H33.5V8.5H41.8333V0.166664H33.5V8.5H25.1667V0.166664H16.8333V8.5ZM16.8333 16.8333V8.5H25.1667V16.8333H16.8333ZM16.8333 25.1667V33.5H25.1667V25.1667H33.5V16.8333H25.1667V25.1667H16.8333ZM16.8333 25.1667H8.50001V16.8333H16.8333V25.1667Z",
    fill: color
  }));
});
export default Transparency;