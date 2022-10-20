import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { BadgeColor } from '../../utils/types';
import Styled from './badge.styles';
var _excluded = ["badgeContent"];
var Badge = intrinsicComponent(function (_ref, ref) {
  var badgeContent = _ref.badgeContent,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.BadgeRoot, {
    ref: ref
  }, React.createElement(Styled.Badge, rest, badgeContent));
});
Badge.defaultProps = {
  color: BadgeColor.Secondary,
  inline: false
};
Badge.propTypes = {
  color: PT.oneOf(objectValues(BadgeColor)),
  badgeContent: PT.node,
  size: PT.oneOfType([PT.number]),
  fontSize: PT.oneOfType([PT.number, PT.string]),
  padding: PT.oneOfType([PT.number, PT.string]),
  inline: PT.bool
};
export default Badge;