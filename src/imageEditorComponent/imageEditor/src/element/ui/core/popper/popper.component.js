import _defineProperty from "@babel/runtime/helpers/defineProperty";

/* eslint-disable @typescript-eslint/no-unnecessary-condition */

/* eslint-disable react/forbid-prop-types */
import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PT from 'prop-types';
import { createPopper } from '@popperjs/core';
import usePortal from '../../hooks/use-portal';
import { intrinsicComponent, generateClassNames, useForkRef, objectValues } from '../../utils/functions';
import { Position, Strategy } from './types';
import Styled from './popper.styles';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Popper = intrinsicComponent(function (_ref, ref) {
  var anchorEl = _ref.anchorEl,
    children = _ref.children,
    open = _ref.open,
    _ref$position = _ref.position,
    initialPlacement = _ref$position === void 0 ? 'bottom' : _ref$position,
    _ref$arrow = _ref.arrow,
    arrow = _ref$arrow === void 0 ? false : _ref$arrow,
    popperOptions = _ref.popperOptions,
    onClick = _ref.onClick,
    _ref$overlay = _ref.overlay,
    overlay = _ref$overlay === void 0 ? false : _ref$overlay,
    _ref$zIndex = _ref.zIndex,
    zIndex = _ref$zIndex === void 0 ? 1300 : _ref$zIndex,
    enableUnderlayingEvent = _ref.enableUnderlayingEvent,
    _ref$wrapperStyles = _ref.wrapperStyles,
    wrapperStyles = _ref$wrapperStyles === void 0 ? {} : _ref$wrapperStyles;
  var target = usePortal(generateClassNames('Popper'));
  var popperRef = useRef(null);
  var handlePopperRef = useForkRef(popperRef, ref);
  useEffect(function () {
    if (!anchorEl || !open || popperRef.current === null) {
      return undefined;
    }

    var defaultModifiers = [{
      name: 'arrow',
      options: {
        element: '[data-popper-arrow]'
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, 10]
      }
    }];
    var popperModifiers = arrow ? defaultModifiers : [];

    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    } // eslint-disable-next-line @typescript-eslint/no-non-null-assertion


    var popper = createPopper(anchorEl, popperRef.current, _objectSpread(_objectSpread({
      placement: initialPlacement
    }, popperOptions), {}, {
      modifiers: popperModifiers
    }));
    handlePopperRef.current = popper;
    return function () {
      popper.destroy();
      handlePopperRef.current = null;
    };
  }, [anchorEl, open, popperOptions, initialPlacement, arrow]);

  var passEventToUnderlayingEvent = function passEventToUnderlayingEvent(event) {
    setTimeout(function () {
      if (event.clientX && event.clientY) {
        var elem = document.elementFromPoint(event.clientX, event.clientY);

        if (elem) {
          elem.dispatchEvent(event.nativeEvent);
        }
      }
    }, 0);
  };

  var handleOnClicking = function handleOnClicking(event) {
    event.persist();
    event.preventDefault();
    event.stopPropagation();

    if (onClick) {
      onClick(event);
    }

    if (enableUnderlayingEvent) {
      passEventToUnderlayingEvent(event);
    }
  };

  var renderOverlay = function renderOverlay() {
    return React.createElement(Styled.Overlay, {
      onClick: handleOnClicking,
      onContextMenu: handleOnClicking
    });
  };

  if (!open) {
    return React.createElement("div", {
      ref: handlePopperRef
    });
  }

  var render = function render() {
    var _handlePopperRef$stat;

    return React.createElement(Styled.PopperWrapper, {
      zIndex: zIndex,
      style: _objectSpread({}, wrapperStyles)
    }, overlay && renderOverlay(), React.createElement(Styled.Popper, {
      ref: handlePopperRef
    }, children, arrow && React.createElement(Styled.Arrow, {
      "data-popper-arrow": true,
      position: (handlePopperRef === null || handlePopperRef === void 0 ? void 0 : (_handlePopperRef$stat = handlePopperRef.state) === null || _handlePopperRef$stat === void 0 ? void 0 : _handlePopperRef$stat.placement) || initialPlacement
    })));
  };

  return createPortal(render(), target);
});
Popper.defaultProps = {};
export var propTypes = {
  anchorEl: PT.oneOfType([PT.instanceOf(Element), PT.object]),
  popperOptions: PT.shape({
    modifiers: PT.arrayOf(PT.shape({
      data: PT.object,
      effect: PT.func,
      enabled: PT.bool,
      fn: PT.func,
      name: PT.any.isRequired,
      options: PT.object,
      phase: PT.oneOf(['afterMain', 'afterRead', 'afterWrite', 'beforeMain', 'beforeRead', 'beforeWrite', 'main', 'read', 'write']),
      requires: PT.arrayOf(PT.string),
      requiresIfExists: PT.arrayOf(PT.string)
    })),
    onFirstUpdate: PT.func,
    placement: PT.oneOf(objectValues(Position)),
    strategy: PT.oneOf(objectValues(Strategy))
  }),
  overlay: PT.bool,
  arrow: PT.bool,
  zIndex: PT.number,
  enableUnderlayingEvent: PT.bool,
  wrapperStyles: PT.object
};
Popper.propTypes = propTypes;
export default Popper;