import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var ArrowLeftOutline = intrinsicComponent(function (_ref, ref) {
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
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M26.907 0.710361C25.7493 -0.293042 23.9445 -0.225257 22.8758 0.861763L0.931376 23.1832C-0.0773525 24.2092 -0.0773525 25.7908 0.931376 26.8168L22.8758 49.1383C23.9445 50.2253 25.7493 50.2931 26.907 49.2897C28.0647 48.2863 28.1369 46.5916 27.0683 45.5046L6.90997 25L27.0683 4.49541C28.1369 3.40839 28.0647 1.71376 26.907 0.710361Z",
    fill: color
  }));
});
export default ArrowLeftOutline;