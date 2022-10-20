
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Revert from '../../element/icons/revert';
import Warning from '../../element/icons/warning';


import { useStore } from '../../hooks';
import Modal from '../../components/common/Modal';
import { RESET } from '../../actions';
import { StyledHistoryButton } from './Topbar.styled';

const ResetButton = ({ margin }) => {
  const {
    dispatch,
    isResetted = true,
    theme,
    feedback,
    t,
    config,
  } = useStore();

  const isBlockerError = feedback.duration === 0;

  const [isModalOpened, setIsModalOpened] = useState(false);

  const cancelModal = () => {
    setIsModalOpened(false);
  };

  const openModal = () => {
    setIsModalOpened(true);
  };

  const dispatchReset = useCallback(() => {
    dispatch({ type: RESET, payload: { config } });
    cancelModal();
  }, [config]);

  const WarningIcon = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"></path></g></svg>;

  return (
    <>
      <StyledHistoryButton
        className="respark_topbar-reset-button"
        color="link"
        onClick={isResetted ? undefined : openModal}
        disabled={isResetted || isBlockerError}
        title={t('resetOperations')}
        margin={margin}
      >
        <Revert size={12} />
      </StyledHistoryButton>
      {isModalOpened && (
        <Modal
          title={t('changesLoseConfirmation')}
          hint={t('changesLoseConfirmationHint')}
          isOpened={isModalOpened}
          onCancel={cancelModal}
          onDone={dispatchReset}
          Icon={WarningIcon}
          doneLabel={t('continue')}
          cancelLabel={t('cancel')}
          doneButtonColor="error"
          doneButtonStyle={{ background: theme.palette.warning }}
        />
      )}
    </>
  );
};

ResetButton.defaultProps = {
  margin: undefined,
};

ResetButton.propTypes = {
  margin: PropTypes.string,
};

export default ResetButton;
