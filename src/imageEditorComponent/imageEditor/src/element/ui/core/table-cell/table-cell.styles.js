import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';
var baseClassName = 'TableCell';
var TableCellHeader = styled.th.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-k5jv47-0"
})(function (_ref) {
  var _ref$theme = _ref.theme,
    palette = _ref$theme.palette,
    typography = _ref$theme.typography,
    align = _ref.align,
    padding = _ref.padding,
    size = _ref.size;
  return css(["", " display:table-cell;vertical-align:inherit;text-align:left;padding:", ";color:", ";text-align:", ";flex-direction:", ";padding:", ";width:", ";& > *:{padding:", ";}"], css(typography.font[FontVariant.TextEmphasis]), size === 'small' ? '6px 16px' : '14px', palette[PColor.TextPrimary], align, align === 'right' ? 'row-reverse' : '', padding === 'options' ? "".concat(size === 'small' ? '0 12px 0 16px' : '0px 0px 0px 4px') : "".concat(padding === 'none' ? 0 : ''), padding === 'options' ? "".concat(size === 'small' ? '24px' : '48px') : '', padding === 'options' && size === 'small' ? 0 : '');
});
var TableCellData = styled.td.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-k5jv47-1"
})(function (_ref2) {
  var _ref2$theme = _ref2.theme,
    palette = _ref2$theme.palette,
    typography = _ref2$theme.typography,
    align = _ref2.align,
    padding = _ref2.padding,
    size = _ref2.size;
  return css(["", " display:table-cell;vertical-align:inherit;text-align:left;padding:", ";color:", ";border-bottom:1px solid ", ";text-align:", ";flex-direction:", ";padding:", ";width:", ";& > *:{padding:", ";}"], css(typography.font[FontVariant.TextNormal]), size === 'small' ? '6px 16px' : '12px', palette[PColor.TextPrimary], palette[PColor.BordersSecondary], align, align === 'right' ? 'row-reverse' : '', padding === 'options' ? "".concat(size === 'small' ? '0 12px 0 16px' : '0px 0px 0px 4px') : "".concat(padding === 'none' ? 0 : ''), padding === 'options' ? "".concat(size === 'small' ? '24px' : '48px') : '', padding === 'options' && size === 'small' ? 0 : '');
});
var Styled = applyDisplayNames({
  TableCellHeader: TableCellHeader,
  TableCellData: TableCellData
});
export default Styled;