import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import SpinnerIcon from '../../../icons/spinner';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import Badge from '../badge';
import { ButtonSize, ButtonColor } from '../../utils/types';
import { getIconSize } from './button.utils';
import Styled from './button.styles';
var _excluded = ["children", "icon", "badge", "color", "size", "loading", "disabled"];
var Button = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    icon = _ref.icon,
    badge = _ref.badge,
    color = _ref.color,
    size = _ref.size,
    loading = _ref.loading,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.Button, _extends({}, rest, {
    disabled: loading || disabled,
    color: color,
    size: size,
    ref: ref
  }), icon && React.createElement(Styled.Icon, {
    $loading: loading
  }, typeof icon === 'function' ? loading ? React.createElement(SpinnerIcon, {
    size: getIconSize(size)
  }) : icon({
    size: getIconSize(size)
  }) :
    loading ? React.createElement(SpinnerIcon, {
      size: getIconSize(size)
    }) : icon), loading && !icon && React.createElement(Styled.Icon, {
      $loading: loading
    }, React.createElement(SpinnerIcon, {
      size: getIconSize(size)
    })), React.createElement(Styled.Label, null, children), badge && React.createElement(Styled.Badge, null, React.createElement(Badge, {
      inline: true,
      size: 14,
      fontSize: 10,
      padding: "0 1px",
      badgeContent: badge,
      color: color === ButtonColor.Primary ? 'white' : 'secondary'
    })));
});
Button.defaultProps = {
  size: ButtonSize.Md,
  color: ButtonColor.Secondary
};
Button.propTypes = {
  size: PT.oneOf(objectValues(ButtonSize)),
  color: PT.oneOf(objectValues(ButtonColor)),
  icon: PT.oneOfType([PT.node, PT.func]),
  badge: PT.node,
  loading: PT.bool,
  disabled: PT.bool
};
export default Button;