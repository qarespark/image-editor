import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var Shadow = intrinsicComponent(function (_ref, ref) {
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
    d: "M2.95831 0.458374C1.5776 0.458374 0.458313 1.57766 0.458313 2.95837V35.4584C0.458313 36.8391 1.5776 37.9584 2.95831 37.9584H7.54167V43.7917C7.54167 45.8627 9.2206 47.5417 11.2917 47.5417H43.7917C45.8627 47.5417 47.5417 45.8627 47.5417 43.7917V11.2917C47.5417 9.22059 45.8627 7.54166 43.7917 7.54166H37.9583V2.95837C37.9583 1.57766 36.839 0.458374 35.4583 0.458374H2.95831ZM35.4583 2.95837H2.95831L2.95831 35.4584H35.4583V2.95837ZM15.7267 37.9584L10.0417 43.746V37.9584H15.7267ZM11.5135 45.0417L18.4712 37.9584H28.5529L21.4696 45.0417H11.5135ZM24.4159 45.0417H34.2932L45.0417 34.1339V24.0207L37.9583 31.3242V35.4584C37.9583 36.8391 36.839 37.9584 35.4583 37.9584H31.4912C31.4689 37.9859 31.445 38.0126 31.4194 38.0382L24.4159 45.0417ZM45.0417 21.3515L37.9583 28.655V18.9107L45.0417 11.8338V21.3515ZM37.0311 45.0417H43.7917C44.482 45.0417 45.0417 44.482 45.0417 43.7917V36.9124L37.0311 45.0417ZM43.8844 10.045C43.8538 10.0428 43.8229 10.0417 43.7917 10.0417H37.9583V15.9657L43.8844 10.045Z",
    fill: color
  }));
});
export default Shadow;