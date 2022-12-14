import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import { modalSizeMixin } from './modal.mixin';
import { Size } from './types';
var baseClassName = 'Modal';
var Wrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Wrapper')
}).withConfig({
  componentId: "sc-80m07l-0"
})(function (_ref) {
  var open = _ref.open;
  return css(["position:fixed;right:0px;bottom:0px;top:0px;left:0px;z-index:1200;visibility:", ";"], open ? 'visible' : 'hidden');
});
var Overlay = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Overlay')
}).withConfig({
  componentId: "sc-80m07l-1"
})(function (_ref2) {
  var open = _ref2.open;
  return css(["position:fixed;right:0px;bottom:0px;top:0px;left:0px;background-color:rgba(0,0,0,0.5);z-index:-1;transition:opacity 251ms cubic-bezier(0.4,0,0.2,1) 0ms;opacity:", ";"], open ? '1' : '0');
});
var Container = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Container')
}).withConfig({
  componentId: "sc-80m07l-2"
})(function (_ref3) {
  var theme = _ref3.theme,
    _ref3$open = _ref3.open,
    open = _ref3$open === void 0 ? false : _ref3$open,
    _ref3$fullWidth = _ref3.fullWidth,
    fullWidth = _ref3$fullWidth === void 0 ? false : _ref3$fullWidth,
    _ref3$maxWidth = _ref3.maxWidth,
    maxWidth = _ref3$maxWidth === void 0 ? Size.Sm : _ref3$maxWidth;
  return css(["position:absolute;overflow-x:hidden;overflow-y:auto;transition:opacity 251ms cubic-bezier(0.4,0,0.2,1) 0ms,transform 167ms cubic-bezier(0.4,0,0.2,1) 0ms;outline:0;border-radius:", ";background-color:", ";box-shadow:0px 2px 4px ", ";visibility:", ";opacity:", ";display:flex;max-height:calc(100% - 64px);flex-direction:column;", " ", " top:50%;left:50%;transform:translate(-50%,-50%);"], theme.shape.borderRadius[BRSize.Md], theme.palette[PColor.BackgroundSecondary], theme.palette[PColor.LightShadow], open ? 'visible' : 'hidden', open ? '1' : '0', fullWidth && css(["width:calc(100% - 64px);"]), modalSizeMixin[maxWidth]);
});
var Modal = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-80m07l-3"
})(function () {
  return css(["position:relative;padding-top:8px;padding-bottom:8px;margin:0;padding:0;outline:0;display:flex;flex-direction:column;"]);
});
var Styled = applyDisplayNames({
  Modal: Modal,
  Wrapper: Wrapper,
  Overlay: Overlay,
  Container: Container
});
export default Styled;