import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import DotIcon from '../../../icons/dot';
import { intrinsicComponent } from '../../utils/functions';
import Styled from './dot.styles';
var _excluded = ["active"];
var Dot = intrinsicComponent(function (_ref, ref) {
  var active = _ref.active,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.Dot, _extends({
    ref: ref,
    active: active
  }, rest), React.createElement(Styled.Icon, {
    visible: Boolean(active),
    on: true
  }, React.createElement(DotIcon, null)), React.createElement(Styled.Icon, {
    visible: !active
  }, React.createElement(DotIcon, null)));
});
Dot.defaultProps = {
  active: false
};
Dot.propTypes = {
  active: PT.bool
};
export default Dot;