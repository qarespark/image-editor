import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

import React from 'react';
import PT from 'prop-types';
import { iconPropTypes } from '../../../icons/icon.prop-types';
import { intrinsicComponent } from '../../utils/functions';
import ArrowTick from '../arrow-tick';
import { Position as ArrowTickType } from '../../utils/types';
import Styled from './accordion-header.styles';
var _excluded = ["expanded", "label", "onChange", "onClick", "onContextMenu", "iconProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var AccordionHeader = intrinsicComponent(function (_ref, ref) {
  var expanded = _ref.expanded,
    label = _ref.label,
    onChange = _ref.onChange,
    _onClick = _ref.onClick,
    onContextMenu = _ref.onContextMenu,
    iconPropsData = _ref.iconProps,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.AccordionHeader, _extends({
    ref: ref,
    onClick: function onClick(event) {
      if (typeof onChange === 'function') {
        onChange(!expanded);
      }

      if (typeof _onClick === 'function') {
        _onClick(event);
      }
    }
  }, rest), React.createElement(Styled.Icon, {
    onContextMenu: onContextMenu
  }, React.createElement(ArrowTick, {
    type: expanded ? ArrowTickType.Bottom : ArrowTickType.Right,
    IconProps: _objectSpread({
      size: 8
    }, iconPropsData)
  })), React.createElement(Styled.Label, {
    onContextMenu: onContextMenu
  }, label));
});
AccordionHeader.defaultProps = {
  expanded: false
};
AccordionHeader.propTypes = {
  label: PT.node.isRequired,
  expanded: PT.bool,
  onChange: PT.func,
  iconProps: PT.exact(iconPropTypes)
};
export default AccordionHeader;