import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography/font-variant';
var baseClassName = 'Pagination';
var Pagination = styled.nav.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-jwx313-0"
})(function () {
  return css([""]);
});
var PaginationList = styled.div.attrs({
  className: generateClassNames(baseClassName, 'list')
}).withConfig({
  componentId: "sc-jwx313-1"
})(function () {
  return css(["margin:0;display:flex;padding:0;flex-wrap:wrap;list-style:none;align-items:center;"]);
});
var PaginationItemList = styled.li.attrs({
  className: generateClassNames(baseClassName, 'item-list')
}).withConfig({
  componentId: "sc-jwx313-2"
})(function () {
  return css([""]);
});
var PaginationItem = styled.button.attrs({
  className: generateClassNames(baseClassName, 'item')
}).withConfig({
  componentId: "sc-jwx313-3"
})(function (_ref) {
  var selected = _ref.selected,
    theme = _ref.theme;
  return css(["display:inline-flex;justify-content:center;align-items:center;text-align:center;height:26px;margin:0 3px;padding:0 6px;min-width:26px;outline:0;border:0;cursor:pointer;user-select:none;background:transparent;color:", ";", ";&:hover{color:", ";}&:disabled{color:", ";}"], selected ? theme.palette[PColor.AccentPrimaryHover] : theme.palette[PColor.TextPrimary], theme.typography.font[FontVariant.LabelSmall], theme.palette[PColor.AccentPrimaryHover], theme.palette[PColor.ButtonDisabledText]);
});
var Styled = applyDisplayNames({
  Pagination: Pagination,
  PaginationList: PaginationList,
  PaginationItemList: PaginationItemList,
  PaginationItem: PaginationItem
});
export default Styled;