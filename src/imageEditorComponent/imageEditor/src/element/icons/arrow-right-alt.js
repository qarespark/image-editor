import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var ArrowRightAlt = intrinsicComponent(function (_ref, ref) {
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
    d: "M49.7025 23.7268L49.7008 23.725L39.4953 13.5687C38.7308 12.8079 37.4941 12.8107 36.7331 13.5754C35.9722 14.3399 35.9751 15.5766 36.7397 16.3375L43.5916 23.1562H2.22852C1.1498 23.1562 0.275391 24.0307 0.275391 25.1094C0.275391 26.1881 1.1498 27.0625 2.22852 27.0625H43.5915L36.7397 33.8812C35.9752 34.6422 35.9723 35.8788 36.7332 36.6433C37.4942 37.4081 38.731 37.4107 39.4954 36.65L49.7009 26.4937L49.7026 26.4919C50.4676 25.7284 50.4651 24.4878 49.7025 23.7268Z",
    fill: color
  }));
});
export default ArrowRightAlt;