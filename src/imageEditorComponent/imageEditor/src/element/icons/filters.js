import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var Filters = intrinsicComponent(function (_ref, ref) {
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
    d: "M23.6073 11.9363H48.6072C49.5277 11.9363 50.2738 11.2264 50.2738 10.349C50.2738 9.47166 49.5277 8.76176 48.6072 8.76176H23.6073C22.6868 8.76176 21.9407 9.47166 21.9407 10.349C21.9407 11.2264 22.6868 11.9363 23.6073 11.9363Z",
    fill: color
  }), React.createElement("path", {
    d: "M5.51157 11.9364H1.94141C1.02093 11.9364 0.27478 11.2265 0.27478 10.3491C0.27478 9.47173 1.02093 8.76183 1.94141 8.76183H5.51157C6.25657 6.03087 8.84407 4 11.9412 4C15.6174 4 18.6081 6.84758 18.6081 10.3491C18.6081 13.8506 15.6174 16.6986 11.9412 16.6986C8.84407 16.6986 6.25657 14.6674 5.51157 11.9364Z",
    fill: color
  }), React.createElement("path", {
    d: "M26.9413 38.9205H1.94141C1.02093 38.9205 0.27478 39.6308 0.27478 40.5081C0.27478 41.3855 1.02093 42.0954 1.94141 42.0954H26.9413C27.8617 42.0954 28.6079 41.3855 28.6079 40.5081C28.6079 39.6308 27.8617 38.9205 26.9413 38.9205Z",
    fill: color
  }), React.createElement("path", {
    d: "M48.6078 38.9204H45.0376C44.2922 36.1894 41.7047 34.1585 38.608 34.1585C34.9318 34.1585 31.9411 37.0061 31.9411 40.508C31.9411 44.0096 34.9318 46.8571 38.608 46.8571C41.7051 46.8571 44.2926 44.8263 45.0376 42.0953H48.6078C49.5282 42.0953 50.2744 41.3854 50.2744 40.508C50.2744 39.6306 49.5282 38.9204 48.6078 38.9204Z",
    fill: color
  }), React.createElement("path", {
    d: "M48.6081 24.635H35.2747C34.3546 24.635 33.6081 25.3449 33.6081 26.2223C33.6081 27.0997 34.3546 27.8096 35.2747 27.8096H48.6081C49.5286 27.8096 50.2748 27.0997 50.2748 26.2223C50.2748 25.3449 49.5286 24.635 48.6081 24.635Z",
    fill: color
  }), React.createElement("path", {
    d: "M1.94141 27.8096H18.6081C19.5286 27.8096 20.2747 27.0997 20.2747 26.2223C20.2747 25.3449 19.5286 24.635 18.6081 24.635H1.94141C1.02093 24.635 0.27478 25.3449 0.27478 26.2223C0.27478 27.0997 1.02093 27.8096 1.94141 27.8096Z",
    fill: color
  }), React.createElement("path", {
    d: "M23.6077 32.5713C19.9315 32.5713 16.9412 29.7237 16.9412 26.2222C16.9412 22.7207 19.9315 19.8731 23.6077 19.8731C27.2836 19.8731 30.2743 22.7207 30.2743 26.2222C30.2743 29.7237 27.2836 32.5713 23.6077 32.5713Z",
    fill: color
  }));
});
export default Filters;