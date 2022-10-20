import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

import React, { useState } from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import Button from '../button';
import IStyled from '../input/input.styles';
import Styled from './upload-input.styles';
import { ButtonColor } from '../../utils/types';
import { defaultProps as inputDefaultProps, propTypes as inputPropTypes } from '../input/input.component';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var _excluded = ["error", "size", "buttonLabel", "buttonColor", "placeholder", "onChange"];
var UploadInput = intrinsicComponent(function (_ref, ref) {
  var error = _ref.error,
    size = _ref.size,
    buttonLabel = _ref.buttonLabel,
    buttonColor = _ref.buttonColor,
    placeholder = _ref.placeholder,
    _onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    valueState = _useState2[0],
    setValueState = _useState2[1];

  return React.createElement(Styled.UploadInput, {
    ref: ref
  }, React.createElement(IStyled.Input, {
    error: error,
    size: size,
    onClick: function onClick(_ref2) {
      var currentTarget = _ref2.currentTarget;
      var fileInputElem = currentTarget.querySelector('input[type=file]');

      if (fileInputElem) {
        fileInputElem.click();
      }
    }
  }, React.createElement(Button, {
    color: buttonColor
  }, buttonLabel), React.createElement(IStyled.Base, {
    placeholder: placeholder,
    readOnly: true,
    value: valueState
  }), React.createElement(Styled.FileInput, _extends({}, rest, {
    type: "file",
    onChange: function onChange(event) {
      var files = event.target.files;

      if (files) {
        if (files.length === 0) {
          setValueState('');
        } else if (files.length === 1) {
          setValueState(files[0].name);
        } else if (files.length > 1) {
          setValueState("".concat(files.length, " files"));
        } else {
          setValueState(event.target.value);
        }
      }

      if (typeof _onChange === 'function') {
        _onChange(event);
      }
    }
  }))));
});
UploadInput.defaultProps = _objectSpread(_objectSpread({}, inputDefaultProps), {}, {
  buttonLabel: 'Choose file',
  placeholder: 'No file chosen',
  buttonColor: 'primary'
});

var iconStart = inputPropTypes.iconStart,
  iconEnd = inputPropTypes.iconEnd,
  restInputPropTypes = _objectWithoutProperties(inputPropTypes, ["iconStart", "iconEnd"]);

UploadInput.propTypes = _objectSpread(_objectSpread({}, restInputPropTypes), {}, {
  buttonLabel: PT.string,
  placeholder: PT.string,
  buttonColor: PT.oneOf(objectValues(ButtonColor))
});
export default UploadInput;