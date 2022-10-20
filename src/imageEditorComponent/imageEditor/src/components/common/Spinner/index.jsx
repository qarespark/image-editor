
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../../element/ui/core/label';


import { StyledSpinnerWrapper, StyledSpinner } from './Spinner.styled';

const Spinner = ({ label }) => {
  return (
    <StyledSpinnerWrapper className="respark_spinner-wrapper">
      <StyledSpinner className="respark_spinner" />
      {label && <Label className="respark_spinner-label">{label}</Label>}
    </StyledSpinnerWrapper>
  );
};

Spinner.defaultProps = {
  label: '',
};

Spinner.propTypes = {
  label: PropTypes.string,
};

export default Spinner;
