
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

const StyledSpinnerWrapper = styled.div`
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 11111;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  flex-direction: column;
  user-select: none;

  label {
    color: #ffffff;
  }
`;

const StyledSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  :after {
    content: ' ';
    display: block;
    border-radius: 0;
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    border: 33px solid #c63e3e;
    border-color: #f8558e transparent #f8558e transparent;
    -webkit-animation: hzGSKM 1.5s infinite;
    animation: hzGSKM 1.5s infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    background: #03092b;

  }
   :before {
  content: ' ';
    display: block;
    border-radius: 0;
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    border: 10px solid #c63e3e;
    border-color: #ffff transparent #ffff transparent;
    animation: ${spin} 1.5s infinite;
        position: absolute;
       top: 79%;
    left: 79%;
z-index:1;
    background: #d6d6d691;
  }
`;

export { StyledSpinnerWrapper, StyledSpinner };
