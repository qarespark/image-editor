import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var Warning = intrinsicComponent(function (_ref, ref) {
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
    d: "M48.9856 38.314L31.3034 3.80423C29.9688 1.42247 27.6118 0 24.9985 0C22.3852 0 20.0282 1.42247 18.6936 3.80423C18.6836 3.82245 18.6751 3.84067 18.665 3.8589L1.04158 38.2594C-0.321602 40.6914 -0.347383 43.612 0.971367 46.0713C2.29314 48.5321 4.67439 50 7.345 50H42.5544C45.225 50 47.7041 48.5321 49.0258 46.0713C50.3445 43.6121 50.3188 40.6913 48.9856 38.314ZM22.0659 15.8013C22.0659 14.0842 23.3789 12.6924 24.9985 12.6924C26.6182 12.6924 27.9311 14.0843 27.9311 15.8013V28.2372C27.9311 29.9541 26.6181 31.3462 24.9985 31.3462C23.3789 31.3462 22.0659 29.954 22.0659 28.2372V15.8013ZM24.9985 43.7821C22.5728 43.7821 20.5995 41.6902 20.5995 39.1186C20.5995 36.5471 22.5727 34.4552 24.9985 34.4552C27.4242 34.4552 29.3974 36.5471 29.3974 39.1186C29.3975 41.6901 27.4243 43.7821 24.9985 43.7821Z",
    fill: color
  }));
});
export default Warning;