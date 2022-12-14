import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Align } from './types';
var baseClassName = 'ModalActions';
var ModalActions = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1wg6u00-0"
})(function (_ref) {
  var _ref$align = _ref.align,
    align = _ref$align === void 0 ? Align.Center : _ref$align;
  return css(["position:relative;display:flex;align-items:center;padding:12px 16px;justify-content:", ";> *:not(:first-child){margin-left:8px;}"], align === Align.Right ? 'flex-end' : align);
});
var Styled = applyDisplayNames({
  ModalActions: ModalActions
});
export default Styled;