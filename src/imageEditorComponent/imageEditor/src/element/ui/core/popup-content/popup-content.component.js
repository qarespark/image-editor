import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Robot from '../robot';
import { defaultProps as robotDefaultProps, propTypes as robotPropTypes } from '../robot/robot.component';
import Styled from './popup-content.styles';
var _excluded = ["message", "status"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var PopupContent = intrinsicComponent(function (_ref, ref) {
  var message = _ref.message,
    status = _ref.status,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.PopupContent, _extends({}, rest, {
    ref: ref
  }), React.createElement(Styled.Robot, null, React.createElement(Robot, {
    status: status
  })), React.createElement(Styled.LabelWrapper, null, React.createElement(Styled.Label, null, message)));
});
export var defaultProps = _objectSpread({}, robotDefaultProps);
PopupContent.defaultProps = defaultProps;
export var propTypes = _objectSpread(_objectSpread({}, robotPropTypes), {}, {
  message: PT.node.isRequired
});
PopupContent.propTypes = propTypes;
export default PopupContent;