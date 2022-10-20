
import React from 'react';


import { TOGGLE_ORIGINAL_IMAGE_DISPLAY } from '../../actions';
import { useStore } from '../../hooks';
import getProperDimensions from '../../utils/getProperDimensions';
import { StyledSmallButton, StyledDimensionsLabel, StyledFlexCenterAlignedContainer } from './Topbar.styled';
function CgEditFlipH(props) {
  return <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><path d="M18 7C18.5523 7 19 7.44772 19 8V16C19 16.5523 18.5523 17 18 17H15V19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H15V7H18Z" fill="currentColor" fillOpacity={0.5} /><path d="M13 3H11V21H13V3Z" fill="currentColor" /><path d="M5 8C5 7.44772 5.44772 7 6 7H9V5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19H9V17H6C5.44772 17 5 16.5523 5 16V8Z" fill="currentColor" /></svg>;
}

const ImageDimensionsAndDisplayToggle = () => {
  const {
    dispatch,
    isResetted = true,
    originalImage,
    resize = {},
    adjustments: { crop, rotation = 0 },
    shownImageDimensions,
    t,
  } = useStore();

  const hideOriginalImage = () => {
    dispatch({
      type: TOGGLE_ORIGINAL_IMAGE_DISPLAY,
      payload: {
        isShow: false,
      },
    });

    document.removeEventListener('mouseup', hideOriginalImage);
    document.removeEventListener('mouseleave', hideOriginalImage);
    document.removeEventListener('touchcancel', hideOriginalImage);
    document.removeEventListener('touchend', hideOriginalImage);
  };

  const showOriginalImage = () => {
    dispatch({
      type: TOGGLE_ORIGINAL_IMAGE_DISPLAY,
      payload: {
        isShow: true,
      },
    });

    document.addEventListener('mouseup', hideOriginalImage);
    document.addEventListener('mouseleave', hideOriginalImage);
    document.addEventListener('touchcancel', hideOriginalImage);
    document.addEventListener('touchend', hideOriginalImage);
  };

  if (!originalImage) {
    return null;
  }

  const dimensions = getProperDimensions(
    resize,
    crop,
    shownImageDimensions,
    originalImage,
    rotation,
  );
  // respark_topbar-center-options diff-toggle
  return (
    <>
      {/* <StyledFlexCenterAlignedContainer className="respark_topbar-center-options dimensions">
        <StyledDimensionsLabel title={t('imageDimensionsHoverTitle')}>
          {`${dimensions.width} x ${dimensions.height} px`}
        </StyledDimensionsLabel>
      </StyledFlexCenterAlignedContainer> */}

      <StyledFlexCenterAlignedContainer className="respark_topbar-center-options diff-toggle">
        <StyledSmallButton
          color="link"
          horizontalMargin="8px"
          onMouseDown={isResetted ? undefined : showOriginalImage}
          onTouchStart={isResetted ? undefined : showOriginalImage}
          disabled={isResetted}
          title={t('showImageTitle')}
        >
          <CgEditFlipH />
        </StyledSmallButton>
      </StyledFlexCenterAlignedContainer>


    </>
  );
};

export default ImageDimensionsAndDisplayToggle;
