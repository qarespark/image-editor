import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from './utils/functions';
var _excluded = ["color", "size"];
export var Adjust = intrinsicComponent(function (_ref, ref) {
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
  }, rest), React.createElement("g", {
    clipPath: "url(#clip0)"
  }, React.createElement("path", {
    d: "M1.96536 13.9558H5.70684C6.21705 16.1667 8.25786 17.8674 10.6388 17.8674C13.0198 17.8674 15.0606 16.1667 15.5708 13.9558H49.5844C50.2647 13.9558 50.7749 13.4456 50.7749 12.7654C50.6049 12.2552 50.0946 11.745 49.5844 11.745H15.4008C14.8906 9.53409 13.0198 7.83337 10.6389 7.83337C8.25796 7.83337 6.2171 9.53404 5.70689 11.745H1.96541C1.28516 11.745 0.774952 12.2552 0.774952 12.9354C0.774952 13.4456 1.28511 13.9558 1.96536 13.9558Z",
    fill: color
  }), React.createElement("path", {
    d: "M49.5844 22.7993H27.8157C27.3055 20.5885 25.2647 18.8878 22.8837 18.8878C20.5028 18.8878 18.4619 20.5884 17.9517 22.7993H1.96536C1.28511 22.7993 0.774902 23.3095 0.774902 23.9898C0.774902 24.6701 1.28511 25.1803 1.96536 25.1803H18.1218C18.632 27.3911 20.6729 29.0918 23.0538 29.0918C25.4348 29.0918 27.4756 27.3912 27.9858 25.1803H49.5844C50.2647 25.1803 50.7749 24.6701 50.7749 23.9898C50.7749 23.3095 50.0946 22.7993 49.5844 22.7993Z",
    fill: color
  }), React.createElement("path", {
    d: "M49.5844 35.7245H18.1218C17.6116 33.5136 15.5708 31.8129 13.1899 31.8129C10.8089 31.8129 8.76807 33.5136 8.25786 35.7245H1.96536C1.28511 35.7245 0.774902 36.2347 0.774902 36.915C0.774902 37.5952 1.28511 38.1054 1.96536 38.1054H8.42796C8.93817 40.3163 10.979 42.017 13.36 42.017C15.7409 42.017 17.7817 40.3163 18.2919 38.1054H49.5844C50.2647 38.1054 50.7749 37.5952 50.7749 36.915C50.7749 36.2347 50.0946 35.7245 49.5844 35.7245Z",
    fill: color
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0"
  }, React.createElement("rect", {
    width: "50",
    height: "50",
    fill: "white",
    transform: "translate(0.274902)"
  }))));
});
export default Adjust;