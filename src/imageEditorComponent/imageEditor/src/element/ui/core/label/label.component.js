import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { Type } from './types';
import Styled from './label.styles';
var _excluded = ["children", "iconStart", "iconEnd", "error", "type"];
var Label = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    iconStart = _ref.iconStart,
    iconEnd = _ref.iconEnd,
    error = _ref.error,
    type = _ref.type,
    rest = _objectWithoutProperties(_ref, _excluded);

  var renderIcon = function renderIcon(icon, end) {
    return React.createElement(Styled.Icon, {
      error: Boolean(error),
      $end: end
    }, typeof icon === 'function' ? icon() : icon);
  };

  return React.createElement(Styled.Label, _extends({
    ref: ref,
    error: error,
    type: type
  }, rest), iconStart && renderIcon(iconStart, false), children, iconEnd && renderIcon(iconEnd, true));
});
Label.defaultProps = {
  type: Type.Default,
  error: false
};
export var propTypes = {
  type: PT.oneOf(objectValues(Type)),
  iconStart: PT.oneOfType([PT.node, PT.func]),
  iconEnd: PT.oneOfType([PT.node, PT.func]),
  error: PT.bool,
  htmlFor: PT.string
};
Label.propTypes = propTypes;
export default Label;