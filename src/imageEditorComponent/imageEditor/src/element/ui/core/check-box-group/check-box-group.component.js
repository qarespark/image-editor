import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import CheckBox from '../check-box';
import Styled from './check-box-group.styles';
import { LabelPosition } from './types';
var _excluded = ["label", "checkBoxProps", "readOnly", "disabled", "labelPosition"];
var CheckBoxGroup = intrinsicComponent(function (_ref, ref) {
  var label = _ref.label,
    checkBoxProps = _ref.checkBoxProps,
    readOnly = _ref.readOnly,
    disabled = _ref.disabled,
    labelPosition = _ref.labelPosition,
    rest = _objectWithoutProperties(_ref, _excluded);

  var content = [React.createElement(CheckBox, _extends({
    key: "checkbox",
    checkBoxProps: checkBoxProps,
    disabled: disabled,
    readOnly: readOnly
  }, rest))];
  var labelContent = React.createElement(Styled.Label, {
    key: "label",
    disabled: Boolean(disabled),
    labelPosition: labelPosition
  }, label);

  if (labelPosition === 'before') {
    content.unshift(labelContent);
  } else {
    content.push(labelContent);
  }

  return React.createElement(Styled.CheckBoxGroup, {
    ref: ref
  }, content);
});
CheckBoxGroup.defaultProps = {
  checked: false,
  labelPosition: LabelPosition.After
};
CheckBoxGroup.propTypes = {
  label: PT.string,
  checked: PT.bool,
  onChange: PT.func,
  // eslint-disable-next-line react/forbid-prop-types
  checkBoxProps: PT.object,
  readOnly: PT.bool,
  disabled: PT.bool,
  labelPosition: PT.oneOf(objectValues(LabelPosition))
};
export default CheckBoxGroup;