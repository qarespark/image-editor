import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions'; // import type { With } from '../../utils/types';

import { Color as PColor } from '../../utils/types/palette';
var baseClassName = 'Loader';
var Spinner = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Spinner')
}).withConfig({
  componentId: "sc-qrmrx9-0"
})(function () {
  return css(["position:absolute;display:inline-block;top:42.21%;left:38.77%;color:white;svg{animation:spinner 1.2s linear infinite;}"]);
});
var Loader = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-qrmrx9-1"
})(function (_ref) {
  var palette = _ref.theme.palette;
  return css(["position:relative;display:inline-flex;align-items:center;justify-content:center;color:", ";"], palette[PColor.AccentPrimary]);
});
var Styled = applyDisplayNames({
  Loader: Loader,
  Spinner: Spinner
});
export default Styled;