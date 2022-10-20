import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var Box = intrinsicComponent(function (_ref, ref) {
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
    d: "M4.49645 7.18873H0.642059L4.49645 0.858233V7.18873Z",
    fill: color
  }), React.createElement("path", {
    d: "M43.6838 3.05176e-05H6.21053V7.1889H43.6838V3.05176e-05Z",
    fill: color
  }), React.createElement("path", {
    d: "M49.2505 7.18873H45.5032V0.858233L49.2505 7.18873Z",
    fill: color
  }), React.createElement("path", {
    d: "M18.7366 15.236C18.7366 14.6996 19.1649 14.3777 19.5931 14.3777H30.2998C30.8351 14.3777 31.1563 14.8069 31.1563 15.236C31.1563 15.7725 30.7281 16.0944 30.2998 16.0944H19.5931C19.1649 16.0944 18.7366 15.6652 18.7366 15.236Z",
    fill: color
  }), React.createElement("path", {
    d: "M0 8.90547V50H50V8.90547H0ZM19.5931 12.5536H30.2998C31.7987 12.5536 32.9764 13.7338 32.9764 15.236C32.9764 16.7381 31.7987 17.9184 30.2998 17.9184H19.5931C18.0942 17.9184 16.9165 16.7381 16.9165 15.236C16.9165 13.7338 18.2013 12.5536 19.5931 12.5536ZM2.67666 49.0344H0.856531V47.2103H2.67666V49.0344ZM4.49679 49.0344V47.2103H6.31692V49.0344H4.49679ZM9.85011 49.0344H8.02998V47.2103H9.85011V49.0344ZM13.3833 49.0344H11.5632V47.2103H13.3833V49.0344ZM16.9165 49.0344H15.0964V47.2103H16.9165V49.0344ZM20.5567 49.0344H18.7366V47.2103H20.5567V49.0344ZM24.0899 49.0344H22.2698V47.2103H24.0899V49.0344ZM27.6231 49.0344H25.803V47.2103H27.6231V49.0344ZM31.2634 49.0344H29.4433V47.2103H31.2634V49.0344ZM34.7966 49.0344H32.9764V47.2103H34.7966V49.0344ZM38.3298 49.0344H36.5096V47.2103H38.3298V49.0344ZM41.97 49.0344H40.1499V47.2103H41.97V49.0344ZM45.5032 49.0344H43.6831V47.2103H45.5032V49.0344ZM49.0364 49.0344H47.2163V47.2103H49.0364V49.0344Z",
    fill: color
  }));
});
export default Box;