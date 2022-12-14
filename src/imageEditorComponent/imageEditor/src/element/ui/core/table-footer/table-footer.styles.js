import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
var baseClassName = 'TableFooter';
var TableFooter = styled.tfoot.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-36jaow-0"
})(["display:table-footer-group;"]);
var Styled = applyDisplayNames({
  TableFooter: TableFooter
});
export default Styled;