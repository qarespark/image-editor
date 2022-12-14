import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

import React from 'react';
import PT from 'prop-types';
import StarIcon from '../../../icons/star';
import { intrinsicComponent } from '../../utils/functions';
import Styled from './rating.styles';
var _excluded = ["value", "readOnly", "name", "onChange"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var RatingIcon = function RatingIcon(_ref) {
  var active = _ref.active;
  return React.createElement(Styled.Icon, {
    active: active
  }, React.createElement(StarIcon, null));
};

var RatingItem = function RatingItem(_ref2) {
  var name = _ref2.name,
    active = _ref2.active,
    mark = _ref2.mark,
    onChange = _ref2.onChange;
  return React.createElement(Styled.Item, null, React.createElement(RatingIcon, {
    active: active
  }), React.createElement("input", {
    type: "radio",
    name: name,
    value: mark,
    onChange: onChange
  }));
};

var RatingItemReadOnly = function RatingItemReadOnly(_ref3) {
  var active = _ref3.active;
  return React.createElement(Styled.Item, {
    readOnly: true
  }, React.createElement(RatingIcon, {
    active: active
  }));
};

var Rating = intrinsicComponent(function (_ref4, ref) {
  var value = _ref4.value,
    readOnly = _ref4.readOnly,
    name = _ref4.name,
    onChange = _ref4.onChange,
    rest = _objectWithoutProperties(_ref4, _excluded);

  var valueRounded = Math.min(value || 0, 5);
  return React.createElement(Styled.Rating, {
    ref: ref
  }, [1, 2, 3, 4, 5].map(function (mark) {
    var itemProps = _objectSpread({
      key: mark,
      mark: mark,
      active: mark <= valueRounded,
      value: valueRounded
    }, rest);

    return readOnly ? React.createElement(RatingItemReadOnly, itemProps) : React.createElement(RatingItem, _extends({}, itemProps, {
      name: name || 'raiting-field',
      onChange: onChange
    }));
  }));
});
Rating.defaultProps = {
  value: 0,
  readOnly: false
};
Rating.propTypes = {
  value: PT.number.isRequired,
  name: PT.string,
  readOnly: PT.bool
};
export default Rating;