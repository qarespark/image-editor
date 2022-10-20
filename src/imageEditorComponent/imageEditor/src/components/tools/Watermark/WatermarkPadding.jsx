
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '../../../element/ui/core/menu';
import Label from '../../../element/ui/core/label';
import Padding from '../../../element/icons/padding';


import restrictNumber from '../../../utils/restrictNumber';
import {
  StyledSpacedOptionFields,
  StyledIconWrapper,
  StyledOptionPopupContent,
} from '../../../components/common/AnnotationOptions/AnnotationOptions.styled';
import Slider from '../../../components/common/Slider';

const WatermarkPadding = ({ watermark, saveWatermark, t }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openOptionPopup = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const closeOptionPopup = () => {
    setAnchorEl(null);
  };

  const updatePadding = (newPadding) => {
    saveWatermark({ padding: restrictNumber(newPadding, 0, 100) });
  };

  const currentPadding = watermark.padding;

  return (
    <>
      <StyledIconWrapper
        className="respark_watermark-padding-triggerer"
        title={t('padding')}
        onClick={openOptionPopup}
      >
        <Padding size={18} />
      </StyledIconWrapper>
      <Menu
        className="respark_watermark-padding-popup"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeOptionPopup}
        position="top"
      >
        <StyledOptionPopupContent>
          <StyledSpacedOptionFields>
            <Label>{t('padding')}</Label>
            <Slider
              annotation="px"
              onChange={updatePadding}
              value={currentPadding}
            />
          </StyledSpacedOptionFields>
        </StyledOptionPopupContent>
      </Menu>
    </>
  );
};

WatermarkPadding.propTypes = {
  watermark: PropTypes.instanceOf(Object).isRequired,
  saveWatermark: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default WatermarkPadding;
