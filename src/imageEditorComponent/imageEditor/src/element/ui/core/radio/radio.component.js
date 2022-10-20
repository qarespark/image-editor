import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import RadioButtonIcon from '../../../icons/radio-button';
import RadioButtonUncheckedIcon from '../../../icons/radio-button-unchecked';
import { intrinsicComponent } from '../../utils/functions';
import Styled from './radio.styles';
var _excluded = ["checked", "onChange", "radioProps", "readOnly", "disabled"];
var Radio = intrinsicComponent(function (_ref, ref) {
  var checked = _ref.checked,
    onChange = _ref.onChange,
    radioProps = _ref.radioProps,
    readOnly = _ref.readOnly,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.Radio, _extends({}, rest, {
    ref: ref
  }), React.createElement(Styled.Input, _extends({
    checked: checked,
    onChange: readOnly || disabled ? undefined : onChange,
    disabled: disabled
  }, radioProps)), checked ? React.createElement(RadioButtonIcon, null) : React.createElement(RadioButtonUncheckedIcon, null));
});
Radio.defaultProps = {
  checked: false
};
Radio.propTypes = {
  checked: PT.bool,
  onChange: PT.func,
  // eslint-disable-next-line react/forbid-prop-types
  radioProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool
};
export default Radio;