import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
// import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
var baseClassName = 'Radio';
var Input = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Input'),
  type: 'radio'
}).withConfig({
  componentId: "sc-xr271d-0"
})(function () {
  return css(["position:absolute;top:0;left:0;width:100%;height:100%;margin:0;opacity:0;padding:0;cursor:inherit;z-index:1;"]);
});
var Radio = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-xr271d-1"
})(function (_ref) {
  var palette = _ref.theme.palette;
  return css(["position:relative;display:inline-flex;align-items:inherit;justify-content:inherit;cursor:pointer;color:", ";"], palette[PColor.AccentPrimary]);
});
var Styled = applyDisplayNames({
  Radio: Radio,
  Input: Input
});
export default Styled;