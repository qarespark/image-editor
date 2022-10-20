import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import ArrowTick from '../../../icons/arrow-tick';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import Menu from '../menu';
import { Size } from './types';
import Styled from './menu-item.styles';
var _excluded = ["list", "depth", "children", "disableHover"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* ___*/
var MenuItem = intrinsicComponent(function (_ref, ref) {
  var list = _ref.list,
    _ref$depth = _ref.depth,
    depth = _ref$depth === void 0 ? 0 : _ref$depth,
    children = _ref.children,
    disableHover = _ref.disableHover,
    props = _objectWithoutProperties(_ref, _excluded);

  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    anchorEl = _React$useState2[0],
    setAnchorEl = _React$useState2[1];

  var _React$useState3 = React.useState([]),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    selectedIds = _React$useState4[0],
    setSelectedIds = _React$useState4[1];

  var handleOpenMenu = function handleOpenMenu(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleSelectedId = function handleSelectedId(ev, selected, depthLevel) {
    var updatedArray = selectedIds.slice(0);
    updatedArray[depthLevel] = selected;
    setSelectedIds(updatedArray);
    handleOpenMenu(ev);
  };

  var renderItems = function renderItems(options) {
    var depthLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return options.map(function (option) {
      var hasOptions = option.subList && option.subList.length > 0;
      var subMenu;

      if (selectedIds[depthLevel] === option.key && hasOptions) {
        var newDepthLevel = depthLevel + 1;
        subMenu = React.createElement(Menu, _extends({
          key: option.key,
          position: "right",
          open: Boolean(anchorEl),
          anchorEl: anchorEl,
          enableOverlay: false
        }, option.subMenuProps), React.createElement(MenuItem, _extends({
          list: option.subList,
          depth: newDepthLevel
        }, props)));
      }

      if (option.disabled) {
        return React.createElement(Styled.MenuItemWrapper, {
          disabled: true,
          key: option.key
        });
      }

      return React.createElement(Styled.MenuItemWrapper, {
        disabled: false,
        key: option.key
      }, React.createElement(Styled.MenuItem, _extends({}, props, {
        className: option.className,
        ref: ref,
        active: Boolean(option.active),
        onClick: option.onClick ? function (event) {
          return option.onClick(_objectSpread({
            event: event
          }, props));
        } : undefined,
        onMouseEnter: function onMouseEnter(ev) {
          return handleSelectedId(ev, option.key, depthLevel);
        },
        disableHover: disableHover || option.disableHover
      }), option.prefix && React.createElement(Styled.MenuPrefix, null, typeof option.prefix === 'function' ? option.prefix(props) : option.prefix), option.content && React.createElement(Styled.MenuContent, null, typeof option.content === 'function' ? option.content(props) : option.content), (option.suffix || option.subList) && React.createElement(Styled.MenuSuffix, null, typeof option.suffix === 'function' ? option.suffix(props) : option.suffix, option.subList && React.createElement(ArrowTick, {
        size: 8,
        color: "#768184"
      }))), subMenu);
    });
  };

  if (!list) {
    return React.createElement(Styled.MenuItemWrapper, {
      disabled: false
    }, React.createElement(Styled.MenuItem, _extends({}, props, {
      ref: ref,
      disableHover: disableHover
    }), children));
  }

  return React.createElement(React.Fragment, null, renderItems(list, depth));
});
MenuItem.displayName = 'MenuItem';
export var defaultProps = {
  size: Size.Md,
  active: false
};
MenuItem.defaultProps = defaultProps;
MenuItem.propTypes = {
  size: PT.oneOf(objectValues(Size)),
  children: PT.oneOfType([PT.node, PT.func]),
  active: PT.bool,
  value: PT.oneOfType([PT.string, PT.number, PT.oneOf([null])]),
  depth: PT.number,
  disableHover: PT.bool
};
export default MenuItem; // list: PT.arrayOf(
//   PT.shape({
//     key: PT.string.isRequired,
//     content: PT.oneOfType([PT.string, PT.node]).isRequired,
//     prefix: PT.oneOfType([PT.string, PT.node]),
//     subList: PT.arrayOf(PT.object),
//     suffix: PT.oneOfType([PT.string, PT.node]),
//     onClick: PT.func,
//     disabled: PT.bool,
//   })
// ),