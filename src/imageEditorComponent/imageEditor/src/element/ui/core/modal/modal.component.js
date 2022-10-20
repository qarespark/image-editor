import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

import React, { useEffect, isValidElement } from 'react';
import { createPortal } from 'react-dom';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { Size } from './types';
import ModalMenuContext from './modal-menu-context';
import Styled from './modal.styles';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var _excluded = ["children", "open", "onClose", "maxWidth", "fullWidth"];

var isValidSingleFragmentChildren = function isValidSingleFragmentChildren(children) {
  return children && isValidElement(children) && React.Children.count(children) === 1 && children.type === React.Fragment;
};

var Modal = intrinsicComponent(function (_ref, ref) {
  var _children = _ref.children,
    open = _ref.open,
    onClose = _ref.onClose,
    maxWidth = _ref.maxWidth,
    fullWidth = _ref.fullWidth,
    rest = _objectWithoutProperties(_ref, _excluded);

  var children = isValidSingleFragmentChildren(_children) ? _children.props.children : _children; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

  var target = document.querySelector('body');
  useEffect(function () {
    if (open) {
      document.body.classList.add('Modal-open');
    } else {
      document.body.classList.remove('Modal-open');
    }

    return function () {
      document.body.classList.remove('Modal-open');
    };
  }, [open]);

  var handleClose = function handleClose() {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  useEffect(function () {
    var keyListener = function keyListener(ev) {
      if (ev.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', keyListener);
    return function () {
      return document.removeEventListener('keydown', keyListener);
    };
  });

  var render = function render() {
    return React.createElement(ModalMenuContext.Provider, {
      value: {
        modalOpened: Boolean(open)
      }
    }, React.createElement(Styled.Wrapper, {
      open: Boolean(open),
      ref: ref
    }, React.createElement(Styled.Overlay, {
      onClick: handleClose,
      open: Boolean(open)
    }), React.createElement(Styled.Container, _extends({}, rest, {
      maxWidth: maxWidth,
      fullWidth: fullWidth,
      open: Boolean(open)
    }), React.createElement(Styled.Modal, null, React.Children.map(children, function (child) {
      if (isValidElement(child) && child.type.displayName === 'ModalTitle') {
        return React.cloneElement(child, _objectSpread({
          onClose: handleClose
        }, child.props || {}));
      }

      return child;
    })))));
  };

  return createPortal(render(), target);
});
export var defaultProps = {
  open: false,
  fullWidth: false,
  maxWidth: Size.Xs
};
Modal.defaultProps = defaultProps;
export var propTypes = {
  onClose: PT.func.isRequired,
  children: PT.node.isRequired,
  maxWidth: PT.oneOf(objectValues(Size)),
  open: PT.bool,
  fullWidth: PT.bool
};
Modal.propTypes = propTypes;
export default Modal;