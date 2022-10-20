import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette'; // import { BorderRadiusSize as BRSize } from '../../utils/types/shape';

import InputStyled from '../input/input.styles';
import { Background } from './types';
var baseClassName = 'Select';
var Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon')
}).withConfig({
  componentId: "sc-mfrapg-0"
})(function (_ref) {
  var palette = _ref.theme.palette;
  return css(["display:flex;flex-shrink:0;color:", ";"], palette[PColor.IconsPrimary]);
});
var Container = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Container')
}).withConfig({
  componentId: "sc-mfrapg-1"
})(function (_ref2) {
  var _ref2$fullWidth = _ref2.fullWidth,
    fullWidth = _ref2$fullWidth === void 0 ? false : _ref2$fullWidth;
  return css(["position:relative;display:inline-flex;", ""], fullWidth ? 'width: 100%' : '');
});
var Select = styled(InputStyled.Input).attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-mfrapg-2"
})(function (_ref3) {
  var palette = _ref3.theme.palette,
    _ref3$background = _ref3.background,
    background = _ref3$background === void 0 ? Background.Primary : _ref3$background;
  return css(["cursor:pointer;user-select:none;background:", ";"], background === 'primary' ? palette[PColor.BackgroundPrimary] : palette[PColor.BackgroundSecondary]);
});
var Label = styled.label.attrs({
  className: generateClassNames(baseClassName, 'Label')
}).withConfig({
  componentId: "sc-mfrapg-3"
})(["flex-grow:1;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]);
var Input = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Input'),
  'aria-hidden': 'true',
  tabindex: '-1'
}).withConfig({
  componentId: "sc-mfrapg-4"
})(["left:0;width:100%;bottom:0;opacity:0;position:absolute;pointer-events:none;box-sizing:border-box;"]);
var Styled = applyDisplayNames({
  Container: Container,
  Select: Select,
  Label: Label,
  Icon: Icon,
  Input: Input
});
export default Styled;