import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Styled from './form-hint.styles';
var FormHint = intrinsicComponent(function (props, ref) {
  return React.createElement(Styled.FormHint, _extends({
    ref: ref
  }, props));
});
FormHint.defaultProps = {
  error: false
};
FormHint.propTypes = {
  error: PT.bool
};
export default FormHint;