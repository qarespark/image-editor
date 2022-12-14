import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
var baseClassName = 'AccordionDetails';
var AccordionDetails = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1wr6wpr-0"
})(["margin:16px 0;"]);
var Styled = applyDisplayNames({
  AccordionDetails: AccordionDetails
});
export default Styled;