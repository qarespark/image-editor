import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
var baseClassName = 'Accordion';
var Accordion = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1g4tz7s-0"
})([""]);
var Styled = applyDisplayNames({
  Accordion: Accordion
});
export default Styled;