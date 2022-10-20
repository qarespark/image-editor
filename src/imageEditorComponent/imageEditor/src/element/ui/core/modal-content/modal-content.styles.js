import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
var baseClassName = 'ModalContent';
var ModalContent = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1ng1w0v-0"
})(function () {
  return css(["position:relative;padding:15px 16px;"]);
});
var Styled = applyDisplayNames({
  ModalContent: ModalContent
});
export default Styled;