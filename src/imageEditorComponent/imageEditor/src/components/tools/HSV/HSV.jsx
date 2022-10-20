
import React from 'react';
import PropTypes from 'prop-types';
import { Saturation as SaturationIcon } from '../../../element/icons/saturation';


import ToolsBarItemButton from '../../../components/ToolsBar/ToolsBarItemButton';
import { TOOLS_IDS } from '../../../utils/constants';

const HSV = ({ selectTool, isSelected, t }) => (
  <ToolsBarItemButton
    className="respark_hsv-tool-button"
    id={TOOLS_IDS.HSV}
    label={t('hsvTool')}
    Icon={SaturationIcon}
    onClick={selectTool}
    isSelected={isSelected}
  />
);

HSV.defaultProps = {
  isSelected: false,
};

HSV.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default HSV;
