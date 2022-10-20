import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _typeof from "@babel/runtime/helpers/typeof";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Label from '../label';
import React from 'react';
import { propTypes as labelPropTypes } from '../label/label.component';
import Select from '../select';
import { propTypes as selectPropTypes } from '../select/select.component';
import FormHint from '../form-hint';
import Styled from './select-group.styles';
var _excluded = ["children", "error", "label", "hint", "LabelProps", "SelectProps", "selectProps", "fullWidth", "value", "multiple", "onChange", "readOnly", "disabled"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var SelectGroup = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    error = _ref.error,
    label = _ref.label,
    hint = _ref.hint,
    LabelPropsData = _ref.LabelProps,
    SelectPropsData = _ref.SelectProps,
    selectProps = _ref.selectProps,
    fullWidth = _ref.fullWidth,
    value = _ref.value,
    multiple = _ref.multiple,
    onChange = _ref.onChange,
    readOnly = _ref.readOnly,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);

  var renderLabel = function renderLabel() {
    if (label) {
      if (typeof label === 'function') {
        return label({
          error: error
        });
      }

      if (_typeof(label) === 'object') {
        return label;
      }

      return React.createElement(Label, _extends({
        error: error
      }, LabelPropsData || {}), label);
    }

    return null;
  };

  var renderHint = function renderHint() {
    if (hint) {
      if (typeof hint === 'function') {
        return hint({
          error: error
        });
      }

      if (_typeof(hint) === 'object') {
        return hint;
      }

      return React.createElement(FormHint, {
        error: error
      }, hint);
    }

    return null;
  };

  return React.createElement(Styled.SelectGroup, _extends({}, rest, {
    ref: ref
  }), renderLabel(), React.createElement(Select, _extends({
    error: error,
    value: value,
    onChange: onChange,
    multiple: multiple,
    fullWidth: Boolean(fullWidth)
  }, SelectPropsData || {}, {
    selectProps: selectProps,
    readOnly: readOnly,
    disabled: disabled
  }), children), renderHint());
});
SelectGroup.defaultProps = {
  error: false,
  fullWidth: false,
  readOnly: false,
  disabled: false
};

var size = selectPropTypes.size,
  restSelectPropTypes = _objectWithoutProperties(selectPropTypes, ["size"]);

SelectGroup.propTypes = _objectSpread(_objectSpread({}, restSelectPropTypes), {}, {
  // Extends from SelectProps: multiple, error, children, value, onChange
  fullWidth: PT.bool,
  label: PT.node,
  hint: PT.node,
  LabelProps: PT.exact(labelPropTypes),
  SelectProps: PT.exact(selectPropTypes),
  // eslint-disable-next-line react/forbid-prop-types
  selectProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool
});
export default SelectGroup;