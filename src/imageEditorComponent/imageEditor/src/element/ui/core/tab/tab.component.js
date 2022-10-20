import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { Size } from './types';
import Styled from './tab.styles';
var _excluded = ["icon", "label", "value", "active", "className", "size"];
var Tab = intrinsicComponent(function (_ref, ref) {
  var icon = _ref.icon,
    label = _ref.label,
    value = _ref.value,
    active = _ref.active,
    className = _ref.className,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? Size.Md : _ref$size,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.Tab, _extends({
    ref: ref,
    size: size
  }, rest, {
    className: "".concat(className).concat(active ? ' active' : '')
  }), icon && React.createElement(Styled.Icon, {
    size: size
  }, icon), label && React.createElement(Styled.Label, null, label));
});
Tab.defaultProps = {
  size: Size.Md
};
Tab.propTypes = {
  size: PT.oneOf(objectValues(Size)),
  icon: PT.node,
  label: PT.node,
  value: PT.oneOfType([PT.number, PT.string]),
  active: PT.bool
};
Tab.displayName = 'Tab';
export default Tab;