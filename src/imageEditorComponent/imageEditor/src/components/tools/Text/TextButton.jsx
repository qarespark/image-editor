
import React from 'react';
import PropTypes from 'prop-types';
import { Text as TextIcon } from '../../../element/icons/text';


import ToolsBarItemButton from '../../../components/ToolsBar/ToolsBarItemButton';
import { TOOLS_IDS } from '../../../utils/constants';

const TextButton = ({ selectTool, isSelected, t }) => (
  <></>
);

TextButton.defaultProps = {
  isSelected: false,
};

TextButton.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default TextButton;
