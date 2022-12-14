import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { Size } from './types';
import Styled from './menu-item.styles';

var _excluded = ["children", "size"];
var getIconSize = function getIconSize(sizeName) {
  switch (sizeName) {
    case Size.Md:
      return 16;

    case Size.Sm:
    default:
      return 12;
  }
};

var MenuItemIcon = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? Size.Md : _ref$size,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.Icon, _extends({}, rest, {
    ref: ref
  }), children && typeof children === 'function' ? children({
    size: getIconSize(size)
  }) : children);
});
MenuItemIcon.defaultProps = {
  size: Size.Md
};
MenuItemIcon.propTypes = {
  size: PT.oneOf(objectValues(Size)),
  children: PT.oneOfType([PT.node, PT.func]).isRequired
};
export default MenuItemIcon;