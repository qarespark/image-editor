import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var FontBold = intrinsicComponent(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 14 : _ref$size,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement("svg", _extends({
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 14 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), React.createElement("path", {
    d: "M0.214966 17.4813V0.518677H6.61123C8.82693 0.518677 10.5075 0.914783 11.653 1.70699C12.7985 2.49144 13.3712 3.64481 13.3712 5.16709C13.3712 5.99814 13.1413 6.7321 12.6814 7.36898C12.2216 7.99809 11.5819 8.46021 10.7625 8.75535C11.699 8.97282 12.4348 9.41164 12.9699 10.0718C13.5133 10.732 13.7851 11.5397 13.7851 12.4951C13.7851 14.1261 13.2249 15.361 12.1045 16.1998C10.9841 17.0386 9.38713 17.4658 7.31357 17.4813H0.214966ZM3.97748 10.0951V14.6736H7.20069C8.08697 14.6736 8.77677 14.4795 9.27007 14.0911C9.77174 13.695 10.0226 13.1513 10.0226 12.4601C10.0226 10.9067 9.1572 10.1184 7.42644 10.0951H3.97748ZM3.97748 7.62528H6.76173C8.65971 7.59421 9.6087 6.89132 9.6087 5.5166C9.6087 4.74769 9.36623 4.19625 8.88128 3.86228C8.4047 3.52054 7.64801 3.34967 6.61123 3.34967H3.97748V7.62528Z",
    fill: color
  }));
});
export default FontBold;