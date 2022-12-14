import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { propTypes as popperPropTypes } from '../popper/popper.component';
import { Position } from '../popper/types';
import Popper from '../popper';
import Styled from './menu.styles';
var _excluded = ["id", "children", "open", "fullWidth", "anchorElPosition", "anchorEl", "onClose", "containerProps", "alignCenter", "maxHeight", "position", "popperOptions", "enableOverlay", "zIndex", "hideScroll", "enableUnderlayingEvent", "popperWrapperStyles"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Menu = intrinsicComponent(function (_ref, ref) {
  var id = _ref.id,
    children = _ref.children,
    open = _ref.open,
    fullWidth = _ref.fullWidth,
    anchorElPosition = _ref.anchorElPosition,
    anchorEl = _ref.anchorEl,
    onClose = _ref.onClose,
    containerProps = _ref.containerProps,
    alignCenter = _ref.alignCenter,
    maxHeight = _ref.maxHeight,
    position = _ref.position,
    popperOptions = _ref.popperOptions,
    _ref$enableOverlay = _ref.enableOverlay,
    enableOverlay = _ref$enableOverlay === void 0 ? true : _ref$enableOverlay,
    zIndex = _ref.zIndex,
    _ref$hideScroll = _ref.hideScroll,
    hideScroll = _ref$hideScroll === void 0 ? true : _ref$hideScroll,
    _ref$enableUnderlayin = _ref.enableUnderlayingEvent,
    enableUnderlayingEvent = _ref$enableUnderlayin === void 0 ? false : _ref$enableUnderlayin,
    _ref$popperWrapperSty = _ref.popperWrapperStyles,
    popperWrapperStyles = _ref$popperWrapperSty === void 0 ? {} : _ref$popperWrapperSty,
    rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    timeout = _useState2[0],
    setTimeoutState = _useState2[1];

  var _useState3 = useState(new DOMRect()),
    _useState4 = _slicedToArray(_useState3, 2),
    rect = _useState4[0],
    setRect = _useState4[1];

  var menuRef = useRef(null);
  var updateRect = useCallback(function () {
    var _anchorEl$getBounding;

    var defaultPosition = _objectSpread({
      top: 0,
      left: 0,
      height: 0,
      width: 0
    }, anchorElPosition || {});

    var defaultRect = new DOMRect(defaultPosition.left, defaultPosition.top, defaultPosition.width, defaultPosition.height);
    setRect((_anchorEl$getBounding = anchorEl === null || anchorEl === void 0 ? void 0 : anchorEl.getBoundingClientRect()) !== null && _anchorEl$getBounding !== void 0 ? _anchorEl$getBounding : defaultRect);
  }, [open, timeout, anchorEl]);
  var handleWindowSizeChanged = useCallback(function () {
    if (open) {
      if (timeout) {
        clearTimeout(timeout);
      }

      setTimeoutState(setTimeout(updateRect, 300));
    }
  }, [open, timeout]);
  useEffect(function () {
    window.addEventListener('resize', handleWindowSizeChanged);
    return function () {
      window.removeEventListener('resize', handleWindowSizeChanged);
    };
  }, [handleWindowSizeChanged]);
  useEffect(function () {
    updateRect();
  }, [anchorElPosition, updateRect]);
  useEffect(function () {
    if (hideScroll) {
      if (open) {
        document.body.classList.add('Menu-open');
        updateRect();
      } else {
        document.body.classList.remove('Menu-open');
      }

      return function () {
        document.body.classList.remove('Menu-open');
      };
    }
  }, [open, updateRect]);

  var handleClose = function handleClose() {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return React.createElement(React.Fragment, null, React.createElement(Popper, {
    ref: menuRef,
    position: position || 'bottom',
    open: Boolean(anchorEl),
    anchorEl: anchorEl,
    overlay: Boolean(enableOverlay),
    onClick: handleClose,
    popperOptions: popperOptions,
    zIndex: zIndex,
    enableUnderlayingEvent: enableUnderlayingEvent,
    wrapperStyles: popperWrapperStyles
  }, React.createElement(Styled.Menu, _extends({}, containerProps, {
    alignCenter: Boolean(alignCenter),
    rect: rect
  }, rest, {
    ref: ref,
    maxHeight: maxHeight
  }), children)));
});
export var defaultProps = {
  open: false,
  containerProps: {},
  maxHeight: 0,
  position: 'bottom',
  enableOverlay: true,
  hideScroll: true
};
Menu.defaultProps = defaultProps;
export var propTypes = {
  anchorElPosition: PT.shape({
    left: PT.number,
    right: PT.number,
    top: PT.number,
    bottom: PT.number
  }),
  anchorEl: PT.instanceOf(Element),
  open: PT.bool,
  fullWidth: PT.bool,
  onClose: PT.func,
  id: PT.string,
  // eslint-disable-next-line react/forbid-prop-types
  containerProps: PT.object,
  alignCenter: PT.bool,
  maxHeight: PT.oneOfType([PT.string, PT.number]),
  popperOptions: popperPropTypes.popperOptions,
  position: PT.oneOf(objectValues(Position)),
  enableOverlay: PT.bool,
  zIndex: PT.number,
  hideScroll: PT.bool,
  enableUnderlayingEvent: PT.bool,
  // eslint-disable-next-line react/forbid-prop-types
  popperWrapperStyles: PT.object
};
Menu.propTypes = propTypes;
export default Menu;