import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var File = intrinsicComponent(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 14 : _ref$size,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement("svg", _extends({
    ref: ref,
    width: size * (37 / 50),
    height: size,
    viewBox: "0 0 37 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), React.createElement("path", {
    d: "M25.9475 0.10352V10.766H36.8171L25.9475 0.10352Z",
    fill: color
  }), React.createElement("path", {
    d: "M24.2912 12.4224V0H1.2063C0.688706 0 0.274628 0.414079 0.274628 0.931677V49.0683C0.274628 49.5859 0.688706 50 1.2063 50H35.8854C36.403 50 36.8171 49.5859 36.8171 49.0683V12.4224H24.2912Z",
    fill: color
  }));
});
export default File;