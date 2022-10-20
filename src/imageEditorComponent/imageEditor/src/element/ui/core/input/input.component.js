import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

/* ___*/
import React, { useRef, useEffect } from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { Size, Background } from './types';
import Styled from './input.styles';
var _excluded = ["children", "iconStart", "iconEnd", "iconClickStart", "iconClickEnd", "size", "className", "style", "fullWidth", "readOnly", "background", "focusOnMount", "focusOnClick"];

var getIconSize = function getIconSize(sizeName) {
  switch (sizeName) {
    case Size.Md:
      return 16;

    case Size.Sm:
    default:
      return 14;
  }
};

var Input = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    iconStart = _ref.iconStart,
    iconEnd = _ref.iconEnd,
    iconClickStart = _ref.iconClickStart,
    iconClickEnd = _ref.iconClickEnd,
    size = _ref.size,
    className = _ref.className,
    style = _ref.style,
    fullWidth = _ref.fullWidth,
    readOnly = _ref.readOnly,
    _ref$background = _ref.background,
    background = _ref$background === void 0 ? 'primary' : _ref$background,
    _ref$focusOnMount = _ref.focusOnMount,
    focusOnMount = _ref$focusOnMount === void 0 ? false : _ref$focusOnMount,
    _ref$focusOnClick = _ref.focusOnClick,
    focusOnClick = _ref$focusOnClick === void 0 ? true : _ref$focusOnClick,
    rest = _objectWithoutProperties(_ref, _excluded);

  var inputRef = useRef(null);

  var handleFocus = function handleFocus() {
    var _inputRef$current;

    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
  };

  useEffect(function () {
    if (focusOnMount) {
      handleFocus();
    }
  }, []);

  var handleIconClick = function handleIconClick(type) {
    if (focusOnClick) {
      handleFocus();
    }

    if (type === 'start') {
      if (iconClickStart) {
        iconClickStart();
      }
    } else if (iconClickEnd) {
      iconClickEnd();
    }
  };

  var renderIcon = function renderIcon(_icon, type) {
    return _icon ? React.createElement(Styled.Icon, {
      onClick: function onClick() {
        return handleIconClick(type);
      },
      iconClickStart: iconClickStart,
      iconClickEnd: iconClickEnd
    }, typeof _icon === 'function' ? _icon({
      size: getIconSize(size)
    }) : _icon) : undefined;
  };

  return React.createElement(Styled.Input, {
    onClick: focusOnClick ? handleFocus : undefined,
    ref: ref,
    size: size,
    className: className,
    style: style,
    fullWidth: Boolean(fullWidth),
    background: background
  }, renderIcon(iconStart, 'start'), React.createElement(Styled.Base, _extends({}, rest, {
    ref: inputRef,
    readOnly: Boolean(readOnly)
  })), renderIcon(iconEnd, 'end'), children && React.createElement(React.Fragment, null, children));
});
export var defaultProps = {
  size: Size.Md,
  background: Background.Primary,
  error: false,
  fullWidth: false,
  readOnly: false
};
Input.defaultProps = defaultProps;
export var propTypes = {
  size: PT.oneOf(objectValues(Size)),
  iconStart: PT.oneOfType([PT.node, PT.func]),
  iconEnd: PT.oneOfType([PT.node, PT.func]),
  error: PT.bool,
  fullWidth: PT.bool,
  // eslint-disable-next-line react/forbid-prop-types
  value: PT.any,
  readOnly: PT.bool,
  iconClickStart: PT.func,
  iconClickEnd: PT.func,
  background: PT.oneOf(objectValues(Background)),
  focusOnMount: PT.bool,
  focusOnClick: PT.bool
};
Input.propTypes = propTypes;
export default Input;