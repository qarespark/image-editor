import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions'; // import type { WithTheme } from '../../theme/entity';
// import { Color as PColor } from '../../utils/types/palette';
// import { FontVariant } from '../../utils/types/typography';
// import { BorderRadiusSize as BRSize } from '../../utils/types/shape';

import { positionHorizontalMixin, positionVerticalMixin } from './popup.mixin';
import { Horizontal, Vertical } from './types';
var baseClassName = 'Popup';
var Popup = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-jmtjri-0"
})(function (_ref) {
  var anchorOrigin = _ref.anchorOrigin;
  return css(["position:fixed;display:flex;align-items:center;justify-content:center;z-index:1400;", " ", ""], positionHorizontalMixin[(anchorOrigin === null || anchorOrigin === void 0 ? void 0 : anchorOrigin.horizontal) || Horizontal.Left], positionVerticalMixin[(anchorOrigin === null || anchorOrigin === void 0 ? void 0 : anchorOrigin.vertical) || Vertical.Bottom]);
});
var Styled = applyDisplayNames({
  Popup: Popup
});
export default Styled;