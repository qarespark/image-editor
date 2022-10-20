import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";

import React from 'react';
import TickIcon from '../../../icons/tick';
import { MenuItemActions, MenuItemLabel } from '../menu-item';
import { Size } from './types';
import Styled from './select.styles';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
export var getIconSize = function getIconSize(size) {
  switch (size) {
    case Size.Md:
      return 13;

    case Size.Sm:
    default:
      return 11;
  }
};
export var renderIcon = function renderIcon(_icon, size) {
  return _icon ? React.createElement(Styled.Icon, null, typeof _icon === 'function' ? _icon({
    size: getIconSize(size)
  }) : _icon) : undefined;
};

var generateChildren = function generateChildren(children) {
  var isActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Size.Md;

  if (isActive && children) {
    var miActions = React.createElement(MenuItemActions, null, React.createElement(TickIcon, {
      size: size === Size.Md ? 11 : 9
    }));

    if (React.Children.count(children) === 1) {
      var _type;

      var miChildren = children;

      if (React.isValidElement(children) && (children === null || children === void 0 ? void 0 : (_type = children.type) === null || _type === void 0 ? void 0 : _type.displayName) !== 'MenuItemLabel') {
        miChildren = React.createElement(MenuItemLabel, null, children);
      }

      return React.createElement(React.Fragment, null, miChildren, miActions);
    }

    if (React.Children.count(children) > 1 && !React.Children.toArray(children).some(function (child) {
      var _child$type;

      return (child === null || child === void 0 ? void 0 : (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) === 'MenuItemActions';
    })) {
      return React.createElement(React.Fragment, null, children, miActions);
    }
  }

  return children;
};

export var renderOption = function renderOption(menuItem, _ref) {
  var _type2, _props, _props2;

  var value = _ref.value,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? Size.Md : _ref$size,
    onClose = _ref.onClose,
    onChange = _ref.onChange;

  if (!React.isValidElement(menuItem)) {
    return menuItem;
  }

  if (((_type2 = menuItem.type) === null || _type2 === void 0 ? void 0 : _type2.displayName) !== 'MenuItem') {
    return React.cloneElement(menuItem);
  }

  var menuItemValue = menuItem === null || menuItem === void 0 ? void 0 : (_props = menuItem.props) === null || _props === void 0 ? void 0 : _props.value;
  var valueArr = multiple ? Array.isArray(value) ? value : [] : [value];
  var active = valueArr.length > 0 && valueArr.includes(menuItemValue);
  return React.cloneElement(menuItem, {
    active: active,
    size: size,
    children: generateChildren(menuItem === null || menuItem === void 0 ? void 0 : (_props2 = menuItem.props) === null || _props2 === void 0 ? void 0 : _props2.children, active, size),
    onClick: function onClick() {
      if (!multiple && typeof onClose === 'function') {
        onClose();
      }

      if (typeof onChange === 'function') {
        var newValue = menuItemValue;

        if (multiple) {
          newValue = _toConsumableArray(Array.isArray(value) ? value : []);
          var index = newValue.indexOf(menuItemValue);

          if (index > -1) {
            newValue.splice(index, 1);
          } else {
            newValue.push(menuItemValue);
          }
        }

        onChange(newValue);
      }
    }
  });
};

var renderOptionValue = function renderOptionValue(option) {
  if (option && option.children) {
    if (Array.isArray(option.children)) {
      var _option$children, _option$children$filt;

      return (_option$children = option.children) === null || _option$children === void 0 ? void 0 : (_option$children$filt = _option$children.filter(function (optionChild) {
        return typeof optionChild === 'string';
      })) === null || _option$children$filt === void 0 ? void 0 : _option$children$filt.join(' ');
    }

    return option.children;
  }
};

export var renderValue = function renderValue(_ref2) {
  var value = _ref2.value,
    _ref2$multiple = _ref2.multiple,
    multiple = _ref2$multiple === void 0 ? false : _ref2$multiple,
    children = _ref2.children;
  var optionsProps = [];
  React.Children.forEach(children, function (child) {
    if (React.isValidElement(child)) {
      var _type3 = child === null || child === void 0 ? void 0 : child.type,
        displayName = _type3.displayName;

      if (displayName === 'MenuItem' && Boolean(child.props)) {
        optionsProps.push(_objectSpread({}, child.props));
      }
    }
  });
  var activeOptions = multiple ? optionsProps.filter(function (itemProps) {
    return Array.isArray(value) && value.includes(itemProps.value);
  }) : [optionsProps.find(function (itemProps) {
    return itemProps.value === value;
  })];

  if (activeOptions.length > 0) {
    return activeOptions.map(renderOptionValue).join(', ');
  }

  return Array.isArray(value) ? value.join(', ') : value;
};