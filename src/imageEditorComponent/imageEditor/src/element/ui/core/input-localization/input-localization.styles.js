import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions'; // import type { With } from '../../utils/types';

import { FontVariant as FV } from '../../utils/types/typography';
import { Color as PColor } from '../../utils/types/palette'; // import { BorderRadiusSize as BRSize } from '../../utils/types/shape';

var baseClassName = 'InputLocalization';
var Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon')
}).withConfig({
  componentId: "sc-17olgvp-0"
})(function (_ref) {
  var palette = _ref.theme.palette;
  return css(["display:flex;flex-shrink:0;color:", ";&:first-child{margin-right:4px;}&:last-child{margin-left:7px;}"], palette[PColor.IconsSecondary]);
});
var Container = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Container')
}).withConfig({
  componentId: "sc-17olgvp-1"
})(["display:inline-flex;"]);
var InputLocalization = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-17olgvp-2"
})(function (_ref2) {
  var _ref2$theme = _ref2.theme,
    palette = _ref2$theme.palette,
    font = _ref2$theme.typography.font;
  return css(["position:relative;display:flex;align-items:center;cursor:pointer;color:", ";", ";"], palette[PColor.IconsSecondary], font[FV.LabelSmall]);
});
var Label = styled.label.attrs({
  className: generateClassNames(baseClassName, 'Label')
}).withConfig({
  componentId: "sc-17olgvp-3"
})(["flex-grow:1;"]);
var Styled = applyDisplayNames({
  Container: Container,
  InputLocalization: InputLocalization,
  Label: Label,
  Icon: Icon
});
export default Styled;