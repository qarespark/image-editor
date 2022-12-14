import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Styled from './modal-content.styles';
var _excluded = ["children"];
var ModalContent = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.ModalContent, _extends({}, rest, {
    ref: ref
  }), children);
});
ModalContent.defaultProps = {};
ModalContent.propTypes = {
  children: PT.node.isRequired
};
ModalContent.displayName = 'ModalContent';
export default ModalContent;