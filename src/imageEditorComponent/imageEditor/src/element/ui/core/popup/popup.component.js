import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PT from 'prop-types';
import { intrinsicComponent, objectValues, generateClassNames } from '../../utils/functions';
import usePortal from '../../hooks/use-portal';
import PopupContent, { defaultProps as cDefaultProps, propTypes as cPropTypes } from '../popup-content/popup-content.component';
import { Horizontal, Vertical } from './types';
import Styled from './popup.styles';
var _excluded = ["autoHideDuration", "anchorOrigin", "open", "onClose"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Popup = intrinsicComponent(function (props, ref) {
  var autoHideDuration = props.autoHideDuration,
    anchorOrigin = props.anchorOrigin,
    open = props.open,
    onClose = props.onClose,
    rest = _objectWithoutProperties(props, _excluded);

  var target = usePortal(generateClassNames('Popup'));
  useEffect(function () {
    var timeout = null;

    if (open && autoHideDuration && typeof onClose === 'function') {
      timeout = setTimeout(onClose, autoHideDuration);
    }

    return function () {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [autoHideDuration, open, onClose]);

  var render = function render() {
    if (!open) {
      return null;
    }

    return React.createElement(Styled.Popup, props, React.createElement(PopupContent, _extends({}, rest, {
      ref: ref
    })));
  };

  return createPortal(render(), target);
});
Popup.defaultProps = _objectSpread(_objectSpread({}, cDefaultProps), {}, {
  open: false,
  anchorOrigin: {
    vertical: Vertical.Bottom,
    horizontal: Horizontal.Left
  }
});
Popup.propTypes = _objectSpread(_objectSpread({}, cPropTypes), {}, {
  anchorOrigin: PT.exact({
    vertical: PT.oneOf(objectValues(Vertical)),
    horizontal: PT.oneOf(objectValues(Horizontal))
  }),
  open: PT.bool,
  autoHideDuration: PT.number,
  onClose: PT.func
});
export default Popup;