
import React from 'react';
import PropTypes from 'prop-types';

import ToolsBarItemButton from '../../../components/ToolsBar/ToolsBarItemButton';
import { TOOLS_IDS } from '../../../utils/constants';
function BiImage(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" strokeWidth="2" d="M1,3 L23,3 L23,21 L1,21 L1,3 Z M6,9 C6.55228475,9 7,8.55228475 7,8 C7,7.44771525 6.55228475,7 6,7 C5.44771525,7 5,7.44771525 5,8 C5,8.55228475 5.44771525,9 6,9 Z M23,15 L18,9 L12,16 L9,13 L1,21"></path></svg>;
}
const ImageButton = ({ selectTool, isSelected, t }) => (
  <ToolsBarItemButton
    className="respark_image-tool-button"
    id={TOOLS_IDS.IMAGE}
    label={t('imageTool')}
    Icon={BiImage}
    onClick={selectTool}
    isSelected={isSelected}
  />
);

ImageButton.defaultProps = {
  isSelected: false,
};

ImageButton.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default ImageButton;
