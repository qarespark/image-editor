import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions'; // import type { With } from '../../utils/types';
// import type { WithTheme } from '../../theme/entity';
// import { Color as PColor } from '../../utils/types/palette';
// import { BorderRadiusSize as BRSize } from '../../utils/types/shape';

var baseClassName = 'Robot';
var Robot = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-q3dl9f-0"
})(function () {
  return css(["display:flex;"]);
});
var Styled = applyDisplayNames({
  Robot: Robot
});
export default Styled;