import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React, { useContext } from 'react';
import PT, { oneOfType } from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Tablelvl2Context from '../table/table-lvl-2-context';
import TableContext from '../table/table-context';
import Styled from './table-cell.styles';
var _excluded = ["align", "padding", "size", "children", "component", "scope"];
var TableCell = intrinsicComponent(function (_ref, ref
) {
  var _ref$align = _ref.align,
    align = _ref$align === void 0 ? 'left' : _ref$align,
    paddingProp = _ref.padding,
    sizeProp = _ref.size,
    children = _ref.children,
    component = _ref.component,
    scopeProp = _ref.scope,
    rest = _objectWithoutProperties(_ref, _excluded);

  var table = useContext(TableContext);
  var tablelvl2 = useContext(Tablelvl2Context);
  var isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
  var role;
  var Component;

  if (component) {
    Component = component === 'th' ? Styled.TableCellHeader : Styled.TableCellData;
    role = isHeadCell ? 'columnheader' : 'cell';
  } else {
    Component = isHeadCell ? Styled.TableCellHeader : Styled.TableCellData;
  }

  var scope = scopeProp;

  if (!scope && isHeadCell) {
    scope = 'col';
  }

  var padding = paddingProp || (table && table.padding ? table.padding : 'default');
  var size = sizeProp || (table && table.size ? table.size : 'medium');
  return React.createElement(Component, _extends({
    ref: ref,
    role: role,
    scope: scope,
    align: align,
    padding: padding,
    size: size
  }, rest), children);
});
TableCell.defaultProps = {};
TableCell.propTypes = {
  children: PT.node,
  component: oneOfType([PT.node, PT.string]),
  align: PT.oneOf(['center', 'justify', 'left', 'right']),
  padding: PT.oneOf(['options', 'default', 'none']),
  size: PT.oneOf(['medium', 'small'])
};
export default TableCell;