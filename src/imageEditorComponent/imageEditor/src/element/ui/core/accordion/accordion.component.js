import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

import React from 'react';
import PT from 'prop-types';
import { iconPropTypes } from '../../../icons/icon.prop-types';
import { intrinsicComponent } from '../../utils/functions';
import AccordionHeader from '../accordion-header';
import AccordionDetails from '../accordion-details';
import Styled from './accordion.styles';
var _excluded = ["label", "expanded", "children", "detailStyle", "headerStyle", "iconProps", "onClick", "onChange", "onContextMenu"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Accordion = intrinsicComponent(function (_ref, ref) {
  var label = _ref.label,
    expanded = _ref.expanded,
    children = _ref.children,
    detailStyle = _ref.detailStyle,
    headerStyle = _ref.headerStyle,
    iconPropsData = _ref.iconProps,
    _onClick = _ref.onClick,
    onChange = _ref.onChange,
    onContextMenu = _ref.onContextMenu,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.Accordion, _extends({
    ref: ref
  }, rest), React.createElement(AccordionHeader, {
    label: label,
    expanded: expanded,
    style: _objectSpread({}, headerStyle),
    onClick: function onClick(event) {
      if (typeof onChange === 'function') {
        onChange(!expanded, event);
      }

      if (typeof _onClick === 'function') {
        _onClick(event);
      }
    },
    onContextMenu: onContextMenu,
    iconProps: iconPropsData
  }), React.createElement(AccordionDetails, {
    expanded: expanded,
    style: _objectSpread({}, detailStyle)
  }, children));
});
Accordion.defaultProps = {
  expanded: false
};
Accordion.propTypes = {
  label: PT.node.isRequired,
  expanded: PT.bool,
  // eslint-disable-next-line react/forbid-prop-types
  detailStyle: PT.object,
  // eslint-disable-next-line react/forbid-prop-types
  headerStyle: PT.object,
  onChange: PT.func,
  onContextMenu: PT.func,
  iconProps: PT.exact(iconPropTypes)
};
export default Accordion;