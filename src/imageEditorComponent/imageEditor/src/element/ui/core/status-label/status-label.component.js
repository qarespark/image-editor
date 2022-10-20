import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { Size, Type } from './types';
import Styled from './status-label.styles';
var _excluded = ["label", "type", "size"];
var StatusLabel = intrinsicComponent(function (_ref, ref) {
  var label = _ref.label,
    type = _ref.type,
    size = _ref.size,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.StatusLabelWrapper, _extends({
    ref: ref,
    size: size,
    type: type,
    label: label
  }, rest), React.createElement(Styled.StatusLabel, null, label));
});
StatusLabel.defaultProps = {
  label: '',
  type: Type.Default,
  size: Size.Md
};
StatusLabel.propTypes = {
  label: PT.string.isRequired,
  type: PT.oneOf(objectValues(Type)),
  size: PT.oneOf(objectValues(Size))
};
export default StatusLabel;