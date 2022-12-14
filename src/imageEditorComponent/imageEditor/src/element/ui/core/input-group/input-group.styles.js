import styled from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import StyledLabel from '../label/label.styles';
import StyledFormHint from '../form-hint/form-hint.styles';
var baseClassName = 'InputGroup';
var InputGroup = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-zhtjwh-0"
})(["", "{margin-top:4px;}", "{margin-bottom:4px;}"], StyledFormHint.FormHint, StyledLabel.Label);
var Styled = applyDisplayNames({
  InputGroup: InputGroup
});
export default Styled;