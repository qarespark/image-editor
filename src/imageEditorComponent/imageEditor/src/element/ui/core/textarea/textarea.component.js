import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { Background } from '../input/types';
import Styled from './textarea.styles';
var Textarea = intrinsicComponent(function (props, ref) {
  return React.createElement(Styled.Textarea, _extends({
    ref: ref
  }, props));
});
Textarea.defaultProps = {
  error: false,
  background: Background.Primary
};
export var propTypes = {
  error: PT.bool,
  value: PT.string,
  background: PT.oneOf(objectValues(Background))
};
Textarea.propTypes = propTypes;
export default Textarea;