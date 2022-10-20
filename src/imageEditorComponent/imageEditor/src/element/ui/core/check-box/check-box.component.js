import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import CheckBoxIcon from '../../../icons/check-box';
import CheckBoxUncheckedIcon from '../../../icons/check-box-unchecked';
import { intrinsicComponent } from '../../utils/functions';
import Styled from './check-box.styles';
var _excluded = ["checked", "onChange", "checkBoxProps", "readOnly", "disabled"];
var CheckBox = intrinsicComponent(function (_ref, ref) {
  var checked = _ref.checked,
    onChange = _ref.onChange,
    checkBoxProps = _ref.checkBoxProps,
    readOnly = _ref.readOnly,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.CheckBox, _extends({
    disabled: Boolean(disabled),
    ref: ref
  }, rest), React.createElement(Styled.Input, _extends({
    checked: checked,
    disabled: disabled,
    onChange: readOnly || disabled ? undefined : onChange
  }, checkBoxProps)), checked ? React.createElement(CheckBoxIcon, null) : React.createElement(CheckBoxUncheckedIcon, null));
});
CheckBox.defaultProps = {
  checked: false
};
CheckBox.propTypes = {
  checked: PT.bool,
  onChange: PT.func,
  // eslint-disable-next-line react/forbid-prop-types
  checkBoxProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool
};
export default CheckBox;