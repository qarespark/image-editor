import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions'; // import type { With } from '../../utils/types';
// import type { WithTheme } from '../../theme/entity';
// import { Color as PColor } from '../../utils/types/palette';

import DotStyled from '../dot/dot.styles'; // import type { DotsNavigationProps } from './dots-navigation.props';

var baseClassName = 'DotsNavigation';
var DotsNavigation = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1clh5a5-0"
})( // ({ theme }: With<WithTheme, DotsNavigationProps>) =>
  function () {
    return css(["", "{margin-left:12px;&:first-child{margin-left:0;}}"], DotStyled.Dot);
  });
var Styled = applyDisplayNames({
  DotsNavigation: DotsNavigation
});
export default Styled;