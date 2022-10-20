import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React, { useState } from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Arrow from '../arrow';
import Menu from '../menu';
import { renderValue, renderOption } from '../select/select.utils';
import { propTypes as selectPropTypes } from '../select/select.component';
import Styled from './input-localization.styles';
import { Size } from '../select/types';
var _excluded = ["children", "onChange", "value", "icon", "MenuProps", "readOnly", "disabled", "renderLabel", "multiple"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var InputLocalization = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    onChange = _ref.onChange,
    value = _ref.value,
    icon = _ref.icon,
    MenuProps = _ref.MenuProps,
    readOnly = _ref.readOnly,
    disabled = _ref.disabled,
    renderLabel = _ref.renderLabel,
    multiple = _ref.multiple,
    rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    anchorEl = _useState2[0],
    setAnchorEl = _useState2[1];

  var open = Boolean(anchorEl);

  var handleClick = function handleClick(event) {
    return setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    return setAnchorEl(undefined);
  };

  return React.createElement(Styled.Container, _extends({}, rest, {
    ref: ref
  }), React.createElement(Styled.InputLocalization, {
    onClick: disabled || readOnly ? undefined : handleClick
  }, icon && React.createElement(Styled.Icon, null, icon), React.createElement(Styled.Label, null, typeof renderLabel === 'function' ? renderLabel(value) : renderValue({
    value: value,
    children: children,
    multiple: multiple
  })), React.createElement(Styled.Icon, null, React.createElement(Arrow, {
    type: open ? 'top' : 'bottom',
    IconProps: {
      size: 6
    }
  }))), React.createElement(Menu, _extends({
    anchorEl: anchorEl,
    open: open,
    onClose: handleClose
  }, MenuProps), React.Children.map(children, function (child) {
    return renderOption(child, {
      value: value,
      multiple: multiple,
      size: Size.Sm,
      onClose: handleClose,
      onChange: disabled || readOnly ? undefined : onChange
    });
  })));
});
InputLocalization.defaultProps = {};

var error = selectPropTypes.error,
  size = selectPropTypes.size,
  restSelectPropTypes = _objectWithoutProperties(selectPropTypes, ["error", "size"]);

InputLocalization.propTypes = _objectSpread(_objectSpread({}, restSelectPropTypes), {}, {
  icon: PT.node,
  readOnly: PT.bool,
  disabled: PT.bool
});
export default InputLocalization;