
import React, { useCallback, memo, useState } from 'react';
import PropTypes from 'prop-types';


import { StyledTabItem, StyledTabItemLabel } from './Tabs.styled';
import { TABS } from '../..';

const TabItem = ({ id, label, Icon, isSelected, onClick }) => {
  const [showGuide, setShowGuide] = useState(true);
  setTimeout(() => {
    setShowGuide(false)
  }, 120000);//disable tabs hints after 2min
  const handleClick = useCallback(() => {
    if (typeof onClick === 'function') {
      onClick(id);
    }
  }, [id]);


  return (
    <StyledTabItem
      className="respark_tab"
      aria-selected={isSelected}
      onClick={handleClick}
    >
      <Icon />
      {label && (
        <StyledTabItemLabel className="respark_tab-label">
          {label}
        </StyledTabItemLabel>
      )}
      {showGuide && <>
        {label == 'Adjust' && <div className="info"><div>Crop, rotate, flip image </div></div>}
        {label == 'Draw' && <div className="info"><div>Add text, image, shapes or draw using pen, change font size and style</div></div>}
        {label == 'Filters' && <div className="info"><div>Filter your background image</div></div>}
        {label == 'Finetune' && <div className="info"><div>Mange briteness, contrast, HSV, blur, warmth</div></div>}
        {label == 'Watermark' && <div className="info"><div>Add watermark to image</div></div>}
        {label == 'Resize' && <div className="info"><div>Resize in your dimensions</div></div>}
      </>}
    </StyledTabItem>
  );
};

TabItem.defaultProps = {
  isSelected: false,
  onClick: undefined,
  label: undefined,
};

TabItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  Icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.instanceOf(Object),
  ]).isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default memo(TabItem);
