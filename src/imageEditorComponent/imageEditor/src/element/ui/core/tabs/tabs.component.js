import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Styled from './tabs.styles';
var _excluded = ["children", "value", "onChange"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Tabs = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    value = _ref.value,
    onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.Tabs, _extends({
    ref: ref
  }, rest), React.Children.map(children, function (child, index) {
    var _child$type, _child$type2;

    var childValue = child.props.value || index;
    var active = value === childValue;
    return React.cloneElement(child, _objectSpread({
      onClick: function onClick(event) {
        if (typeof onChange === 'function' && !active) {
          onChange(childValue);
        }

        if (typeof child.props.onClick === 'function') {
          child.props.onClick(event);
        }
      }
    }, (child === null || child === void 0 ? void 0 : (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) === 'Tab' || (child === null || child === void 0 ? void 0 : (_child$type2 = child.type) === null || _child$type2 === void 0 ? void 0 : _child$type2.name) === 'Tab' ? {
      active: active
    } : {}));
  }));
});
Tabs.propTypes = {
  value: PT.oneOfType([PT.string, PT.number]),
  onChange: PT.func,
  children: PT.node
};
export default Tabs;