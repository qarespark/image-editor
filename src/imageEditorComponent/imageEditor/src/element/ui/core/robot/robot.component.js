import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { Status } from './types';
import Styled from './robot.styles';

var _excluded = ["status"];

var getRobotIcon = function getRobotIcon(status) {
  switch (status) {
    case Status.Worried:
      return <div className="notification-icon">😟</div>;

    case Status.Sad:
      return <div className="notification-icon">😩</div>;

    case Status.Neutral:
      return <div className="notification-icon">😊</div>;

    case Status.Happy:
    default:
      return <div className="notification-icon">🥰</div>;
  }
};

var Robot = intrinsicComponent(function (_ref, ref) {
  var status = _ref.status,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.Robot, _extends({}, rest, {
    ref: ref
  }), getRobotIcon(status));
});
export var defaultProps = {
  status: Status.Happy
};
Robot.defaultProps = defaultProps;
export var propTypes = {
  status: PT.oneOf(objectValues(Status))
};
Robot.propTypes = propTypes;
export default Robot;