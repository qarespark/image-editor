import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import Styled from './modal-actions.styles';
import { Align } from './types';
var _excluded = ["children"];
var ModalActions = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.ModalActions, _extends({}, rest, {
    ref: ref
  }), children);
});
ModalActions.defaultProps = {
  align: Align.Center
};
ModalActions.propTypes = {
  children: PT.node.isRequired,
  align: PT.oneOf(objectValues(Align))
};
ModalActions.displayName = 'ModalActions';
export default ModalActions;