import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _typeof from "@babel/runtime/helpers/typeof";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import Label from '../label';
import { propTypes as labelPropTypes } from '../label/label.component';
import Input from '../input';
import { propTypes as inputPropTypes } from '../input/input.component';
import Textarea from '../textarea';
import { propTypes as textareaPropTypes } from '../textarea/textarea.component';
import FormHint from '../form-hint';
import { Type } from './types';
import Styled from './input-group.styles';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var _excluded = ["children", "type", "error", "label", "hint", "LabelProps", "InputProps", "inputProps", "inputRef", "TextareaProps", "readOnly"];

var InputGroup = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    type = _ref.type,
    error = _ref.error,
    label = _ref.label,
    hint = _ref.hint,
    LabelPropsData = _ref.LabelProps,
    InputPropsData = _ref.InputProps,
    inputProps = _ref.inputProps,
    inputRef = _ref.inputRef,
    TextareaPropsData = _ref.TextareaProps,
    readOnly = _ref.readOnly,
    rest = _objectWithoutProperties(_ref, _excluded);

  var renderLabel = function renderLabel() {
    if (label) {
      if (typeof label === 'function') {
        return label({
          error: error
        });
      }

      if (_typeof(label) === 'object') {
        return label;
      }

      return React.createElement(Label, _extends({
        error: error
      }, LabelPropsData || {}), label);
    }

    return null;
  };

  var renderField = function renderField() {
    var fieldProps = _objectSpread({
      error: error
    }, rest);

    if (type === Type.Input) {
      return React.createElement(Input, _extends({}, fieldProps, InputPropsData || {}, inputProps, {
        ref: (inputRef === null || inputRef === void 0 ? void 0 : inputRef.ref) || inputRef,
        readOnly: readOnly
      }));
    }

    if (type === Type.Textarea) {
      return React.createElement(Textarea, _extends({}, fieldProps, TextareaPropsData || {}));
    }

    return null;
  };

  var renderHint = function renderHint() {
    if (hint) {
      if (typeof hint === 'function') {
        return hint({
          error: error
        });
      }

      if (_typeof(hint) === 'object') {
        return hint;
      }

      return React.createElement(FormHint, {
        error: error
      }, hint);
    }

    return null;
  };

  return React.createElement(Styled.InputGroup, {
    ref: ref
  }, renderLabel(), renderField(), renderHint());
});
InputGroup.defaultProps = {
  type: Type.Input,
  error: false,
  readOnly: false
};
InputGroup.propTypes = {
  type: PT.oneOf(objectValues(Type)),
  label: PT.node,
  hint: PT.node,
  error: PT.bool,
  // eslint-disable-next-line react/forbid-prop-types
  value: PT.any,
  LabelProps: PT.exact(labelPropTypes),
  InputProps: PT.exact(inputPropTypes),
  // eslint-disable-next-line react/forbid-prop-types
  inputProps: PT.object,
  inputRef: PT.oneOfType([PT.func, PT.object]),
  TextareaProps: PT.exact(textareaPropTypes),
  readOnly: PT.bool
};
export default InputGroup;