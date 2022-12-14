/* eslint-disable import/no-unresolved */
import React, { useMemo } from 'react';
import PT from 'prop-types';
import Tick from '../../../icons/tick';
import { intrinsicComponent } from '../../utils/functions';
import Styled from './color-picker.styles';
var ColorItem = intrinsicComponent(function (_ref, ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    checked = _ref.checked,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size;
  var checkIconColor = useMemo(function () {
    if (value === '#ffffff' || value === 'rgba(0,0,0,0)') {
      return 'black';
    }

    return 'white';
  }, [value]);
  return React.createElement(Styled.ColorItemWrapper, {
    ref: ref,
    color: value,
    size: size,
    stroke: value === 'rgba(0,0,0,0)' ? '#a8a8a8' : '#E9EEF2',
    value: value
  }, React.createElement("input", {
    type: "radio",
    value: value,
    checked: checked,
    onChange: onChange
  }), checked && React.createElement(Tick, {
    color: checkIconColor
  }));
});
ColorItem.defaultProps = {};
ColorItem.propTypes = {
  value: PT.string.isRequired,
  checked: PT.bool,
  onChange: PT.func.isRequired,
  size: PT.number
};
export default ColorItem;