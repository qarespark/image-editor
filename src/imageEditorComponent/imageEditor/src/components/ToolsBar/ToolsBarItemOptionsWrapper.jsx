
import React from 'react';
import PropTypes from 'prop-types';


import { StyledToolsBarItemOptionsWrapper } from './ToolsBar.styled';

const ToolsBarItemOptionsWrapper = ({ children }) => (
  <StyledToolsBarItemOptionsWrapper
    className="respark_tool-options-wrapper"
    hasChildren={Boolean(children)}
  >
    {children}
  </StyledToolsBarItemOptionsWrapper>
);

ToolsBarItemOptionsWrapper.defaultProps = {
  children: undefined,
};

ToolsBarItemOptionsWrapper.propTypes = {
  children: PropTypes.node,
};

export default ToolsBarItemOptionsWrapper;
