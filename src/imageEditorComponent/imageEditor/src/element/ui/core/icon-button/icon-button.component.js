import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { getIconSize } from '../button/button.utils';
import { ButtonSize, ButtonColor } from '../../utils/types';
import Styled from './icon-button.styles';
var _excluded = ["children"];
export var getIconSizeWithSquare = function getIconSizeWithSquare(sizeName, square) {
  switch (sizeName) {
    case ButtonSize.Xl:
      return square ? 18 : 16;

    case ButtonSize.Lg:
    case ButtonSize.Md:
      return square ? 16 : 14;

    default:
      return getIconSize(sizeName);
  }
};
var IconButton = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.IconButton, _extends({}, rest, {
    ref: ref
  }), children && (typeof children === 'function' ? children({
    size: getIconSizeWithSquare(rest.size, rest.square)
  }) : children));
});
IconButton.defaultProps = {
  size: ButtonSize.Md,
  color: ButtonColor.Secondary,
  square: false
};
IconButton.propTypes = {
  children: PT.oneOfType([PT.node, PT.func]).isRequired,
  size: PT.oneOf(objectValues(ButtonSize)),
  color: PT.oneOf(objectValues(ButtonColor)),
  square: PT.bool
};
export default IconButton;