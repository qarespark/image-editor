
import React, { useState } from 'react';
import PropTypes from 'prop-types';


import { useStore } from '../../../hooks';
import ToolsBarItemButton from '../../../components/ToolsBar/ToolsBarItemButton';
import { TOOLS_IDS } from '../../../utils/constants';
import { StyledToolsBarItemButtonLabel } from '../../../components/ToolsBar/ToolsBar.styled';
import CropPresetsOption from './CropPresetsOption';

function BiCrop(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><path d="M19,7c0-1.103-0.897-2-2-2H7V2H5v3H2v2h3h2h10v15h2v-3h3v-2h-3V7z" /><path d="M5,9v8c0,1.103,0.897,2,2,2h8v-2H7V9H5z" /></svg>;
}

const Crop = ({ selectTool, isSelected }) => {
  const { config, t } = useStore();
  const [anchorEl, setAnchorEl] = useState();

  const selectToolAndShowPresets = (toolId, e) => {
    selectTool(toolId);
    setAnchorEl(e.currentTarget);
  };

  const closeCropPresets = () => {
    setAnchorEl(null);
  };

  return (
    <ToolsBarItemButton
      className="respark_crop-tool"
      id={TOOLS_IDS.CROP}
      Icon={BiCrop}
      onClick={selectToolAndShowPresets}
      isSelected={isSelected}
    >
      {!config[TOOLS_IDS.CROP].noPresets ? (
        <CropPresetsOption anchorEl={anchorEl} onClose={closeCropPresets} />
      ) : (
        <StyledToolsBarItemButtonLabel className="respark_crop-tool-label">
          {t('cropTool')}
        </StyledToolsBarItemButtonLabel>
      )}
    </ToolsBarItemButton>
  );
};

Crop.defaultProps = {
  isSelected: false,
};

Crop.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

export default Crop;
