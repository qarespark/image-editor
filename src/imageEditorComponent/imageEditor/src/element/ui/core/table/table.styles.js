import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
var baseClassName = 'Table';
var Table = styled.table.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-ti7811-0"
})(["display:table;width:100%;border-collapse:collapse;border-spacing:0;"]);
var Styled = applyDisplayNames({
  Table: Table
});
export default Styled;