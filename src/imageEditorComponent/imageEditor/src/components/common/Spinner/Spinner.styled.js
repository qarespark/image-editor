
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
    -webkit-animation: ${spin} 5s infinite;
    animation: ${spin} 5s infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    background: #03092b;
    box-shadow: #1b2f527a 0px 3px 9px 0px;
  }
   :before {
    content: ' ';
    display: block;
    border-radius: 7px;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 59px solid #c63e3e;
    border-color: #ffa4c840 #1b2f5238 #ffa4c83b #1b2f5224;
    -webkit-animation: ${spin} 5s infinite;
    animation: ${spin} 5s infinite;
    position: absolute;
    top: 14px;
    left: 14px;
    z-index: 0;
    background: #f8fafb1f;
    -webkit-backdrop-filter: saturate(180%) blur(7px);
    backdrop-filter: saturate(180%) blur(7px);
    box-shadow: #e5eaf242 0px 3px 9px 0px;
  }
`;

export { StyledSpinnerWrapper, StyledSpinner };
