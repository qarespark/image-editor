import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import ArrowTickIcon from '../../../icons/arrow-tick';
import { iconPropTypes } from '../../../icons/icon.prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { Position } from '../../utils/types';
import Styled from './arrow-tick.styles';
var _excluded = ["IconProps"];
var ArrowTick = intrinsicComponent(function (_ref, ref) {
  var IconPropsData = _ref.IconProps,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.ArrowTick, _extends({}, rest, {
    ref: ref
  }), React.createElement(ArrowTickIcon, IconPropsData));
});
ArrowTick.defaultProps = {
  type: Position.Right
};
ArrowTick.propTypes = {
  type: PT.oneOf(objectValues(Position)),
  IconProps: PT.exact(iconPropTypes)
};
export default ArrowTick;