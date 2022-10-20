
import styled from 'styled-components';
import Button from '../../../element/ui/core/button';
import Label from '../../../element/ui/core/label';

const StyledOpenMenuButton = styled(Button)`
  margin: 0 0 0 6px;
  padding: 0;
  background-color: unset !important;
`;

const StyledMenuItemIcon = styled.div`
  margin-right: 6px;

  svg,
  span {
    vertical-align: middle;
  }
`;

const StyledRatioDescription = styled(Label)`
  margin-left: 4px;
  cursor: pointer;
`;

export { StyledOpenMenuButton, StyledMenuItemIcon, StyledRatioDescription };
