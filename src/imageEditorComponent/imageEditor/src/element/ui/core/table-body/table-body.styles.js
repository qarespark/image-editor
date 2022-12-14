import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
var baseClassName = 'TableBody';
var TableBody = styled.tbody.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-197l5tw-0"
})(["display:table-row-group;"]);
var Styled = applyDisplayNames({
  TableBody: TableBody
});
export default Styled;