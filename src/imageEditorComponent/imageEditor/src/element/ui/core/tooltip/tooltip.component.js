import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

/* eslint-disable react/forbid-prop-types */
import React, { useState, useRef } from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { Size } from './types';
import { Position, Strategy } from '../popper/types';
import Styled from './tooltip.styles';
import Popper from '../popper';
var _excluded = ["children", "position", "popperOptions", "arrow", "enableUnderlayingEvent", "popperWrapperStyles"];
var Tooltip = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? Position.Top : _ref$position,
    popperOptions = _ref.popperOptions,
    _ref$arrow = _ref.arrow,
    arrow = _ref$arrow === void 0 ? true : _ref$arrow,
    enableUnderlayingEvent = _ref.enableUnderlayingEvent,
    _ref$popperWrapperSty = _ref.popperWrapperStyles,
    popperWrapperStyles = _ref$popperWrapperSty === void 0 ? {} : _ref$popperWrapperSty,
    rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    anchorEl = _useState2[0],
    setAnchorEl = _useState2[1];

  var open = Boolean(anchorEl);
  var tooltipRef = useRef(null);

  var handleMouseEnter = function handleMouseEnter(event) {
    var onMouseEnter = children.props.onMouseEnter;
    setAnchorEl(event.currentTarget);

    if (typeof onMouseEnter === 'function') {
      onMouseEnter(event);
    }
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    var onMouseLeave = children.props.onMouseLeave;
    setAnchorEl(null);

    if (typeof onMouseLeave === 'function') {
      onMouseLeave(event);
    }
  };

  var render = function render() {
    return React.createElement(Popper, {
      ref: tooltipRef,
      position: position,
      anchorEl: anchorEl,
      open: anchorEl ? open : false,
      popperOptions: popperOptions,
      arrow: arrow,
      enableUnderlayingEvent: enableUnderlayingEvent,
      wrapperStyles: popperWrapperStyles
    }, React.createElement(Styled.TooltipContainer, _extends({}, rest, {
      open: open
    }), React.createElement(Styled.Tooltip, null, rest.title)));
  };

  return React.createElement(React.Fragment, null, React.cloneElement(children, {
    ref: ref,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }), render());
});
Tooltip.defaultProps = {
  position: Position.Top,
  size: Size.Sm,
  arrow: true
};
Tooltip.propTypes = {
  position: PT.oneOf(objectValues(Position)),
  size: PT.oneOf(objectValues(Size)),
  title: PT.node,
  children: PT.element,
  arrow: PT.bool,
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
  enableUnderlayingEvent: PT.bool,
  popperWrapperStyles: PT.object
};
export default Tooltip;