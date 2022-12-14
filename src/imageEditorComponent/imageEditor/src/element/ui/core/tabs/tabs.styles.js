import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions'; // import type { WithTheme } from '../../theme/entity';
// import { Color as PColor } from '../../utils/types/palette';

import TabStyled from '../tab/tab.styles';
var baseClassName = 'Tabs';
var Tabs = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-18mohc8-0"
})(function () {
  return css(["display:flex;align-items:flex-start;overflow:auto;", "{&:not(:first-child){margin-left:24px;}}"], TabStyled.Tab);
});
var Styled = applyDisplayNames({
  Tabs: Tabs
});
export default Styled;