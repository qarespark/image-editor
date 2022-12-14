import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions'; // import type { With } from '../../utils/types';
// import type { WithTheme } from '../../theme/entity';
// import { Color as PColor } from '../../utils/types/palette';
// import type { SelectGroupProps } from './select-group.props';

import StyledInputGroup from '../input-group/input-group.styles';
var baseClassName = 'SelectGroup';
var SelectGroup = styled(StyledInputGroup.InputGroup).attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1uvutwe-0"
})([""]);
var Styled = applyDisplayNames({
  SelectGroup: SelectGroup
});
export default Styled;