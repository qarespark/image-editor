import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Styled from './accordion-details.styles';
var _excluded = ["expanded", "children"];
var AccordionDetails = intrinsicComponent(function (_ref, ref) {
  var expanded = _ref.expanded,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(React.Fragment, null, expanded && React.createElement(Styled.AccordionDetails, _extends({
    ref: ref
  }, rest), children));
});
AccordionDetails.defaultProps = {
  expanded: false
};
AccordionDetails.propTypes = {
  expanded: PT.bool
};
export default AccordionDetails;