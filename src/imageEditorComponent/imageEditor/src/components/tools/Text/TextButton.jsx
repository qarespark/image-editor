
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Text as TextIcon } from '../../../element/icons/text';
import { EditorContext } from '../../../../../../imageEditorComponent'
import ToolsBarItemButton from '../../../components/ToolsBar/ToolsBarItemButton';
import { TOOLS_IDS } from '../../../utils/constants';

const TextButton = ({ selectTool, isSelected, t }) => {
  const { setCurrentId } = useContext(EditorContext);
  const onClickTab = (e) => {
    setCurrentId(e)
    selectTool(e)
  }
  return (
    <ToolsBarItemButton
      className="FIE_text-tool-button"
      id={TOOLS_IDS.TEXT}
      label={t('textTool')}
      Icon={TextIcon}
      onClick={onClickTab}
      isSelected={isSelected}
    />
  )
};

TextButton.defaultProps = {
  isSelected: false,
};

TextButton.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default TextButton;
