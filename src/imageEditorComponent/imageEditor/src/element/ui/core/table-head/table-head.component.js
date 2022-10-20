import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Tablelvl2Context from '../table/table-lvl-2-context';
import Styled from './table-head.styles';
var _excluded = ["children"];
var tablelvl2 = {
  variant: 'head'
};
var TableHead = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Tablelvl2Context.Provider, {
    value: tablelvl2
  }, React.createElement(Styled.TableHead, _extends({
    ref: ref
  }, rest), children));
});
TableHead.propTypes = {
  children: PT.node
};
export default TableHead;