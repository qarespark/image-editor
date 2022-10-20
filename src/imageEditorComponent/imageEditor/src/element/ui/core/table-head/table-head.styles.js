import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
var baseClassName = 'TableHead';
var TableHead = styled.thead.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-8qu9hy-0"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["display:table-header-group;background-color:", ";"], theme.palette[PColor.BackgroundPrimary]);
});
var Styled = applyDisplayNames({
  TableHead: TableHead
});
export default Styled;