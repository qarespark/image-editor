import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React, { useState } from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import ArrowTick from '../arrow-tick';
import Menu from '../menu';
import { propTypes as menuPropTypes } from '../menu/menu.component';
import { renderValue, renderOption } from './select.utils';
import { Size, Background } from './types';
import Styled from './select.styles';
var _excluded = ["children", "size", "error", "multiple", "onChange", "value", "fullWidth", "selectProps", "MenuProps", "readOnly", "disabled", "background", "renderLabel"];
var Select = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    size = _ref.size,
    error = _ref.error,
    multiple = _ref.multiple,
    onChange = _ref.onChange,
    value = _ref.value,
    fullWidth = _ref.fullWidth,
    selectProps = _ref.selectProps,
    MenuProps = _ref.MenuProps,
    readOnly = _ref.readOnly,
    disabled = _ref.disabled,
    background = _ref.background,
    renderLabel = _ref.renderLabel,
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

  return React.createElement(Styled.Container, {
    ref: ref,
    fullWidth: Boolean(fullWidth)
  }, React.createElement(Styled.Select, _extends({}, rest, {
    size: size,
    background: background,
    error: error,
    fullWidth: Boolean(fullWidth),
    readOnly: readOnly,
    onClick: readOnly || disabled ? undefined : handleClick
  }), React.createElement(Styled.Label, null, typeof renderLabel === 'function' ? renderLabel(value) : renderValue({
    value: value,
    multiple: multiple,
    children: children
  })), React.createElement(Styled.Icon, null, React.createElement(ArrowTick, {
    type: open ? 'top' : 'bottom' // IconProps={{ size: size === Size.Md ? 13 : 11 }}
    ,
    IconProps: {
      size: 8
    }
  })), React.createElement(Styled.Input, selectProps)), React.createElement(Menu, _extends({
    onClose: handleClose,
    open: open,
    anchorEl: anchorEl
  }, MenuProps), React.Children.map(children, function (child) {
    return renderOption(child, {
      value: value,
      multiple: multiple,
      size: size,
      onClose: handleClose,
      onChange: readOnly || disabled ? undefined : onChange
    });
  })));
});
export var defaultProps = {
  size: Size.Md,
  error: false,
  multiple: false,
  fullWidth: false,
  readOnly: false,
  disabled: false,
  background: Background.Primary
};
Select.defaultProps = defaultProps;
export var simpleValuePropTypes = PT.oneOfType([PT.string, PT.number, PT.oneOf([null])]);
export var propTypes = {
  size: PT.oneOf(objectValues(Size)),
  error: PT.bool,
  multiple: PT.bool,
  fullWidth: PT.bool,
  children: PT.oneOfType([PT.element, PT.arrayOf(PT.element)]),
  value: PT.oneOfType([PT.string, PT.number, PT.oneOf([null]), PT.arrayOf(simpleValuePropTypes)]),
  onChange: PT.func,
  MenuProps: PT.exact(menuPropTypes),
  // eslint-disable-next-line react/forbid-prop-types
  selectProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool,
  background: PT.oneOf(objectValues(Background)),
  renderLabel: PT.func
};
Select.propTypes = propTypes;
export default Select;