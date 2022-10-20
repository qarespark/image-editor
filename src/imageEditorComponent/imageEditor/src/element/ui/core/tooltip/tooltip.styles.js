import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape/border-radius-size';
import StyledArrowTick from '../arrow-tick/arrow-tick.styles';
import { sizeTooltipMixin } from './tooltip.mixin';
import { Size } from './types';
var baseClassName = 'Tooltip';
var TooltipContainer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1xsvyg1-0"
})(function (_ref) {
  var open = _ref.open,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? Size.Sm : _ref$size,
    theme = _ref.theme;
  return css(["display:flex;align-items:center;justify-content:center;max-width:300px;min-width:16px;min-height:16px;overflow-x:hidden;overflow-y:auto;outline:0;transition:opacity 251ms cubic-bezier(0.4,0,0.2,1) 0ms;visibility:", ";opacity:", ";", " ", "{color:", ";}"], open ? 'visible' : 'hidden', open ? '1' : '0', sizeTooltipMixin[size], StyledArrowTick.ArrowTick, theme.palette[PColor.IconsPrimary]);
});
var Tooltip = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1xsvyg1-1"
})(function (_ref2) {
  var theme = _ref2.theme;
  return css(["display:inline-flex;align-items:center;padding:3px 6px;border-radius:", ";background:", ";color:", ";"], theme.shape.borderRadius[BRSize.Md], theme.palette[PColor.IconsPrimary], theme.palette[PColor.TextPrimaryInvert]);
});
var Styled = applyDisplayNames({
  Tooltip: Tooltip,
  TooltipContainer: TooltipContainer
});
export default Styled;