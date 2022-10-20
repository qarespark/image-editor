import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import CloudWithShadow from '../../../icons/cloud-with-shadow';
import SpinnerIcon from '../../../icons/spinner';
import { intrinsicComponent } from '../../utils/functions';
import Styled from './loader.styles';
var Loader = intrinsicComponent(function (_ref, ref) {
  var rest = _extends({}, _ref);

  return React.createElement(Styled.Loader, _extends({}, rest, {
    ref: ref
  }), React.createElement(CloudWithShadow, {
    size: 83
  }), React.createElement(Styled.Spinner, null, React.createElement(SpinnerIcon, null)));
});
export default Loader;