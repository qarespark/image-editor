import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

import React from 'react';
import SearchIcon from '../../../icons/search';
import { intrinsicComponent } from '../../utils/functions';
import Input from '../input';
import { defaultProps as inputDefaultProps, propTypes as inputPropTypes } from '../input/input.component';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Search = intrinsicComponent(function (props, ref) {
  return React.createElement(Input, _extends({
    ref: ref
  }, props, {
    iconStart: function iconStart(iconProps) {
      return React.createElement(SearchIcon, iconProps);
    }
  }));
});
Search.defaultProps = _objectSpread({}, inputDefaultProps);

var iconStart = inputPropTypes.iconStart,
  restInputPropTypes = _objectWithoutProperties(inputPropTypes, ["iconStart"]);

Search.propTypes = restInputPropTypes;
export default Search;