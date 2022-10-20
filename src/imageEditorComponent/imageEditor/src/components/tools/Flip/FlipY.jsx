
import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';


import ToolsBarItemButton from '../../../components/ToolsBar/ToolsBarItemButton';
import { FLIP_DIRECTIONS, TOOLS_IDS } from '../../../utils/constants';
import { TOGGLE_FLIP } from '../../../actions';
import { useStore } from '../../../hooks';

function HiOutlineSwitchVertical(props) {
  return <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>;
}

const FlipY = ({ selectTool, isSelected, t }) => {
  const {
    dispatch,
    adjustments: { isFlippedY },
  } = useStore();

  const { reverseLabelOfCurrXFlipDir, reverseIconOfCurrXFlipDir } = useMemo(
    () => ({
      reverseLabelOfCurrXFlipDir: isFlippedY ? t('unFlipY') : t('flipY'),
      reverseIconOfCurrXFlipDir: () => (
        <HiOutlineSwitchVertical />
      ),
    }),
    [isFlippedY],
  );

  const toggleFlipY = useCallback(() => {
    dispatch({
      type: TOGGLE_FLIP,
      payload: {
        direction: FLIP_DIRECTIONS.Y,
      },
    });
  }, []);

  const handleButtonClick = useCallback((flipYToolId) => {
    selectTool(flipYToolId);
    toggleFlipY();
  }, []);

  return (
    <ToolsBarItemButton
      className="respark_flip-y-tool-button"
      id={TOOLS_IDS.FLIP_Y}
      label={reverseLabelOfCurrXFlipDir}
      Icon={reverseIconOfCurrXFlipDir}
      onClick={handleButtonClick}
      isSelected={isSelected}
    />
  );
};

FlipY.defaultProps = {
  isSelected: false,
};

FlipY.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default FlipY;
