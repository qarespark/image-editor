import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var Temprature = intrinsicComponent(function (_ref, ref) {
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
    d: "M9.48799 3.125H17.0311L17.0311 24.4063C17.0311 26.6148 18.1889 28.4084 19.5429 29.5401C21.7011 31.3438 23.0656 34.0456 23.0656 37.069C23.0656 42.4847 18.6753 46.875 13.2595 46.875C7.84382 46.875 3.45351 42.4847 3.45351 37.069C3.45351 34.0456 4.81799 31.3438 6.97617 29.5401C8.33021 28.4084 9.48799 26.6148 9.48799 24.4063V3.125ZM20.1561 3.125C20.1561 1.39911 18.757 0 17.0311 0H9.48799C7.7621 0 6.36299 1.39911 6.36299 3.125V24.4063C6.36299 25.4785 5.79482 26.4547 4.97216 27.1423C2.13398 29.5143 0.328506 33.0808 0.328506 37.069C0.328506 44.2106 6.11793 50 13.2595 50C20.4012 50 26.1906 44.2106 26.1906 37.069C26.1906 33.0808 24.3851 29.5143 21.5469 27.1423C20.7243 26.4547 20.1561 25.4785 20.1561 24.4063V3.125ZM35.6715 1.25C35.6715 0.559645 35.1119 0 34.4215 0H28.1715C27.4812 0 26.9215 0.559644 26.9215 1.25C26.9215 1.94036 27.4812 2.5 28.1715 2.5L34.4215 2.5C35.1119 2.5 35.6715 1.94036 35.6715 1.25ZM35.6715 8.24951C35.6715 7.55916 35.1119 6.99951 34.4215 6.99951H28.1715C27.4812 6.99951 26.9215 7.55916 26.9215 8.24951C26.9215 8.93987 27.4812 9.49951 28.1715 9.49951H34.4215C35.1119 9.49951 35.6715 8.93987 35.6715 8.24951ZM34.4215 13.999C35.1119 13.999 35.6715 14.5587 35.6715 15.249C35.6715 15.9394 35.1119 16.499 34.4215 16.499H28.1715C27.4812 16.499 26.9215 15.9394 26.9215 15.249C26.9215 14.5587 27.4812 13.999 28.1715 13.999H34.4215ZM13.2594 43.7501C16.366 43.7501 18.8844 41.2317 18.8844 38.1251C18.8844 35.4037 16.9519 33.1337 14.3844 32.6126V10.3662C14.3844 9.67582 13.8247 9.11617 13.1344 9.11617C12.444 9.11617 11.8844 9.67582 11.8844 10.3662V32.6694C9.44245 33.2829 7.63441 35.4928 7.63441 38.1251C7.63441 41.2317 10.1528 43.7501 13.2594 43.7501Z",
    fill: color
  }));
});
export default Temprature;