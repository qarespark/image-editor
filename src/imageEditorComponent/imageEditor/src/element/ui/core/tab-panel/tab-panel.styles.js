import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions'; // import type { WithTheme } from '../../theme/entity';
// import { Color as PColor } from '../../utils/types/palette';

var baseClassName = 'TabPanel';
var TabPanel = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1sm82xj-0"
})(function () {
  return css(["margin-top:20px;"]);
});
var Styled = applyDisplayNames({
  TabPanel: TabPanel
});
export default Styled;