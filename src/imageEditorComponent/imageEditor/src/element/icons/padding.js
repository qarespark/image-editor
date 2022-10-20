import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var Padding = intrinsicComponent(function (_ref, ref) {
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
    d: "M13.8334 9.19949C13.8334 8.50914 14.3931 7.94949 15.0834 7.94949H31.3334C32.0238 7.94949 32.5834 8.50914 32.5834 9.19949C32.5834 9.88985 32.0238 10.4495 31.3334 10.4495H15.0834C14.3931 10.4495 13.8334 9.88985 13.8334 9.19949Z",
    fill: color
  }), React.createElement("path", {
    d: "M15.0834 35.5496C14.3931 35.5496 13.8334 36.1092 13.8334 36.7996C13.8334 37.4899 14.3931 38.0496 15.0834 38.0496H31.3334C32.0238 38.0496 32.5834 37.4899 32.5834 36.7996C32.5834 36.1092 32.0238 35.5496 31.3334 35.5496H15.0834Z",
    fill: color
  }), React.createElement("path", {
    d: "M36.8001 13.4163C37.4905 13.4163 38.0501 13.9759 38.0501 14.6663V30.9163C38.0501 31.6066 37.4905 32.1663 36.8001 32.1663C36.1098 32.1663 35.5501 31.6066 35.5501 30.9163V14.6663C35.5501 13.9759 36.1098 13.4163 36.8001 13.4163Z",
    fill: color
  }), React.createElement("path", {
    d: "M10.45 14.6663C10.45 13.9759 9.89038 13.4163 9.20003 13.4163C8.50967 13.4163 7.95003 13.9759 7.95003 14.6663L7.95003 30.9163C7.95003 31.6066 8.50967 32.1663 9.20003 32.1663C9.89038 32.1663 10.45 31.6066 10.45 30.9163L10.45 14.6663Z",
    fill: color
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 0.5C1.61929 0.5 0.5 1.61929 0.5 3V43C0.5 44.3807 1.61929 45.5 3 45.5H43C44.3807 45.5 45.5 44.3807 45.5 43V3C45.5 1.61929 44.3807 0.5 43 0.5H3ZM43 3H3V43H43V3Z",
    fill: color
  }));
});
export default Padding;