import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Switcher from '../switcher';
import Styled from './switcher-group.styles';
var _excluded = ["label", "switcherProps", "readOnly", "disabled"];
var SwitcherGroup = intrinsicComponent(function (_ref, ref) {
  var label = _ref.label,
    switcherProps = _ref.switcherProps,
    readOnly = _ref.readOnly,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.SwitcherGroup, {
    ref: ref
  }, React.createElement(Switcher, _extends({
    switcherProps: switcherProps,
    readOnly: readOnly,
    disabled: disabled
  }, rest)), React.createElement(Styled.Label, null, label));
});
SwitcherGroup.defaultProps = {
  checked: false
};
SwitcherGroup.propTypes = {
  label: PT.string,
  checked: PT.bool,
  onChange: PT.func,
  // eslint-disable-next-line react/forbid-prop-types
  switcherProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool
};
export default SwitcherGroup;