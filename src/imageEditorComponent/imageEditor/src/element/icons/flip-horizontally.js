import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var FlipHorizontally = intrinsicComponent(function (_ref, ref) {
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
  }, rest), React.createElement("g", {
    clipPath: "url(#clip0)"
  }, React.createElement("path", {
    d: "M22.3201 5.57955L0.42948 43.5598C-0.00833291 44.326 0.538933 45.2016 1.41456 45.2016H23.3052C23.9619 45.2016 24.3997 44.7638 24.3997 44.1071V6.12682C24.3997 4.92284 22.9768 4.59448 22.3201 5.57955Z",
    fill: color
  }), React.createElement("path", {
    d: "M27.2456 6.12682L49.1362 44.1071H27.2456V6.12682ZM27.2456 5.03229C26.6983 5.03229 26.1511 5.4701 26.1511 6.12682V44.1071C26.1511 44.7638 26.5889 45.2016 27.2456 45.2016H49.1362C50.0118 45.2016 50.5591 44.326 50.1213 43.5598L28.2307 5.57955C28.0118 5.14174 27.5739 5.03229 27.2456 5.03229Z",
    fill: color
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0"
  }, React.createElement("rect", {
    width: "50",
    height: "50",
    fill: "white",
    transform: "translate(0.275391)"
  }))));
});
export default FlipHorizontally;