import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { iconPropTypes } from '../../../icons/icon.prop-types';
import ArrowIcon from '../../../icons/arrow';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { Position } from '../../utils/types';
import Styled from './arrow.styles';
var _excluded = ["IconProps"];
var Arrow = intrinsicComponent(function (_ref, ref) {
  var IconPropsData = _ref.IconProps,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.Arrow, _extends({}, rest, {
    ref: ref
  }), React.createElement(ArrowIcon, IconPropsData));
});
Arrow.defaultProps = {
  type: Position.Right
};
Arrow.propTypes = {
  type: PT.oneOf(objectValues(Position)),
  IconProps: PT.exact(iconPropTypes)
};
export default Arrow;