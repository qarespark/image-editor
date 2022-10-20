import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import SwitcherOnIcon from '../../../icons/switcher-on';
import SwitcherOffIcon from '../../../icons/switcher-off';
import { intrinsicComponent } from '../../utils/functions';
import Styled from './switcher.styles';
var _excluded = ["checked", "onChange", "switcherProps", "readOnly", "disabled"];
var Switcher = intrinsicComponent(function (_ref, ref) {
  var checked = _ref.checked,
    onChange = _ref.onChange,
    switcherProps = _ref.switcherProps,
    readOnly = _ref.readOnly,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.Switcher, _extends({}, rest, {
    ref: ref
  }), React.createElement(Styled.Input, _extends({
    checked: checked,
    onChange: readOnly || disabled ? undefined : onChange,
    readOnly: readOnly,
    disabled: disabled
  }, switcherProps)), checked ? React.createElement(SwitcherOnIcon, null) : React.createElement(SwitcherOffIcon, null));
});
Switcher.defaultProps = {
  checked: false
};
Switcher.propTypes = {
  checked: PT.bool,
  onChange: PT.func,
  // eslint-disable-next-line react/forbid-prop-types
  switcherProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool
};
export default Switcher;