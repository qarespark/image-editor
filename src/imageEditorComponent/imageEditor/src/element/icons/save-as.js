import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var SaveAs = intrinsicComponent(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 14 : _ref$size,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement("svg", _extends({
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), React.createElement("path", {
    d: "M17.3945 21.1062H8.60547C8.20098 21.1062 7.87305 21.4342 7.87305 21.8387C7.87305 22.2431 8.20098 22.5711 8.60547 22.5711H17.3945C17.799 22.5711 18.127 22.2431 18.127 21.8387C18.127 21.4342 17.799 21.1062 17.3945 21.1062Z",
    fill: color
  }), React.createElement("path", {
    d: "M17.3945 15.2469H8.60547C8.20098 15.2469 7.87305 15.5748 7.87305 15.9793C7.87305 16.3838 8.20098 16.7117 8.60547 16.7117H17.3945C17.799 16.7117 18.127 16.3838 18.127 15.9793C18.127 15.5748 17.799 15.2469 17.3945 15.2469Z",
    fill: color
  }), React.createElement("path", {
    d: "M17.3945 18.1765H8.60547C8.20098 18.1765 7.87305 18.5045 7.87305 18.909C7.87305 19.3135 8.20098 19.6414 8.60547 19.6414H17.3945C17.799 19.6414 18.127 19.3135 18.127 18.909C18.127 18.5045 17.799 18.1765 17.3945 18.1765Z",
    fill: color
  }), React.createElement("path", {
    d: "M16.6621 0.5H6.4082V6.84766H16.6621V0.5Z",
    fill: color
  }), React.createElement("path", {
    d: "M25.2854 4.6208L21.3792 0.714551C21.2418 0.577197 21.0556 0.5 20.8613 0.5H18.127V7.58008C18.127 7.98457 17.799 8.3125 17.3945 8.3125H5.67578C5.27129 8.3125 4.94336 7.98457 4.94336 7.58008V0.5H1.23242C0.82793 0.5 0.5 0.82793 0.5 1.23242V24.7676C0.5 25.1721 0.82793 25.5 1.23242 25.5C1.45923 25.5 24.463 25.5 24.7676 25.5C25.1721 25.5 25.5 25.1721 25.5 24.7676V5.13867C25.5 4.94443 25.4228 4.75815 25.2854 4.6208ZM19.5918 24.0352H6.4082V13.7812H19.5918V24.0352Z",
    fill: color
  }));
});
export default SaveAs;