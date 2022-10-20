import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';
var baseClassName = 'AccordionHeader';
var Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon')
}).withConfig({
  componentId: "sc-1dtjsgt-0"
})(function () {
  return css(["display:inline-flex;padding-right:8px;"]);
});
var Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label')
}).withConfig({
  componentId: "sc-1dtjsgt-1"
})([""]);
var AccordionHeader = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1dtjsgt-2"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["", " display:flex;align-items:center;cursor:pointer;color:", ";"], css(theme.typography.font[FontVariant.ButtonXs]), theme.palette[PColor.LinkPrimary]);
});
var Styled = applyDisplayNames({
  AccordionHeader: AccordionHeader,
  Icon: Icon,
  Label: Label
});
export default Styled;