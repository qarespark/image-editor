import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { PopperMixin } from './popper.mixin';
import { Position } from './types';
var baseClassName = 'Popper';
var Popper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1373tsp-0"
})(function () {
  return css([""]);
});
var PopperWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'wrapper')
}).withConfig({
  componentId: "sc-1373tsp-1"
})(function (_ref) {
  var zIndex = _ref.zIndex;
  return css(["position:relative;z-index:", ";"], zIndex);
});
var Arrow = styled.div.attrs({
  className: generateClassNames(baseClassName, 'arrow')
}).withConfig({
  componentId: "sc-1373tsp-2"
})(function (_ref2) {
  var _ref2$position = _ref2.position,
    position = _ref2$position === void 0 ? Position.Right : _ref2$position,
    theme = _ref2.theme;
  return css(["width:8px;height:8px;position:absolute;&::before{content:'';background:", ";width:8px;height:8px;transform:rotate(45deg);position:absolute;top:0;left:0;z-index:-1;}", ""], theme.palette[PColor.IconsPrimary], PopperMixin[position]);
});
var Overlay = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Overlay')
}).withConfig({
  componentId: "sc-1373tsp-3"
})(function () {
  return css(["position:fixed;right:0px;bottom:0px;top:0px;left:0px;background-color:transparent;"]);
});
var Styled = applyDisplayNames({
  Popper: Popper,
  Overlay: Overlay,
  Arrow: Arrow,
  PopperWrapper: PopperWrapper
});
export default Styled;