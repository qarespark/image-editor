
import React from 'react';


import Separator from '../../components/common/Separator';
import { usePhoneScreen, useStore } from '../../hooks';
import CloseButton from './CloseButton';
import SaveButton from './SaveButton';
import ResetButton from './ResetButton';
import UndoButton from './UndoButton';
import RedoButton from './RedoButton';
import ImageDimensionsAndDisplayToggle from './ImageDimensionsAndDisplayToggle';
import CanvasZooming from './CanvasZooming';
import {
  StyledTopbar,
  StyledFlexCenterAlignedContainer,
  StyledHistoryButtonsWrapper,
} from './Topbar.styled';
import BackButton from './BackButton';

const Topbar = () => {
  const {
    config: { showBackButton, disableZooming },
  } = useStore();

  return (
    <StyledTopbar reverseDirection={showBackButton} className="respark_topbar">
      <StyledFlexCenterAlignedContainer
        reverseDirection={showBackButton}
        className="respark_topbar-buttons-wrapper"
      >
        {/* <SaveButton /> */}
        <StyledHistoryButtonsWrapper className="respark_topbar-history-buttons">
          <ResetButton margin="0" />
          <UndoButton margin="0" />
          <RedoButton margin="0" />
        </StyledHistoryButtonsWrapper>
      </StyledFlexCenterAlignedContainer>

      <StyledFlexCenterAlignedContainer className="">
        <ImageDimensionsAndDisplayToggle />
      </StyledFlexCenterAlignedContainer>

      <StyledFlexCenterAlignedContainer className="respark_topbar-center-options zoom">
        {!disableZooming && (
          <>
            <Separator />
            <CanvasZooming />
          </>
        )}
      </StyledFlexCenterAlignedContainer>
      <StyledFlexCenterAlignedContainer className="respark_topbar-center-options close-btn">
        {showBackButton ? <BackButton /> : <CloseButton />}
      </StyledFlexCenterAlignedContainer>
    </StyledTopbar>
  );
};
export default Topbar;
