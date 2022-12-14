import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { Size } from './types';
import Styled from './menu-item.styles';
var _excluded = ["children"];
var MenuItemActions = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.Actions, _extends({}, rest, {
    ref: ref
  }), children && typeof children === 'function' ? children({
    size: rest.size
  }) : children);
});
MenuItemActions.displayName = 'MenuItemActions';
MenuItemActions.defaultProps = {
  size: Size.Md
};
MenuItemActions.propTypes = {
  size: PT.oneOf(objectValues(Size)),
  children: PT.oneOfType([PT.node, PT.func]).isRequired
};
export default MenuItemActions;