
import React, { useState } from 'react';
import Menu from '../../element/ui/core/menu';
import MenuItem, { MenuItemLabel } from '../../element/ui/core/menu-item';


import { ZOOM_CANVAS } from '../../actions';
import { DEFAULT_ZOOM_FACTOR, TOOLS_IDS } from '../../utils/constants';
import { useStore } from '../../hooks';
import getZoomFitFactor from '../../utils/getZoomFitFactor';
import toPrecisedFloat from '../../utils/toPrecisedFloat';
import { StyledSmallButton, StyledZoomPercentageLabel } from './Topbar.styled';
import { ZOOM_FACTORS_PRESETS } from './Topbar.constants';

const MULTIPLY_ZOOM_FACTOR = 1.1;

const CanvasZooming = () => {
  const {
    dispatch,
    zoom = {},
    toolId,
    feedback,
    t,
    shownImageDimensions,
    resize,
    originalImage,
    adjustments: { crop },
    config: { useZoomPresetsMenu },
  } = useStore();
  const isBlockerError = feedback.duration === 0;
  const [zoomingMenuAnchorEl, setZoomingMenuAnchorEl] = useState(null);
  const saveZoom = (zoomFactor) => {
    dispatch({
      type: ZOOM_CANVAS,
      payload: {
        factor: zoomFactor,
      },
    });
  };

  const zoomIn = () => {
    saveZoom(zoom.factor * MULTIPLY_ZOOM_FACTOR);
  };

  const fitCanvas = () => {
    const usedAsOrgDimens =
      (resize.width && resize.height && resize) ||
      (crop.width && crop.height && crop) ||
      shownImageDimensions;
    const fitCanvasFactor = getZoomFitFactor(
      (crop.width && crop.height && crop) || shownImageDimensions,
      usedAsOrgDimens,
    );
    saveZoom(fitCanvasFactor || DEFAULT_ZOOM_FACTOR);
  };

  const zoomOut = () => {
    saveZoom(zoom.factor / MULTIPLY_ZOOM_FACTOR);
  };

  const toggleZoomingMenu = (event) => {
    setZoomingMenuAnchorEl(zoomingMenuAnchorEl ? null : event.target);
  };

  const applyZoomFactorPreset = (factor) => {
    if (factor === 'fit') {
      fitCanvas();
      toggleZoomingMenu();
      return;
    }
    const helperFactorToAchieveSelected = Math.min(
      (factor * originalImage.width) / shownImageDimensions.width,
      (factor * originalImage.height) / shownImageDimensions.height,
    );
    saveZoom(helperFactorToAchieveSelected);
    toggleZoomingMenu();
  };

  const isZoomDisabled = toolId === TOOLS_IDS.CROP || isBlockerError;
  const previewToRealImgFactor =
    originalImage && !resize.width && !resize.height
      ? Math.min(
        (shownImageDimensions.width * zoom.factor) / originalImage.width,
        (shownImageDimensions.height * zoom.factor) / originalImage.height,
      )
      : zoom.factor;

  function BiZoomIn(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><path d="M11 6L9 6 9 9 6 9 6 11 9 11 9 14 11 14 11 11 14 11 14 9 11 9z" /><path d="M10,2c-4.411,0-8,3.589-8,8s3.589,8,8,8c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396 C17.365,13.543,18,11.846,18,10C18,5.589,14.411,2,10,2z M10,16c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S13.309,16,10,16z" /></svg>;
  }

  function BiZoomOut(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><path d="M6 9H14V11H6z" /><path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" /></svg>;
  }

  return (
    <>
      <StyledSmallButton
        onClick={zoomOut}
        color="link"
        title={t('zoomOutTitle')}
        disabled={isZoomDisabled}
        className="respark_topbar-zoom-out-btn"
      >
        <BiZoomOut />
      </StyledSmallButton>
      <StyledZoomPercentageLabel
        title={t('toggleZoomMenuTitle')}
        onClick={
          isZoomDisabled
            ? undefined
            : (useZoomPresetsMenu && toggleZoomingMenu) || fitCanvas
        }
        aria-disabled={isZoomDisabled}
        className="respark_topbar-zoom-label"
      >
        {`${toPrecisedFloat(previewToRealImgFactor * 100, 0)}%`}
      </StyledZoomPercentageLabel>
      <StyledSmallButton
        onClick={zoomIn}
        color="link"
        title={t('zoomInTitle')}
        disabled={isZoomDisabled}
        className="respark_topbar-zoom-in-btn"
      >
        <BiZoomIn />
      </StyledSmallButton>
      <Menu
        anchorEl={zoomingMenuAnchorEl}
        onClose={toggleZoomingMenu}
        open={Boolean(zoomingMenuAnchorEl)}
        position="bottom"
        className="respark_topbar-zoom-menu"
      >
        {ZOOM_FACTORS_PRESETS.map(({ factor, labelKey, label }) => (
          <MenuItem
            key={label || labelKey}
            onClick={() => applyZoomFactorPreset(factor)}
          >
            <MenuItemLabel>{label ?? t(labelKey)}</MenuItemLabel>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CanvasZooming;
