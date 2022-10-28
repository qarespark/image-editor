
import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal as LibModal,
  ModalActions,
  Button,
  ModalContent,
} from '../../../element/ui/core';


import { StyledModalTitle } from './Modal.styled';

const style = { width: 300 };

const Modal = ({
  title,
  hint,
  Icon,
  onDone,
  onCancel,
  doneLabel,
  cancelLabel,
  isOpened,
  doneButtonStyle,
  doneButtonColor = 'primary',
  cancelButtonColor = 'secondary',
  children,
  areButtonsDisabled,
  zIndex,
  className,
}) => {
  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      onDone(e);
    }
  };

  return (
    <LibModal
      className={className}
      open={isOpened}
      onClose={onCancel}
      style={{ ...style, zIndex }}
      onKeyUp={onKeyUp}
    >
      <StyledModalTitle
        icon={<Icon size={24} />}
        iconShadow
        onClose={onCancel}
        primary={title}
        secondary={hint}
        variant="with-icon"
      />
      {children && <ModalContent>{children}</ModalContent>}
      <ModalActions align="center">
        <Button
          className='secondary-btn'
          color={cancelButtonColor}
          onClick={onCancel}
          size="md"
          disabled={areButtonsDisabled}
          style={{
            color: "var(--primary-text-color)",
            backgroundColor: "var(--primary-bg-color)",
            borderRadius: '4px',
            fontSize: '12px',
            marginTop: "20px",
            padding: "10px 15px",
            width: "48%",
            textAlign: "center",
            fontFamily: "poppins",
            justifyContent: "center",
            display: 'flex'
          }}
        >
          {cancelLabel}
        </Button>
        <Button
          className='primary-btn d-f-c'
          color={doneButtonColor}
          onClick={onDone}
          size="md"
          // style={doneButtonStyle}
          disabled={areButtonsDisabled}
          style={{
            color: "white",
            backgroundColor: "var(--primary-color)",
            borderRadius: '4px',
            fontSize: '12px',
            marginTop: "20px",
            padding: "10px 15px",
            width: "48%",
            textAlign: "center",
            fontFamily: "poppins",
            justifyContent: "center",
            display: 'flex',
          }}
        >
          {doneLabel}
        </Button>
      </ModalActions>
    </LibModal>
  );
};

Modal.defaultProps = {
  hint: '',
  isOpened: false,
  doneLabel: 'Yes',
  cancelLabel: 'No',
  doneButtonStyle: undefined,
  doneButtonColor: 'link',
  cancelButtonColor: 'link',
  children: undefined,
  areButtonsDisabled: false,
  zIndex: undefined,
  className: undefined,
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.instanceOf(Object).isRequired,
  onDone: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  hint: PropTypes.string,
  isOpened: PropTypes.bool,
  doneLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  doneButtonStyle: PropTypes.instanceOf(Object),
  doneButtonColor: PropTypes.string,
  cancelButtonColor: PropTypes.string,
  children: PropTypes.node,
  areButtonsDisabled: PropTypes.bool,
  zIndex: PropTypes.number,
  className: PropTypes.string,
};

export default Modal;
