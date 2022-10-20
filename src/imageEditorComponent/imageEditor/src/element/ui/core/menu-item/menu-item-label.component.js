import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { intrinsicComponent } from '../../utils/functions';
import Styled from './menu-item.styles';
var _excluded = ["children"];
var MenuItemLabel = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.Label, _extends({}, rest, {
    ref: ref
  }), children);
});
MenuItemLabel.displayName = 'MenuItemLabel';
export default MenuItemLabel;