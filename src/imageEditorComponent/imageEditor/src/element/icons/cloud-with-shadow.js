import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var CloudWithShadow = intrinsicComponent(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 83 : _ref$size,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement("svg", _extends({
    ref: ref,
    width: size * (128 / 83),
    height: size,
    viewBox: "0 0 128 83",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), React.createElement("g", {
    filter: "url(#filter0_d)"
  }, React.createElement("path", {
    d: "M101.233 29.2565C99.7195 29.2565 98.2087 29.4078 96.7251 29.7093C95.6064 24.1 91.9895 19.3151 86.9113 16.7251C81.8341 14.1352 75.8544 14.0266 70.6862 16.4297C66.0092 3.48718 51.774 -3.19526 38.891 1.50336C26.008 6.20198 19.3563 20.5039 24.0333 33.4454C12.748 33.8038 3.83359 43.1879 4.00236 54.5293C4.17214 65.8718 13.3635 74.9817 24.6548 75H101.233C113.806 75 124 64.7601 124 52.1282C124 39.4964 113.806 29.2565 101.233 29.2565Z",
    fill: color
  })), React.createElement("defs", null, React.createElement("filter", {
    id: "filter0_d",
    x: "0",
    y: "0",
    width: "128",
    height: "83",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, React.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), React.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), React.createElement("feOffset", {
    dy: "4"
  }), React.createElement("feGaussianBlur", {
    stdDeviation: "2"
  }), React.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
  }), React.createElement("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow"
  }), React.createElement("feBlend", {
    mode: "normal",
    "in": "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape"
  }))));
});
export default CloudWithShadow;