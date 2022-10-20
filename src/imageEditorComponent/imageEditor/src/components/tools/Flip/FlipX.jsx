
import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';


import ToolsBarItemButton from '../../../components/ToolsBar/ToolsBarItemButton';
import { FLIP_DIRECTIONS, TOOLS_IDS } from '../../../utils/constants';
import { TOGGLE_FLIP } from '../../../actions';
import { useStore } from '../../../hooks';

function HiOutlineSwitchHorizontal(props) {
  return <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>;
}

const FlipX = ({ selectTool, isSelected, t }) => {
  const {
    dispatch,
    adjustments: { isFlippedX },
  } = useStore();

  const { reverseLabelOfCurrXFlipDir, reverseIconOfCurrXFlipDir } = useMemo(
    () => ({
      reverseLabelOfCurrXFlipDir: isFlippedX ? t('unFlipX') : t('flipX'),
      reverseIconOfCurrXFlipDir: () => (
        <HiOutlineSwitchHorizontal />
      ),
    }),
    [isFlippedX],
  );

  const toggleFlipX = useCallback(() => {
    dispatch({
      type: TOGGLE_FLIP,
      payload: {
        direction: FLIP_DIRECTIONS.X,
      },
    });
  }, []);

  const handleButtonClick = useCallback((flipXToolId) => {
    selectTool(flipXToolId);
    toggleFlipX();
  }, []);

  return (
    <ToolsBarItemButton
      className="respark_flip-x-tool-button"
      id={TOOLS_IDS.FLIP_X}
      label={reverseLabelOfCurrXFlipDir}
      Icon={reverseIconOfCurrXFlipDir}
      onClick={handleButtonClick}
      isSelected={isSelected}
    />
  );
};

FlipX.defaultProps = {
  isSelected: false,
};

FlipX.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default FlipX;
