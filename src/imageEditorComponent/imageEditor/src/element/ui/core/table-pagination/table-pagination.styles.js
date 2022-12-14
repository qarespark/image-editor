import styled, { css } from 'styled-components';

import { Color as PC } from '../../../ui/utils/types/palette';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
var baseClassName = 'TablePagination';
var TablePagination = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1v87j54-0"
})(function () {
  return css(["display:flex;align-items:center;justify-content:space-between;height:54px;"]);
});
var Section = styled.div.attrs({
  className: generateClassNames(baseClassName, 'section')
}).withConfig({
  componentId: "sc-1v87j54-1"
})(function () {
  return css(["display:flex;align-items:center;justify-content:space-between;"]);
});
var ShowPages = styled.label.attrs({
  className: generateClassNames(baseClassName, 'label')
}).withConfig({
  componentId: "sc-1v87j54-2"
})(function () {
  return css(["margin-right:24px;"]);
});
var Amount = styled.div.attrs({
  className: generateClassNames(baseClassName, 'amount')
}).withConfig({
  componentId: "sc-1v87j54-3"
})([""]);
var WeightedText = styled.span.attrs({
  className: generateClassNames(baseClassName, 'weighted-text')
}).withConfig({
  componentId: "sc-1v87j54-4"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["font-weight:700;color:", ";"], theme.palette[PC.TextPrimary]);
});
var Styled = applyDisplayNames({
  TablePagination: TablePagination,
  ShowPages: ShowPages,
  Amount: Amount,
  Section: Section,
  WeightedText: WeightedText
});
export default Styled;