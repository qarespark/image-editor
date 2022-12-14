import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Styled from './table-container.styles';
var _excluded = ["children"];
var TableContainer = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.TableContainer, _extends({
    ref: ref
  }, rest), children);
});
TableContainer.propTypes = {
  children: PT.node
};
export default TableContainer;