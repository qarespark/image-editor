
import React from 'react';
import PropTypes from 'prop-types';


import ToolsBarItemButton from '../../../components/ToolsBar/ToolsBarItemButton';
import { TOOLS_IDS } from '../../../utils/constants';
function RiPencilLine(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><g><path fill="none" d="M0 0h24v24H0z" /><path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" /></g></svg>;
}
const PenButton = ({ selectTool, isSelected, t }) => (
  <ToolsBarItemButton
    className="respark_pen-tool-button"
    id={TOOLS_IDS.PEN}
    label={t('penTool')}
    Icon={RiPencilLine}
    onClick={selectTool}
    isSelected={isSelected}
  />
);

PenButton.defaultProps = {
  isSelected: false,
};

PenButton.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default PenButton;
