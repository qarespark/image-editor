import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
// import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
var baseClassName = 'Switcher';
var Input = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Input'),
  type: 'checkbox'
}).withConfig({
  componentId: "sc-16vo7ts-0"
})(function () {
  return css(["position:absolute;top:0;left:0;width:100%;height:100%;margin:0;opacity:0;padding:0;cursor:inherit;z-index:1;"]);
});
var Switcher = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-16vo7ts-1"
})(function (_ref) {
  var palette = _ref.theme.palette;
  return css(["position:relative;display:inline-flex;cursor:pointer;color:", ";"], palette[PColor.AccentPrimary]);
});
var Styled = applyDisplayNames({
  Switcher: Switcher,
  Input: Input
});
export default Styled;