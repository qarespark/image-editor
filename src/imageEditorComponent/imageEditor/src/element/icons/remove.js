import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var Remove = intrinsicComponent(function (_ref, ref) {
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
    d: "M42.1496 6.25H33.5038V4.6875C33.5038 2.08333 31.4205 0 28.8163 0H22.5663C19.9622 0 17.8788 2.08333 17.8788 4.6875V6.25H9.23299C7.04549 6.25 5.27466 8.02083 5.27466 10.2083V13.3333C5.27466 14.1667 6.00382 14.8958 6.83716 14.8958H44.3371C45.1705 14.8958 45.8996 14.1667 45.8996 13.3333V10.2083C46.108 7.91667 44.3371 6.25 42.1496 6.25ZM21.108 4.6875C21.108 3.85417 21.8372 3.125 22.6705 3.125H28.9205C29.7538 3.125 30.483 3.85417 30.483 4.6875V6.25H21.108V4.6875Z",
    fill: color
  }), React.createElement("path", {
    d: "M8.39966 16.4583C8.08716 16.4583 7.87882 16.6667 7.87882 16.9792L9.12882 45.5208C9.23299 48.0208 11.3163 50 13.8163 50H37.5663C40.0663 50 42.1497 48.0208 42.2538 45.5208L43.5038 16.9792C43.5038 16.6667 43.2955 16.4583 42.983 16.4583H8.39966ZM32.0455 21.875C32.0455 21.0417 32.7746 20.3125 33.608 20.3125C34.4413 20.3125 35.1705 21.0417 35.1705 21.875V42.1875C35.1705 43.0208 34.4413 43.75 33.608 43.75C32.7746 43.75 32.0455 43.0208 32.0455 42.1875V21.875ZM24.233 21.875C24.233 21.0417 24.9622 20.3125 25.7955 20.3125C26.6288 20.3125 27.358 21.0417 27.358 21.875V42.1875C27.358 43.0208 26.6288 43.75 25.7955 43.75C24.9622 43.75 24.233 43.0208 24.233 42.1875V21.875ZM16.4205 21.875C16.4205 21.0417 17.1497 20.3125 17.983 20.3125C18.8163 20.3125 19.5455 21.0417 19.5455 21.875V42.1875C19.5455 43.0208 18.8163 43.75 17.983 43.75C17.1497 43.75 16.4205 43.0208 16.4205 42.1875V21.875Z",
    fill: color
  }));
});
export default Remove;