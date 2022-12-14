import _extends from "@babel/runtime/helpers/extends";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Dot from '../dot';
import Styled from './dots-navigation.styles';
var _excluded = ["activeItem", "size"];
var DotsNavigation = intrinsicComponent(function (_ref, ref) {
  var _ref$activeItem = _ref.activeItem,
    activeItem = _ref$activeItem === void 0 ? 0 : _ref$activeItem,
    size = _ref.size,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.DotsNavigation, _extends({
    ref: ref
  }, rest), _toConsumableArray(new Array(size)).map(function (_item, index) {
    return index;
  }).map(function (index) {
    return React.createElement(Dot, {
      key: index,
      active: activeItem > -1 && index <= activeItem
    });
  }));
});
DotsNavigation.defaultProps = {
  activeItem: 0
};
DotsNavigation.propTypes = {
  activeItem: PT.number,
  size: PT.number.isRequired
};
export default DotsNavigation;