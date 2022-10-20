import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var LayerOrder = intrinsicComponent(function (_ref, ref) {
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
    d: "M0.380276 15.9983C0.380276 15.468 0.649201 14.974 1.09451 14.6861L22.1518 1.0737C22.6681 0.73996 23.3321 0.73996 23.8483 1.0737L44.9056 14.6861C45.3509 14.974 45.6198 15.468 45.6198 15.9983C45.6198 16.5286 45.3509 17.0226 44.9056 17.3105L40.5128 20.1502L44.9056 22.9899C45.3509 23.2778 45.6198 23.7719 45.6198 24.3021C45.6198 24.8324 45.3509 25.3265 44.9056 25.6143L23.8483 39.2267C23.3321 39.5605 22.6681 39.5605 22.1518 39.2267L1.09451 25.6143C0.649201 25.3265 0.380276 24.8324 0.380276 24.3021C0.380276 23.7719 0.649201 23.2778 1.09451 22.9899L5.48733 20.1502L1.09451 17.3105C0.649201 17.0226 0.380276 16.5286 0.380276 15.9983ZM23.8483 30.9229L37.5696 22.0528L38.0354 22.2698L41.1792 24.3021L23.0001 36.054L4.8209 24.3021L7.96471 22.2698L8.43053 22.0528L22.1518 30.9229C22.6681 31.2566 23.3321 31.2566 23.8483 30.9229ZM4.8209 15.9983L23.0001 27.7502L41.1792 15.9983L23.0001 4.24645L4.8209 15.9983Z",
    fill: color
  }), React.createElement("path", {
    d: "M2.79108 30.6895C2.06637 30.221 1.0991 30.4288 0.630619 31.1535C0.162136 31.8782 0.369845 32.8454 1.09455 33.3139L22.1518 46.9263C22.6681 47.2601 23.3321 47.2601 23.8484 46.9263L44.9056 33.3139C45.6303 32.8454 45.8381 31.8782 45.3696 31.1535C44.9011 30.4288 43.9338 30.221 43.2091 30.6895L23.0001 43.7536L2.79108 30.6895Z",
    fill: color
  }));
});
export default LayerOrder;