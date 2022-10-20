import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var Revert = intrinsicComponent(function (_ref, ref) {
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
    d: "M8.98975 13.4455C11.7193 7.13719 18.2352 2.96448 25.4662 3.53775C32.897 4.12687 38.7924 9.54635 40.3073 16.4736C40.4916 17.3166 41.3245 17.8505 42.1675 17.6662C43.0105 17.4818 43.5445 16.649 43.3601 15.8059C41.5594 7.57149 34.5543 1.12345 25.7131 0.422526C17.1213 -0.258635 9.38658 4.69317 6.13434 12.1755L3.89818 6.84608C3.56429 6.05034 2.64855 5.67594 1.85282 6.00982C1.05708 6.3437 0.682677 7.25944 1.01656 8.05518L4.73787 16.9241C4.89821 17.3062 5.20378 17.609 5.58736 17.7658C5.97094 17.9226 6.40111 17.9206 6.78323 17.7603L15.6521 14.039C16.4478 13.7051 16.8222 12.7894 16.4884 11.9936C16.1545 11.1979 15.2387 10.8235 14.443 11.1574L8.98975 13.4455Z",
    fill: color
  }), React.createElement("path", {
    d: "M7.97987 23.3944C7.80368 22.5497 6.97603 22.0077 6.13126 22.1839C5.2865 22.3601 4.74451 23.1877 4.92071 24.0325C6.65659 32.3552 13.7002 38.8943 22.6071 39.6004C31.0811 40.2722 38.7213 35.4646 42.0496 28.154L44.2049 33.1157C44.5487 33.9072 45.4691 34.2701 46.2606 33.9263C47.0521 33.5825 47.415 32.6621 47.0712 31.8706L43.2414 23.0543C42.8976 22.2628 41.9772 21.8999 41.1857 22.2437L32.3694 26.0734C31.5779 26.4173 31.215 27.3376 31.5588 28.1291C31.9026 28.9206 32.823 29.2835 33.6145 28.9397L39.3938 26.4292C36.7027 32.8203 30.1416 37.063 22.8541 36.4852C15.3678 35.8917 9.4401 30.3955 7.97987 23.3944Z",
    fill: color
  }));
});
export default Revert;