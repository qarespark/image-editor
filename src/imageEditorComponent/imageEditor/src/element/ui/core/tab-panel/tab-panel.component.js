import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Styled from './tab-panel.styles';
var _excluded = ["value", "index"];
var TabPanel = intrinsicComponent(function (_ref, ref) {
  var value = _ref.value,
    index = _ref.index,
    rest = _objectWithoutProperties(_ref, _excluded);

  if (value !== index) {
    return null;
  }

  return React.createElement(Styled.TabPanel, _extends({
    ref: ref
  }, rest));
});
TabPanel.propTypes = {
  value: PT.oneOfType([PT.string, PT.number]).isRequired,
  index: PT.oneOfType([PT.string, PT.number]).isRequired,
  children: PT.node
};
TabPanel.displayName = 'TabPanel';
export default TabPanel;