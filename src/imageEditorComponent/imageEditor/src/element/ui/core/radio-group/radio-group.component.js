import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Radio from '../radio';
import Styled from './radio-group.styles';
var _excluded = ["label", "radioProps", "readOnly", "disabled", "radioStyles", "labelStyles", "onChange", "checked"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var RadioGroup = intrinsicComponent(function (_ref, ref) {
  var label = _ref.label,
    radioProps = _ref.radioProps,
    readOnly = _ref.readOnly,
    disabled = _ref.disabled,
    radioStyles = _ref.radioStyles,
    labelStyles = _ref.labelStyles,
    onChange = _ref.onChange,
    checked = _ref.checked,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.RadioGroup, _extends({
    ref: ref
  }, rest), React.createElement(Radio, {
    radioProps: radioProps,
    readOnly: readOnly,
    disabled: disabled,
    checked: checked,
    onChange: onChange,
    style: _objectSpread({}, radioStyles)
  }), React.createElement(Styled.Label, {
    style: _objectSpread({}, labelStyles)
  }, label));
});
RadioGroup.defaultProps = {
  checked: false
};
RadioGroup.propTypes = {
  label: PT.node,
  checked: PT.bool,
  onChange: PT.func,
  radioProps: PT.object,
  radioStyles: PT.object,
  labelStyles: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool
};
export default RadioGroup;