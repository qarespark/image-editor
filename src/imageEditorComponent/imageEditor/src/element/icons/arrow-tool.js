import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var ArrowTool = intrinsicComponent(function (_ref, ref) {
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
    d: "M1.04757 38.9503C0.437373 38.3401 0.437373 37.3508 1.04757 36.7406L33.9229 3.86697L23.8354 3.33584C22.9736 3.29047 22.3118 2.5551 22.3572 1.69335C22.4026 0.831601 23.138 0.169794 23.9997 0.215167L37.5909 0.930759C38.3892 0.972794 39.027 1.61063 39.0691 2.40894L39.7846 16.0001C39.83 16.8619 39.1682 17.5972 38.3065 17.6426C37.4447 17.688 36.7093 17.0262 36.664 16.1644L36.1328 6.07651L3.25728 38.9503C2.64708 39.5605 1.65776 39.5605 1.04757 38.9503Z",
    fill: color
  }));
});
export default ArrowTool;