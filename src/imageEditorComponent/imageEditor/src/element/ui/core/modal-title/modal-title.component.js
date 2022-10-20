import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import CrossIcon from '../../../icons/cross';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import Styled from './modal-title.styles';
import { Variant } from './types';
var _excluded = ["secondary", "onClose"];
var ModalTitle = intrinsicComponent(function (_ref, ref) {
  var secondary = _ref.secondary,
    onClose = _ref.onClose,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.ModalTitle, _extends({}, rest, {
    ref: ref
  }), rest.icon && React.createElement(Styled.Icon, {
    iconShadow: Boolean(rest.iconShadow)
  }, rest.icon), React.createElement(Styled.LabelPrimary, null, rest.primary), rest.variant === Variant.WithIcon && secondary && React.createElement(Styled.LabelSecondary, null, secondary), React.createElement(Styled.Close, {
    variant: rest.variant,
    onClick: onClose
  }, React.createElement(CrossIcon, {
    size: 11
  })));
});
ModalTitle.defaultProps = {
  iconShadow: true,
  variant: Variant.Default
};
ModalTitle.propTypes = {
  primary: PT.node.isRequired,
  secondary: PT.node,
  icon: PT.node,
  iconShadow: PT.bool,
  onClose: PT.func,
  variant: PT.oneOf(objectValues(Variant))
};
ModalTitle.displayName = 'ModalTitle';
export default ModalTitle;