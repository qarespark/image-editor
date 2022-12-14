import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Styled from './table-row.styles';
var _excluded = ["children", "hover", "selected"];
var TableRow = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    hover = _ref.hover,
    selected = _ref.selected,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.TableRow, _extends({
    ref: ref,
    hover: hover,
    selected: selected
  }, rest), children);
});
TableRow.defaultProps = {};
TableRow.propTypes = {
  children: PT.node,
  hover: PT.bool,
  selected: PT.bool
};
export default TableRow;