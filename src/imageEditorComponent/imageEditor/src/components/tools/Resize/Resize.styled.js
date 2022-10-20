
import styled from 'styled-components';
import IconButton from '../../../element/ui/core/icon-button';
import Input from '../../../element/ui/core/input';
import Label from '../../../element/ui/core/label';

const StyledResizeWrapper = styled.div`
  display: flex;
  justify-content: ${({ alignLeft }) => (alignLeft ? 'left' : 'center')};
  align-items: center;
  flex-wrap: wrap;
`;

const StyledResizeInput = styled(Input)`
  width: 70px;
  height: 24px;
  margin: ${({ noLeftMargin }) => (noLeftMargin ? '8px 8px 8px 0' : '8px')};
`;

const StyledRatioLockIcon = styled(IconButton)`
  margin-right: 16px;
`;

const StyledXLabel = styled(Label)`
  font-size: 13px;
  line-height: 15px;
`;

export {
  StyledResizeWrapper,
  StyledResizeInput,
  StyledRatioLockIcon,
  StyledXLabel,
};
