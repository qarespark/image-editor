import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
var baseClassName = 'TableRow';
var TableRow = styled.tr.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1ouaks7-0"
})(function (_ref) {
  var palette = _ref.theme.palette,
    hover = _ref.hover,
    selected = _ref.selected;
  return css(["color:inherit;display:table-row;vertical-align:middle;outline:0;background-color:", ";&:hover{background-color:", ";}"], selected ? "".concat(palette[PColor.BackgroundPrimaryHover]) : '', hover ? "".concat(palette[PColor.BackgroundPrimaryHover]) : '');
});
var Styled = applyDisplayNames({
  TableRow: TableRow
});
export default Styled;