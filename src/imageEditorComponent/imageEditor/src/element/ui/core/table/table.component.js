import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import TableContext from './table-context';
import Styled from './table.styles';
var _excluded = ["children", "padding", "size"];
var Table = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 'default' : _ref$padding,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    rest = _objectWithoutProperties(_ref, _excluded);

  var table = React.useMemo(function () {
    return {
      padding: padding,
      size: size
    };
  }, [padding, size]);
  return React.createElement(TableContext.Provider, {
    value: table
  }, React.createElement(Styled.Table, _extends({
    ref: ref
  }, rest), children));
});
Table.defaultProps = {
  padding: 'default',
  size: 'medium'
};
Table.propTypes = {
  children: PT.node,
  padding: PT.oneOf(['options', 'default', 'none']),
  size: PT.oneOf(['medium', 'small'])
};
export default Table;